import { Zutat } from "./Zutaten.ts";

export abstract class Eis {

    constructor(
        private zutaten: Zutat[],
    ){}

    abstract berechnePreis():number

    getZutatenBonusPrice():number{
        return this.zutaten.map(z=> z.getPriceBonus()).reduce((a,b)=>a+b)
    }
}