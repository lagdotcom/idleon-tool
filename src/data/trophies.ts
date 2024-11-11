import baller from "../img/Baller.png";
import beachBro from "../img/Beach_Bro.png";
import blunderHero from "../img/Blunder_Hero.png";
import clubMaestro from "../img/Club_Maestro.png";
import clubMember from "../img/Club_Member.png";
import critterBaron from "../img/Critter_Baron.png";
import diceDynamo from "../img/Dice_Dynamo.png";
import frostPrince from "../img/Frost_Prince.png";
import gladiator from "../img/Gladiator.png";
import idleSkiller from "../img/Idle_Skiller.png";
import kingOfFood from "../img/King_of_Food.png";
import luckierLad from "../img/Luckier_Lad.png";
import luckyLad from "../img/Lucky_Lad.png";
import masterOfNothing from "../img/Master_of_Nothing.png";
import megalodon from "../img/Megalodon.png";
import nebulaRoyal from "../img/Nebula_Royal.png";
import oneOfTheDivine from "../img/One_of_the_Divine.png";
import trailblazer from "../img/Trailblazer.png";
import ultraUnboxer from "../img/Ultra_Unboxer.png";
import yumYumSheriff from "../img/YumYum_Sheriff.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("trophies");
export const trophies = [
  i("King of Food", kingOfFood),
  i("Lucky Lad", luckyLad),
  i("Club Member", clubMember),
  i("Dice Dynamo", diceDynamo),
  i("Blunder Hero", blunderHero),
  i("Trailblazer", trailblazer),
  i("Ultra Unboxer", ultraUnboxer),
  i("Critter Baron", critterBaron),
  i("YumYum Sheriff", yumYumSheriff),
  i("Megalodon", megalodon),
  i("Club Maestro", clubMaestro),
  i("Beach Bro", beachBro),
  i("Frost Prince", frostPrince),
  i("Idle Skiller", idleSkiller),
  i("One of the Divine", oneOfTheDivine),
  i("Master of Nothing", masterOfNothing),
  i("Nebula Royal", nebulaRoyal),
  i("Luckier Lad", luckierLad),
  i("Baller", baller),
  i("Gladiator", gladiator),
];
