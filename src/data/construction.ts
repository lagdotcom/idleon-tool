import dioxideSynthesis from "../img/Dioxide_Synthesis.png";
import explosiveSalts from "../img/Explosive_Salts.png";
import nulloSalt from "../img/Nullo_Salt.png";
import purpleSalt from "../img/Purple_Salt.png";
import redoxSalts from "../img/Redox_Salts.png";
import spontaneitySalts from "../img/Spontaneity_Salts.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("refinery salts");
export const refinerySalts = [
  i("Redox Salts", redoxSalts),
  i("Explosive Salts", explosiveSalts),
  i("Spontaneity Salts", spontaneitySalts),
  i("Dioxide Synthesis", dioxideSynthesis),
  i("Purple Salt", purpleSalt),
  i("Nullo Salt", nulloSalt),
];
