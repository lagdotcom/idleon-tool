import { GItemName } from "../flavours";
import { getItemMaker } from "./tools";
import { GDropper } from "./types";

const skull = getItemMaker("worship skulls");
export const worshipSkulls = [
  skull("Wax Skull", "WorshipSkull1"),
  skull("Ceramic Skull", "WorshipSkull2"),
  skull("Slush Skull"),
  skull("Horned Skull", "WorshipSkull3"),
  skull("Prickle Skull"),
  skull("Manifested Skull"),
  skull("Glauss Skull"),
  skull("Luciferian Skull"),
  skull("Dreadnaught Skull"),
  skull("Cultist Skull"),
  skull("Crystal Skull of Esquire Vnoze"),
];

const soul = getItemMaker("souls");
export const souls = [
  soul("Forest Soul", "Soul1"),
  soul("Dune Soul", "Soul2"),
  soul("Rooted Soul", "Soul3"),
  soul("Frigid Soul", "Soul4"),
  soul("Squishy Soul", "Soul5"),
  soul("Oozie Soul", "Soul6"),
  soul("Breezy Soul", "Soul7"),
];

const loc = (name: string, item: GItemName, area: string): GDropper => ({
  type: "worship totem",
  name,
  area,
  drops: [{ type: "item", item, qty: 1, chance: NaN }],
});
export const worshipTotems = [
  loc("Goblin Gorfest", "Forest Soul", "Forest Outskirts"),
  loc("Wakawaka War", "Dune Soul", "Up Up Down Down"),
  loc("Acorn Assault", "Rooted Soul", "The Roots"),
  loc("Frosty Firefight", "Frigid Soul", "Rollin' Tundra"),
  loc("Clash of Cans", "Squishy Soul", "Mountainous Deugh"),
  loc("Citric Conflict", "Oozie Soul", "OJ Bay"),
  loc("Breezy Battle", "Breezy Soul", "Above the Clouds"),
];
