# Problem Statement Mapping

This short note maps the pasted problem statement to the repo's official project documentation and confirms that the requirements are aligned.

| Requirement in pasted statement | Matching project documentation | Notes |
| --- | --- | --- |
| Generalized modelling framework for dam-break / river-blockage analysis | [PRD.md](PRD.md), [architecture.md](architecture.md) | PRD defines the system as a full-stack dam-break digital twin spanning scenario generation, simulation, uncertainty analysis, and emergency decision support. |
| Use hydrological data, DEM, and satellite imagery | [PRD.md](PRD.md), [architecture.md](architecture.md), [tech_stack.md](tech_stack.md) | The architecture and tech stack explicitly include DEM, river, land-use, and Sentinel/Landsat inputs. |
| Run simulation with Smooth Particle Hydrodynamics (SPH) and Delft3D, then compare scenarios | [PRD.md](PRD.md), [architecture.md](architecture.md), [tech_stack.md](tech_stack.md) | The project explicitly calls out SPH and Delft3D behind an adapter layer and a comparison/coupling workflow. |
| Build a customized tool/framework for flood-inundation scenario generation | [README.md](README.md), [PRD.md](PRD.md), [architecture.md](architecture.md) | The project is designed around multi-scenario simulation, uncertainty-aware prediction, and scenario generation. |
| Dashboard for model inputs and output visualization | [README.md](README.md), [PRD.md](PRD.md), [frontend_spec.md](frontend_spec.md) | The dashboard is a 3D command-center-style experience with visualization of simulation and decision outputs. |
| Export results in .shp or .kml format | [PRD.md](PRD.md), [README.md](README.md), [tech_stack.md](tech_stack.md) | The project states exports in SHP, KML, GeoJSON, CSV, and PDF. |
| Near-real-time flood analysis using Google Earth Engine | [PRD.md](PRD.md), [tech_stack.md](tech_stack.md), [architecture.md](architecture.md) | GEE is an explicit part of the architecture for satellite validation and real-time flood analysis. |
| Demonstrate on any Indian river/dam using open-source data | [README.md](README.md), [constraints.md](constraints.md) | The repo makes the Indian river/dam case-study requirement explicit and also defines the demo-scope constraints. |
| Problem Statement ID / affiliation / context | [README.md](README.md), [PRD.md](PRD.md), [constraints.md](constraints.md) | The repository is tagged as SIH 2026, PS 26161, NTRO. |

Conclusion: there is no conflict between the pasted problem statement and the active project documentation. The repo appears to be a direct implementation of the same problem framing, with additional scope around uncertainty, evacuation, and satellite validation that goes beyond the base statement.
