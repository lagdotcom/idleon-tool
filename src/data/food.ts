import averageEXPPotion from "../img/Average_EXP_Potion.png";
import averageLifePotion from "../img/Average_Life_Potion.png";
import averageManaPotion from "../img/Average_Mana_Potion.png";
import averageSpeedPotion from "../img/Average_Speed_Potion.png";
import averageStrengthPotion from "../img/Average_Strength_Potion.png";
import cheezyPizza from "../img/Cheezy_Pizza.png";
import goldenPeanut from "../img/Golden_Peanut.png";
import hotDog from "../img/Hot_Dog.png";
import kebabSticks from "../img/Kebab_Sticks.png";
import nomwich from "../img/Nomwich.png";
import peanut from "../img/Peanut.png";
import saucyWeiner from "../img/Saucy_Weiner.png";
import smallEXPPotion from "../img/Small_EXP_Potion.png";
import smallLifePotion from "../img/Small_Life_Potion.png";
import smallManaPotion from "../img/Small_Mana_Potion.png";
import smallSpeedPotion from "../img/Small_Speed_Potion.png";
import smallStrengthPotion from "../img/Small_Strength_Potion.png";
import { getItemMaker } from "./tools";

const food = getItemMaker("health food");
const boost = getItemMaker("boost food");
const golden = getItemMaker("golden food");

const foodItems = [
  food("Nomwich", nomwich),
  food("Hot Dog", hotDog),
  food("Cheezy Pizza", cheezyPizza),
  food("Saucy Weiner", saucyWeiner),
  food("Kebab Sticks", kebabSticks),
  food("Peanut", peanut),

  boost("Small Strength Potion", smallStrengthPotion),
  boost("Average Strength Potion", averageStrengthPotion),
  boost("Small Life Potion", smallLifePotion),
  boost("Average Life Potion", averageLifePotion),
  boost("Small Speed Potion", smallSpeedPotion),
  boost("Average Speed Potion", averageSpeedPotion),
  boost("Small Mana Potion", smallManaPotion),
  boost("Average Mana Potion", averageManaPotion),
  boost("Small EXP Potion", smallEXPPotion),
  boost("Average EXP Potion", averageEXPPotion),

  golden("Golden Peanut", goldenPeanut),
];
export default foodItems;
