# Issue: Clarify Real SPH/Delft3D Requirement vs. Surrogate Demo

## Summary
The project documents explicitly distinguish between a `Real Model Mode` and a `Demo/Surrogate Mode`. This is a good constraint for scientific honesty, but it leaves one important question unresolved for the stakeholder/mentor: does the prototype strictly need an operational-resolution, production-grade SPH and/or Delft3D run for the final submission, or is a clearly labeled surrogate/demo run acceptable?

## Why this matters
- The pasted problem statement asks for simulation modelling using SPH and Delft3D.
- The repo documentation is intentionally careful to say that a real model run is not always feasible within the hackathon constraints, and that a surrogate mode is acceptable if clearly labeled.
- Without this clarification, the team may over-invest in heavy physics runs or under-deliver on the expected demo quality.

## Proposed clarification text
"For the prototype, a clearly labeled surrogate/demo mode is acceptable if it is transparently disclosed as such; however, the project must still document the difference between surrogate and real-model results, and must avoid presenting surrogate outputs as real SPH/Delft3D simulations."

## Related docs
- [PRD.md](PRD.md)
- [constraints.md](constraints.md)
- [tech_stack.md](tech_stack.md)

## Decision needed
Confirm whether the final demonstration must include an operational-resolution real SPH/Delft3D run, or whether a labeled surrogate/demo pipeline is acceptable as long as the limitation is clearly disclosed.
