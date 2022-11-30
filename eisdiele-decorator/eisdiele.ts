import { Eis } from "./Eis.ts";
import { SmallBecherEis, WaffelEis } from "./EisTypes.ts";
import { Sahne,Vanillkugel } from "./Zutaten.ts";

const eis: Eis = new SmallBecherEis([
        new Sahne(),
        new Vanillkugel()
    ])

console.log(eis.berechnePreis());


            