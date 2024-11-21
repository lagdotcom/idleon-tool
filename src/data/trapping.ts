import { GItemName, Percentage } from "../flavours";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop,
  mkPercentageDrop,
} from "./tools";
import { GDropper } from "./types";

const set = getItemMaker("trap box sets");
export const trapBoxSets = [
  set("Cardboard Traps", "TrapBoxSet1"),
  set("Silkskin Traps", "TrapBoxSet2"),
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
  critter("Froge", "Critter1"),
  critter("Poison Froge", "Critter1A"),
  critter("Crabbo", "Critter2"),
  critter("Mutant Crabbo", "Critter2A"),
  critter("Scorpie"),
  critter("Crescent Scorpie"),
  critter("Mousey"),
  critter("Nakeo Moleo"),
  critter("Owlio"),
  critter("Minervowl"),
  critter("Pingy"),
  critter("Eternal Lord of The Undying Ember"),
  critter("Bunny"),
  critter("Purbunni"),
  critter("Dung Beat"),
  critter("Jade Scarab"),
  critter("Honker"),
  critter("Diamond Duck"),
  critter("Blobfish"),
  critter("Voodofish"),
  critter("Tuttle"),
  critter("Tottoise"),
];

const makeLocation = getDropperMaker("trapping location");
const loc = (
  item: GItemName,
  shinyPercentage: Percentage,
  shinyName: GItemName,
  area: string,
): GDropper =>
  makeLocation(area, "", {
    type: "table",
    chance: 1,
    drops: [mkDrop(item, NaN), mkPercentageDrop(shinyName, shinyPercentage)],
  });

export const trappingLocations = [
  loc("Froge", 5, "Poison Froge", "Jungle Perimeter"),
  loc("Crabbo", 3, "Mutant Crabbo", "Salty Shores"),
  loc("Scorpie", 2, "Crescent Scorpie", "The Ring"),
  loc("Mousey", 1, "Nakeo Moleo", "Rats Nest"),
  loc("Owlio", 0.6, "Minervowl", "Hollowed Trunk"),
  loc("Pingy", 0.3, "Eternal Lord of The Undying Ember", "The Stache Split"),
  loc("Bunny", 0.15, "Purbunni", "Thermonuclear Climb"),
  loc("Dung Beat", 0.06, "Jade Scarab", "Efaunts Tomb"),
  loc("Honker", 0.02, "Diamond Duck", "Wam Wonderland"),
  loc("Blobfish", 0.003, "Voodofish", "Cocoa Tunnel"),
  loc("Tuttle", 0.0001, "Tottoise", "Bamboo Laboredge"),
];
