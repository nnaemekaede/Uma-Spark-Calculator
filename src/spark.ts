type SparkType = 'blue' | 'pink' | 'green' | 'raceWhite' | 'otherWhite';

interface Spark {
    sparkName: string 
    type: SparkType;
    starLevel: 1 | 2 | 3;
}

interface Parent {
    sparks: Spark[];
    affinity: number;
    isGrandparent: boolean 
}

interface InheritanceTarget {
    sparkName: string
    acceptedTypes: SparkType[]
}

function computeSparkChance(target: InheritanceTarget, parents: Parent[]): number {
    let totalChance = 0
    for (const parent of parents ) {
        let sparkMissRate = 0
        for (const spark of parent.sparks) {
            if (target.acceptedTypes.includes(spark.type) && target.sparkName == spark.sparkName){
                let baseRate = 0
                if (spark.type == 'blue'){
                    baseRate = (.70 + .10 * (spark.starLevel - 1))   
                } else if (spark.type == 'pink') {
                    baseRate = (.01 + .02 * (spark.starLevel - 1))
                } else if (spark.type == 'green') {
                    baseRate = (.05 + .05 * (spark.starLevel - 1))
                } else if (spark.type == 'raceWhite') {
                    baseRate = (.01 + .01 * (spark.starLevel - 1))
                } else if (spark.type == 'otherWhite') {
                    baseRate = (.03 + .03 * (spark.starLevel - 1))
                }
                let parentSparkOdds = baseRate * (1 + parent.affinity/100) 
                if (parent.isGrandparent) {
                    parentSparkOdds = parentSparkOdds / 2
                }
                if (sparkMissRate == 0) {
                 sparkMissRate = (1 - parentSparkOdds)
                } else {
                 sparkMissRate *= (1 - parentSparkOdds)
                }  
            }
        }
    }
    return totalChance
}