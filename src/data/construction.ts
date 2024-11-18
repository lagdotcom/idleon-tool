import { getItemMaker, getRecipeMaker, mkIQ as n } from "./tools";

const i = getItemMaker("refinery salts");
export const refinerySalts = [
  i("Redox Salts", "Refinery1"),
  i("Explosive Salts"),
  i("Spontaneity Salts"),
  i("Dioxide Synthesis"),
  i("Purple Salt"),
  i("Nullo Salt"),
];

const r = getRecipeMaker("refinery");
export const refineryRecipes = [
  r("Redox Salts", n("Spore Cap", 10), n("Copper Ore", 5)),
  r(
    "Explosive Salts",
    n("Bullfrog Horn", 10),
    n("Forest Fibres", 5),
    n("Redox Salts", 2),
  ),
  r(
    "Spontaneity Salts",
    n("Pocket Sand", 50),
    n("Goldfish", 30),
    n("Fly", 40),
    n("Explosive Salts", 2),
  ),
  r(
    "Dioxide Synthesis",
    n("Floof Ploof", 10),
    n("Dune Soul", 2),
    n("Scorpie"),
    n("Spontaneity Salts"),
  ),
  r(
    "Purple Salt",
    n("Cracked Glass", 25),
    n("Bloach", 5),
    n("Sentient Cereal", 5),
    n("Mousey", 5),
    n("Dioxide Synthesis", 2),
  ),
  r(
    "Nullo Salt",
    n("Void Bar", 5),
    n("Wispy Lumber", 5),
    n("Flycicle", 5),
    n("Frigid Soul", 5),
    n("Purple Salt", 2),
  ),
];
