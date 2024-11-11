import breezySoul from "../img/Breezy_Soul.png";
import ceramicSkull from "../img/Ceramic_Skull.png";
import crystalSkullOfEsquireVnoze from "../img/Crystal_Skull_of_Esquire_Vnoze.png";
import cultistSkull from "../img/Cultist_Skull.png";
import dreadnaughtSkull from "../img/Dreadnaught_Skull.png";
import duneSoul from "../img/Dune_Soul.png";
import forestSoul from "../img/Forest_Soul.png";
import frigidSoul from "../img/Frigid_Soul.png";
import glaussSkull from "../img/Glauss_Skull.png";
import hornedSkull from "../img/Horned_Skull.png";
import luciferianSkull from "../img/Luciferian_Skull.png";
import manifestedSkull from "../img/Manifested_Skull.png";
import oozieSoul from "../img/Oozie_Soul.png";
import prickleSkull from "../img/Prickle_Skull.png";
import rootedSoul from "../img/Rooted_Soul.png";
import slushSkull from "../img/Slush_Skull.png";
import squishySoul from "../img/Squishy_Soul.png";
import waxSkull from "../img/Wax_Skull.png";
import { getItemMaker } from "./tools";

const skull = getItemMaker("worship skulls");
export const worshipSkulls = [
  skull("Wax Skull", waxSkull),
  skull("Ceramic Skull", ceramicSkull),
  skull("Slush Skull", slushSkull),
  skull("Horned Skull", hornedSkull),
  skull("Prickle Skull", prickleSkull),
  skull("Manifested Skull", manifestedSkull),
  skull("Glauss Skull", glaussSkull),
  skull("Luciferian Skull", luciferianSkull),
  skull("Dreadnaught Skull", dreadnaughtSkull),
  skull("Cultist Skull", cultistSkull),
  skull("Crystal Skull of Esquire Vnoze", crystalSkullOfEsquireVnoze),
];

const soul = getItemMaker("souls");
export const souls = [
  soul("Forest Soul", forestSoul),
  soul("Dune Soul", duneSoul),
  soul("Rooted Soul", rootedSoul),
  soul("Frigid Soul", frigidSoul),
  soul("Squishy Soul", squishySoul),
  soul("Oozie Soul", oozieSoul),
  soul("Breezy Soul", breezySoul),
];
