type SparkType = 'blue' | 'pink' | 'green' | 'raceWhite' | 'otherWhite';

interface Spark {
    name: string 
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