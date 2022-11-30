import { Eis } from "./Eis.ts";

export class WaffelEis extends Eis{
    berechnePreis(): number {
        return 2.5 + this.getZutatenBonusPrice()
    }
}

export class SmallBecherEis extends Eis{
    berechnePreis(): number {
        return 2 + this.getZutatenBonusPrice()
    }
}