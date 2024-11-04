import { getRecipeMaker, mkInput as n } from "./tools";

const r = getRecipeMaker("forge");

const recipes = [
  r("Copper Bar", n("Copper Ore", 2)),
  r("Iron Bar", n("Iron Ore", 4)),
  r("Gold Bar", n("Gold Ore", 7)),
];
export default recipes;
