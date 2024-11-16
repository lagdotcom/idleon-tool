import { getRecipeMaker, mkIQ as n } from "./tools";

const r = getRecipeMaker("forge");
export const forgeRecipes = [
  r("Copper Bar", n("Copper Ore", 2)),
  r("Iron Bar", n("Iron Ore", 4)),
  r("Gold Bar", n("Gold Ore", 7)),
  r("Platinum Bar", n("Platinum Ore", 16)),
  r("Dementia Bar", n("Dementia Ore", 40)),
  r("Void Bar", n("Void Ore", 100)),
  r("Lustre Bar", n("Lustre Ore", 250)),
  r("Starfire Bar", n("Starfire Ore", 500)),
  r("Dreadlo Bar", n("Dreadlo Ore", 1000)),
  r("Godshard Bar", n("Godshard Ore", 15000)),
  r("Marble Bar", n("Marble Ore", 4000)),
];
