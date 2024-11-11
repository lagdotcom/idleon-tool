import blobfish from "../img/Blobfish.png";
import bunny from "../img/Bunny.png";
import cardboardTraps from "../img/Cardboard_Traps.png";
import containmentOfTheZrgyios from "../img/Containment_of_the_Zrgyios.png";
import crabbo from "../img/Crabbo.png";
import dungBeat from "../img/Dung_Beat.png";
import egalitarianTraps from "../img/Egalitarian_Traps.png";
import forbiddenTraps from "../img/Forbidden_Traps.png";
import froge from "../img/Froge.png";
import honker from "../img/Honker.png";
import meatyTraps from "../img/Meaty_Traps.png";
import mousey from "../img/Mousey.png";
import naturalTraps from "../img/Natural_Traps.png";
import owlio from "../img/Owlio.png";
import pingy from "../img/Pingy.png";
import royalTraps from "../img/Royal_Traps.png";
import scorpie from "../img/Scorpie.png";
import silkskinTraps from "../img/Silkskin_Traps.png";
import steelTraps from "../img/Steel_Traps.png";
import tuttle from "../img/Tuttle.png";
import woodenTraps from "../img/Wooden_Traps.png";
import { getItemMaker } from "./tools";

const set = getItemMaker("trap box sets");
export const trapBoxSets = [
  set("Cardboard Traps", cardboardTraps),
  set("Silkskin Traps", silkskinTraps),
  set("Wooden Traps", woodenTraps),
  set("Natural Traps", naturalTraps),
  set("Steel Traps", steelTraps),
  set("Meaty Traps", meatyTraps),
  set("Royal Traps", royalTraps),
  set("Egalitarian Traps", egalitarianTraps),
  set("Forbidden Traps", forbiddenTraps),
  set("Containment of the Zrgyios", containmentOfTheZrgyios),
];

const critter = getItemMaker("critters");
export const critters = [
  critter("Froge", froge),
  critter("Crabbo", crabbo),
  critter("Scorpie", scorpie),
  critter("Mousey", mousey),
  critter("Owlio", owlio),
  critter("Pingy", pingy),
  critter("Bunny", bunny),
  critter("Dung Beat", dungBeat),
  critter("Honker", honker),
  critter("Blobfish", blobfish),
  critter("Tuttle", tuttle),
];
