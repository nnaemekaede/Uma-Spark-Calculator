type SparkType = 'blue' | 'pink' | 'green' | 'raceWhite' | 'otherWhite';

interface Spark {
    skillName?: string 
    type: SparkType;
    starLevel: 1 | 2 | 3;
}

interface Parent {
    sparks: Spark[];
    affinity: number;
}

interface InheritanceTarget {
    skillName?: string
    sparkName: string

}