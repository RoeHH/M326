export abstract class Zutat {
    abstract getPriceBonus(): number
}

export class Schokokugel implements Zutat{
    getPriceBonus(): number {
        return .3
    }
}

export class Sahne implements Zutat{
    getPriceBonus(): number {
        return .4
    }
}

export class Vanillkugel implements Zutat{
    getPriceBonus(): number {
        return 0
    }
}