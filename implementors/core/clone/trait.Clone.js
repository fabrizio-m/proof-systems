(function() {var implementors = {};
implementors["commitment_dlog"] = [{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: CanonicalDeserialize + CanonicalSerialize,&nbsp;</span>","synthetic":false,"types":["commitment_dlog::commitment::PolyComm"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.OpeningProof.html\" title=\"struct commitment_dlog::commitment::OpeningProof\">OpeningProof</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["commitment_dlog::commitment::OpeningProof"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"commitment_dlog/srs/struct.SRS.html\" title=\"struct commitment_dlog::srs::SRS\">SRS</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G::BaseField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["commitment_dlog::srs::SRS"]}];
implementors["kimchi"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"kimchi/alphas/enum.ConstraintType.html\" title=\"enum kimchi::alphas::ConstraintType\">ConstraintType</a>","synthetic":false,"types":["kimchi::alphas::ConstraintType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/alphas/struct.Builder.html\" title=\"struct kimchi::alphas::Builder\">Builder</a>","synthetic":false,"types":["kimchi::alphas::Builder"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/constraints/struct.LookupConstraintSystem.html\" title=\"struct kimchi::circuits::constraints::LookupConstraintSystem\">LookupConstraintSystem</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::constraints::LookupConstraintSystem"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/constraints/struct.ConstraintSystem.html\" title=\"struct kimchi::circuits::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::constraints::ConstraintSystem"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/domains/struct.EvaluationDomains.html\" title=\"struct kimchi::circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::domains::EvaluationDomains"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.Column.html\" title=\"enum kimchi::circuits::expr::Column\">Column</a>","synthetic":false,"types":["kimchi::circuits::expr::Column"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/expr/struct.Variable.html\" title=\"struct kimchi::circuits::expr::Variable\">Variable</a>","synthetic":false,"types":["kimchi::circuits::expr::Variable"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.ConstantExpr.html\" title=\"enum kimchi::circuits::expr::ConstantExpr\">ConstantExpr</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::expr::ConstantExpr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/expr/struct.CacheId.html\" title=\"struct kimchi::circuits::expr::CacheId\">CacheId</a>","synthetic":false,"types":["kimchi::circuits::expr::CacheId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.Op2.html\" title=\"enum kimchi::circuits::expr::Op2\">Op2</a>","synthetic":false,"types":["kimchi::circuits::expr::Op2"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.Expr.html\" title=\"enum kimchi::circuits::expr::Expr\">Expr</a>&lt;C&gt;","synthetic":false,"types":["kimchi::circuits::expr::Expr"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.PolishToken.html\" title=\"enum kimchi::circuits::expr::PolishToken\">PolishToken</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::expr::PolishToken"]},{"text":"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/expr/struct.Linearization.html\" title=\"struct kimchi::circuits::expr::Linearization\">Linearization</a>&lt;E&gt;","synthetic":false,"types":["kimchi::circuits::expr::Linearization"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.CurrOrNext.html\" title=\"enum kimchi::circuits::gate::CurrOrNext\">CurrOrNext</a>","synthetic":false,"types":["kimchi::circuits::gate::CurrOrNext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.LocalPosition.html\" title=\"struct kimchi::circuits::gate::LocalPosition\">LocalPosition</a>","synthetic":false,"types":["kimchi::circuits::gate::LocalPosition"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.SingleLookup.html\" title=\"struct kimchi::circuits::gate::SingleLookup\">SingleLookup</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::gate::SingleLookup"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.JointLookup.html\" title=\"struct kimchi::circuits::gate::JointLookup\">JointLookup</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::gate::JointLookup"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.GateType.html\" title=\"enum kimchi::circuits::gate::GateType\">GateType</a>","synthetic":false,"types":["kimchi::circuits::gate::GateType"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.LookupInfo.html\" title=\"struct kimchi::circuits::gate::LookupInfo\">LookupInfo</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::gate::LookupInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.LookupsUsed.html\" title=\"enum kimchi::circuits::gate::LookupsUsed\">LookupsUsed</a>","synthetic":false,"types":["kimchi::circuits::gate::LookupsUsed"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.CircuitGate.html\" title=\"struct kimchi::circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::gate::CircuitGate"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomial/struct.WitnessEvals.html\" title=\"struct kimchi::circuits::polynomial::WitnessEvals\">WitnessEvals</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomial::WitnessEvals"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomial/struct.WitnessShifts.html\" title=\"struct kimchi::circuits::polynomial::WitnessShifts\">WitnessShifts</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomial::WitnessShifts"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomial/struct.WitnessOverDomains.html\" title=\"struct kimchi::circuits::polynomial::WitnessOverDomains\">WitnessOverDomains</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomial::WitnessOverDomains"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomial/struct.LookupEvals.html\" title=\"struct kimchi::circuits::polynomial::LookupEvals\">LookupEvals</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomial::LookupEvals"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomial/struct.LookupShifts.html\" title=\"struct kimchi::circuits::polynomial::LookupShifts\">LookupShifts</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomial::LookupShifts"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomial/struct.LookupPolys.html\" title=\"struct kimchi::circuits::polynomial::LookupPolys\">LookupPolys</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomial::LookupPolys"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomials/lookup/struct.CombinedEntry.html\" title=\"struct kimchi::circuits::polynomials::lookup::CombinedEntry\">CombinedEntry</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomials::lookup::CombinedEntry"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomials/lookup/struct.UncombinedEntry.html\" title=\"struct kimchi::circuits::polynomials::lookup::UncombinedEntry\">UncombinedEntry</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomials::lookup::UncombinedEntry"]},{"text":"impl&lt;Field:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/scalars/struct.LookupEvaluations.html\" title=\"struct kimchi::circuits::scalars::LookupEvaluations\">LookupEvaluations</a>&lt;Field&gt;","synthetic":false,"types":["kimchi::circuits::scalars::LookupEvaluations"]},{"text":"impl&lt;Field:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/scalars/struct.ProofEvaluations.html\" title=\"struct kimchi::circuits::scalars::ProofEvaluations\">ProofEvaluations</a>&lt;Field&gt;","synthetic":false,"types":["kimchi::circuits::scalars::ProofEvaluations"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/scalars/struct.RandomOracles.html\" title=\"struct kimchi::circuits::scalars::RandomOracles\">RandomOracles</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::scalars::RandomOracles"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/circuits/wires/struct.Wire.html\" title=\"struct kimchi::circuits::wires::Wire\">Wire</a>","synthetic":false,"types":["kimchi::circuits::wires::Wire"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/prover/struct.LookupCommitments.html\" title=\"struct kimchi::prover::LookupCommitments\">LookupCommitments</a>&lt;G&gt;","synthetic":false,"types":["kimchi::prover::LookupCommitments"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/prover/struct.ProverCommitments.html\" title=\"struct kimchi::prover::ProverCommitments\">ProverCommitments</a>&lt;G&gt;","synthetic":false,"types":["kimchi::prover::ProverCommitments"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"kimchi/prover/struct.ProverProof.html\" title=\"struct kimchi::prover::ProverProof\">ProverProof</a>&lt;G&gt;","synthetic":false,"types":["kimchi::prover::ProverProof"]}];
implementors["mina_curves"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mina_curves/pasta/pallas/struct.PallasParameters.html\" title=\"struct mina_curves::pasta::pallas::PallasParameters\">PallasParameters</a>","synthetic":false,"types":["mina_curves::pasta::curves::pallas::PallasParameters"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mina_curves/pasta/vesta/struct.VestaParameters.html\" title=\"struct mina_curves::pasta::vesta::VestaParameters\">VestaParameters</a>","synthetic":false,"types":["mina_curves::pasta::curves::vesta::VestaParameters"]}];
implementors["mina_signer"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mina_signer/keypair/struct.Keypair.html\" title=\"struct mina_signer::keypair::Keypair\">Keypair</a>","synthetic":false,"types":["mina_signer::keypair::Keypair"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mina_signer/pubkey/struct.PubKey.html\" title=\"struct mina_signer::pubkey::PubKey\">PubKey</a>","synthetic":false,"types":["mina_signer::pubkey::PubKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mina_signer/pubkey/struct.CompressedPubKey.html\" title=\"struct mina_signer::pubkey::CompressedPubKey\">CompressedPubKey</a>","synthetic":false,"types":["mina_signer::pubkey::CompressedPubKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mina_signer/seckey/struct.SecKey.html\" title=\"struct mina_signer::seckey::SecKey\">SecKey</a>","synthetic":false,"types":["mina_signer::seckey::SecKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mina_signer/signature/struct.Signature.html\" title=\"struct mina_signer::signature::Signature\">Signature</a>","synthetic":false,"types":["mina_signer::signature::Signature"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"mina_signer/enum.NetworkId.html\" title=\"enum mina_signer::NetworkId\">NetworkId</a>","synthetic":false,"types":["mina_signer::NetworkId"]}];
implementors["oracle"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstantsBasic.html\" title=\"struct oracle::poseidon::PlonkSpongeConstantsBasic\">PlonkSpongeConstantsBasic</a>","synthetic":false,"types":["oracle::poseidon::PlonkSpongeConstantsBasic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstants5W.html\" title=\"struct oracle::poseidon::PlonkSpongeConstants5W\">PlonkSpongeConstants5W</a>","synthetic":false,"types":["oracle::poseidon::PlonkSpongeConstants5W"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstants3W.html\" title=\"struct oracle::poseidon::PlonkSpongeConstants3W\">PlonkSpongeConstants3W</a>","synthetic":false,"types":["oracle::poseidon::PlonkSpongeConstants3W"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstants15W.html\" title=\"struct oracle::poseidon::PlonkSpongeConstants15W\">PlonkSpongeConstants15W</a>","synthetic":false,"types":["oracle::poseidon::PlonkSpongeConstants15W"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"oracle/poseidon/enum.SpongeState.html\" title=\"enum oracle::poseidon::SpongeState\">SpongeState</a>","synthetic":false,"types":["oracle::poseidon::SpongeState"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.ArithmeticSpongeParams.html\" title=\"struct oracle::poseidon::ArithmeticSpongeParams\">ArithmeticSpongeParams</a>&lt;F&gt;","synthetic":false,"types":["oracle::poseidon::ArithmeticSpongeParams"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Field, SC:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"oracle/poseidon/trait.SpongeConstants.html\" title=\"trait oracle::poseidon::SpongeConstants\">SpongeConstants</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.ArithmeticSponge.html\" title=\"struct oracle::poseidon::ArithmeticSponge\">ArithmeticSponge</a>&lt;F, SC&gt;","synthetic":false,"types":["oracle::poseidon::ArithmeticSponge"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"oracle/rndoracle/enum.ProofError.html\" title=\"enum oracle::rndoracle::ProofError\">ProofError</a>","synthetic":false,"types":["oracle::rndoracle::ProofError"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/sponge/struct.ScalarChallenge.html\" title=\"struct oracle::sponge::ScalarChallenge\">ScalarChallenge</a>&lt;F&gt;","synthetic":false,"types":["oracle::sponge::ScalarChallenge"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + SWModelParameters, SC:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"oracle/poseidon/trait.SpongeConstants.html\" title=\"trait oracle::poseidon::SpongeConstants\">SpongeConstants</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"oracle/sponge/struct.DefaultFqSponge.html\" title=\"struct oracle::sponge::DefaultFqSponge\">DefaultFqSponge</a>&lt;P, SC&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P::BaseField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["oracle::sponge::DefaultFqSponge"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()