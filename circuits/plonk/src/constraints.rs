/*****************************************************************************************************************

This source file implements Plonk circuit constraint primitive.

*****************************************************************************************************************/

use algebra::{FftField, SquareRootField};
use ff_fft::{EvaluationDomain, DensePolynomial, Evaluations, Radix2EvaluationDomain as Domain};
pub use super::polynomials::{WitnessOverDomains, WitnessShifts, WitnessEvals};
pub use super::gate::{CircuitGate, GateType, SPONGE_WIDTH};
pub use super::domains::EvaluationDomains;
use array_init::array_init;
use rand_core::OsRng;

#[derive(Clone)]
pub struct ConstraintSystem<F: FftField>
{
    pub public: usize,                      // number of public inputs
    pub domain: EvaluationDomains<F>,       // evaluation domains
    pub gates:  Vec<CircuitGate<F>>,        // circuit gates

    // POLYNOMIALS OVER THE MONOMIAL BASE    

    pub sigmam: [DensePolynomial<F>; 3],    // permutation polynomial array

    // generic constraint selector polynomials
    pub qlm:    DensePolynomial<F>,         // left input wire polynomial
    pub qrm:    DensePolynomial<F>,         // right input wire polynomial
    pub qom:    DensePolynomial<F>,         // output wire polynomial
    pub qmm:    DensePolynomial<F>,         // multiplication polynomial
    pub qc:     DensePolynomial<F>,         // constant wire polynomial

    // poseidon selector polynomials
    pub rcm:    [DensePolynomial<F>; SPONGE_WIDTH], // round constant polynomials
    pub fpm:    DensePolynomial<F>,         // full/partial round indicator polynomial
    pub pfm:    DensePolynomial<F>,         // partial/full round indicator polynomial
    pub psm:    DensePolynomial<F>,         // poseidon constraint selector polynomial
    
    // EC point addition constraint polynomials
    pub add1m:  DensePolynomial<F>,         // EC point addition constraint selector polynomial
    pub add2m:  DensePolynomial<F>,         // EC point distinctness constraint selector polynomial

    // POLYNOMIALS OVER LAGRANGE BASE

    // generic constraint selector polynomials
    pub qll:     Evaluations<F, Domain<F>>, // left input wire polynomial over domain.d2
    pub qrl:     Evaluations<F, Domain<F>>, // right input wire polynomial over domain.d2
    pub qol:     Evaluations<F, Domain<F>>, // output wire polynomial over domain.d2
    pub qml:     Evaluations<F, Domain<F>>, // multiplication evaluations over domain.d3

    // permutation polynomials
    pub sigmal1:[Vec<F>; 3],                // permutation polynomial array evaluations over domain d1
    pub sigmal4:[Evaluations<F, Domain<F>>; 3], // permutation polynomial array evaluations over domain d4
    pub sid:    Vec<F>,                     // SID polynomial

    // poseidon selector polynomials over Lagrange bases
    pub fpl:    Evaluations<F, Domain<F>>,  // full/partial round indicator evaluations w over domain.dp
    pub pfl:    Evaluations<F, Domain<F>>,  // partial/full round indicator 1-w evaluations over domain.d2
    pub ps2:    Evaluations<F, Domain<F>>,  // poseidon selector over domain.d2
    pub psp:    Evaluations<F, Domain<F>>,  // poseidon selector over domain.dp

    // EC point addition selector polynomials over Lagrange bases
    pub add1l3: Evaluations<F, Domain<F>>,  // EC point addition selector evaluations w over domain.d3
    pub add1l4: Evaluations<F, Domain<F>>,  // EC point addition selector evaluations w over domain.d4

    pub l0:     Evaluations<F, Domain<F>>,  // 0-th Lagrange evaluated over domain.d4
    pub l1:     Evaluations<F, Domain<F>>,  // 1-st Lagrange evaluated over domain.d4

    pub r:      F,                          // coordinate shift for right wires
    pub o:      F,                          // coordinate shift for output wires
}

impl<F: FftField + SquareRootField> ConstraintSystem<F> 
{
    pub fn create
    (
        mut gates: Vec<CircuitGate<F>>,
        public: usize,
    ) -> Option<Self>
    {
        let domain = EvaluationDomains::<F>::create(gates.len())?;
        let mut sid = domain.d1.elements().map(|elm| {elm}).collect::<Vec<_>>();

        // sample the coordinate shifts
        let r =
        {
            let mut r = domain.d1.sample_element_outside_domain(&mut OsRng);
            while r.legendre().is_qnr() == false {r = domain.d1.sample_element_outside_domain(&mut OsRng)}
            r
        };
        let o =
        {
            let mut o = domain.d1.sample_element_outside_domain(&mut OsRng);
            while o.legendre().is_qnr() == false || r==o {o = domain.d1.sample_element_outside_domain(&mut OsRng)}
            o
        };

        let n = domain.d1.size();
        let mut padding = (gates.len()..n).map(|i| CircuitGate::<F>::zero((i,i), (n+i,n+i), (2*n+i,2*n+i))).collect();
        gates.append(&mut padding);

        let s =
        [
            sid.clone(),
            domain.d1.elements().map(|elm| {r * &elm}).collect(),
            domain.d1.elements().map(|elm| {o * &elm}).collect(),
        ];
        let mut sigmal1 = s.clone();

        // compute permutation polynomials
        gates.iter().filter(|&g| g.typ != GateType::Zero).for_each
        (
            |gate|
            {
                sigmal1[0][gate.l.0] = s[gate.l.1 / n][gate.l.1 % n];
                sigmal1[1][gate.r.0-n] = s[gate.r.1 / n][gate.r.1 % n];
                sigmal1[2][gate.o.0-2*n] = s[gate.o.1 / n][gate.o.1 % n];
            }
        );
        let sigmam: [DensePolynomial<F>; 3] = array_init
            (|i| Evaluations::<F, Domain<F>>::from_vec_and_domain(sigmal1[i].clone(), domain.d1).interpolate());

        let mut s = sid[0..3].to_vec();
        sid.append(&mut s);

        // compute generic constraint polynomials
        let qlm = Evaluations::<F, Domain<F>>::from_vec_and_domain(gates.iter().map(|gate| gate.ql()).collect(), domain.d1).interpolate();
        let qrm = Evaluations::<F, Domain<F>>::from_vec_and_domain(gates.iter().map(|gate| gate.qr()).collect(), domain.d1).interpolate();
        let qom = Evaluations::<F, Domain<F>>::from_vec_and_domain(gates.iter().map(|gate| gate.qo()).collect(), domain.d1).interpolate();
        let qmm = Evaluations::<F, Domain<F>>::from_vec_and_domain(gates.iter().map(|gate| gate.qm()).collect(), domain.d1).interpolate();
        
        // compute poseidon constraint polynomials
        let psm = Evaluations::<F, Domain<F>>::from_vec_and_domain(gates.iter().map(|gate| gate.poseidon()).collect(), domain.d1).interpolate();
        let fpm = Evaluations::<F, Domain<F>>::from_vec_and_domain(gates.iter().map(|gate| gate.fp()).collect(), domain.d1).interpolate();
        let pfm = &psm - &fpm;

        // compute EC point addition constraint polynomials
        let add1m = Evaluations::<F, Domain<F>>::from_vec_and_domain(gates.iter().map(|gate| gate.add1()).collect(), domain.d1).interpolate();
        let add2m = Evaluations::<F, Domain<F>>::from_vec_and_domain(gates.iter().map(|gate| gate.add2()).collect(), domain.d1).interpolate();

        Some(ConstraintSystem
        {
            domain,
            public,
            sid,
            sigmal1,
            sigmal4: array_init(|i| sigmam[i].evaluate_over_domain_by_ref(domain.d4)),
            sigmam,

            // generic constraint polynomials
            qll: qlm.evaluate_over_domain_by_ref(domain.d2),
            qrl: qrm.evaluate_over_domain_by_ref(domain.d2),
            qol: qom.evaluate_over_domain_by_ref(domain.d2),
            qml: qmm.evaluate_over_domain_by_ref(domain.d3),
            qlm,
            qrm,
            qom,
            qmm,
            qc: Evaluations::<F, Domain<F>>::from_vec_and_domain(gates.iter().map(|gate| gate.qc()).collect(), domain.d1).interpolate(),
            
            // poseidon constraint polynomials
            rcm: array_init(|i| Evaluations::<F, Domain<F>>::from_vec_and_domain(gates.iter().map(|gate| gate.rc()[i]).collect(), domain.d1).interpolate()),
            ps2: psm.evaluate_over_domain_by_ref(domain.d2),
            psp: psm.evaluate_over_domain_by_ref(domain.dp),
            fpl: fpm.evaluate_over_domain_by_ref(domain.dp),
            pfl: pfm.evaluate_over_domain_by_ref(domain.d2),
            psm,
            fpm,
            pfm,
            
            // EC point addition constraint polynomial
            add1l3: add1m.evaluate_over_domain_by_ref(domain.d3),
            add1l4: add1m.evaluate_over_domain_by_ref(domain.d4),
            add1m,
            add2m,

            l0: DensePolynomial::from_coefficients_slice(&[F::one()]).evaluate_over_domain_by_ref(domain.d4),
            l1: DensePolynomial::from_coefficients_slice(&[F::zero(), F::one()]).evaluate_over_domain_by_ref(domain.d4),
            gates,
            r,
            o,
        })
    }
    
    // This function verifies the consistency of the wire
    // assignements (witness) against the constraints
    //     witness: wire assignement witness
    //     RETURN: verification status
    pub fn verify
    (
        &self,
        witness: &Vec<F>
    ) -> bool
    {
        if witness.len() != 3*self.domain.d1.size() {return false}
        for i in self.public..self.gates.len()
        {
            if
            // verify permutation consistency
            witness[self.gates[i].l.1] != witness[self.gates[i].l.0] ||
            witness[self.gates[i].r.1] != witness[self.gates[i].r.0] ||
            witness[self.gates[i].o.1] != witness[self.gates[i].o.0] ||
            
            // verify witness against constraints
            !self.gates[i].verify(witness, if i+1==self.gates.len() {&self.gates[i]} else {&self.gates[i+1]})
            {
                return false
            }
        }
        true
    }

    // utility functions for shifting poly along domain coordinate
    pub fn shift(&self, poly: &DensePolynomial<F>) -> DensePolynomial<F>
    {
        DensePolynomial::from_coefficients_vec(poly.coeffs.iter().zip(self.sid.iter()).
            map(|(p, w)| *p * w).collect::<Vec<_>>())
    }
    
    // evaluate witness polynomials over domains
    pub fn evaluate
    (
        &self,
        l: &DensePolynomial<F>,
        r: &DensePolynomial<F>,
        o: &DensePolynomial<F>,
    ) -> WitnessOverDomains<F>
    {
        // compute shifted witness polynomials
        let ln = self.shift(&l);
        let rn = self.shift(&r);
        let on = self.shift(&o);

        WitnessOverDomains
        {
            d2: WitnessShifts
            {
                this: WitnessEvals
                {
                    l: l.evaluate_over_domain_by_ref(self.domain.d2),
                    r: r.evaluate_over_domain_by_ref(self.domain.d2),
                    o: o.evaluate_over_domain_by_ref(self.domain.d2),
                },
                next: WitnessEvals
                {
                    l: ln.evaluate_over_domain_by_ref(self.domain.d2),
                    r: rn.evaluate_over_domain_by_ref(self.domain.d2),
                    o: on.evaluate_over_domain_by_ref(self.domain.d2),
                }
            },
            d3: WitnessShifts
            {
                this: WitnessEvals
                {
                    l: l.evaluate_over_domain_by_ref(self.domain.d3),
                    r: r.evaluate_over_domain_by_ref(self.domain.d3),
                    o: o.evaluate_over_domain_by_ref(self.domain.d3),
                },
                next: WitnessEvals
                {
                    l: ln.evaluate_over_domain_by_ref(self.domain.d3),
                    r: rn.evaluate_over_domain_by_ref(self.domain.d3),
                    o: on.evaluate_over_domain_by_ref(self.domain.d3),
                }
            },
            d4: WitnessShifts
            {
                this: WitnessEvals
                {
                    l: l.evaluate_over_domain_by_ref(self.domain.d4),
                    r: r.evaluate_over_domain_by_ref(self.domain.d4),
                    o: o.evaluate_over_domain_by_ref(self.domain.d4),
                },
                next: WitnessEvals
                {
                    l: ln.evaluate_over_domain_by_ref(self.domain.d4),
                    r: rn.evaluate_over_domain_by_ref(self.domain.d4),
                    o: on.evaluate_over_domain_by_ref(self.domain.d4),
                }
            },
            dp: WitnessShifts
            {
                this: WitnessEvals
                {
                    l: l.evaluate_over_domain_by_ref(self.domain.dp),
                    r: r.evaluate_over_domain_by_ref(self.domain.dp),
                    o: o.evaluate_over_domain_by_ref(self.domain.dp),
                },
                next: WitnessEvals
                {
                    l: ln.evaluate_over_domain_by_ref(self.domain.dp),
                    r: rn.evaluate_over_domain_by_ref(self.domain.dp),
                    o: on.evaluate_over_domain_by_ref(self.domain.dp),
                }
            },
        }
    }
}
