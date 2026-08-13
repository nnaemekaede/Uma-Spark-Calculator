# Uma Spark Calculator — Notes

## Later/ v2 ideas:

- **Full character affinity matrix**   
    - Auto-lookup base affinity between any two umas
    - Likely requires sourcing data from same datamined 'master.mdb' pipeline community uses for information
- **Race -> skill dataset** 
    - Auto derive which specific skill a race spark grants.
    - GameTora has a dedicated page for this.
- **Auto-populate `InheritanceTarget.acceptedTypes`** 
    - Depends on the race -> skill dataset above; would allow calculator to infer valid spark sources instead of user specifying them. 
- **Grandparent support in loop** 
    - Types already account for this with Parent.isGrandparent, just needs to be sequenced after 2 parent version is working and tested.
- **Champion's Meeting Presets / character specific requirement presets** 
    - Can source information for future champion's meetings from websites like Gametora for things like green skills required. 
- **Optimal Parent Finder (LATE IDEA)**
    - When provided with a .json file of one's veterans (from a tool like UmaExtractor), could select the parent that gives the least expected runs of those specific sparks 
    - Would need filters to allow things like narrowing to parents that may have required inherits or desired blue sparks
    - Could either select two parents from veterans, or user could enter the information for what would be a borrow uma. 

## Current State:

- Project Scaffolded (Vite + React + TS), pushed to Github, deployed to Vercel.
- `src/spark.ts` — `SparkType`, `Spark`, `Parent`, `InheritanceTarget` interfaces defined.
- Next up: write `computeSparkChance(target, parent)` — turns a target + parent's
  actual sparks into a proc probability, using the base-chance table + affinity formula.
- After that: Monte Carlo simulation loop (`simulateOneRun`, `simulateManyRuns`),
  cross-checked against the closed-form `1 / p_run` expected-value formula.
