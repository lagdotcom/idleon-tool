import { getItemMaker } from "./tools";

const set = getItemMaker("trap box sets");
export const trapBoxSets = [
  set("Cardboard Traps", "TrapBoxSet1"),
  set("Silkskin Traps"),
  set("Wooden Traps"),
  set("Natural Traps"),
  set("Steel Traps"),
  set("Meaty Traps"),
  set("Royal Traps"),
  set("Egalitarian Traps"),
  set("Forbidden Traps"),
  set("Containment of the Zrgyios"),
];

const critter = getItemMaker("critters");
export const critters = [
  critter("Froge"),
  critter("Crabbo"),
  critter("Scorpie"),
  critter("Mousey"),
  critter("Owlio"),
  critter("Pingy"),
  critter("Bunny"),
  critter("Dung Beat"),
  critter("Honker"),
  critter("Blobfish"),
  critter("Tuttle"),
];
