import averageEXPPotion from "../img/Average_EXP_Potion.png";
import averageLifePotion from "../img/Average_Life_Potion.png";
import averageManaPotion from "../img/Average_Mana_Potion.png";
import averageSpeedPotion from "../img/Average_Speed_Potion.png";
import averageStrengthPotion from "../img/Average_Strength_Potion.png";
import butterBar from "../img/Butter_Bar.png";
import cheezyPizza from "../img/Cheezy_Pizza.png";
import goldenBread from "../img/Golden_Bread.png";
import goldenCake from "../img/Golden_Cake.png";
import goldenCheese from "../img/Golden_Cheese.png";
import goldenDumpling from "../img/Golden_Dumpling.png";
import goldenGrilledCheeseNomwich from "../img/Golden_Grilled_Cheese_Nomwich.png";
import goldenHam from "../img/Golden_Ham.png";
import goldenHampterGummyCandy from "../img/Golden_Hampter_Gummy_Candy.png";
import goldenJam from "../img/Golden_Jam.png";
import goldenKebabs from "../img/Golden_Kebabs.png";
import goldenMeatPie from "../img/Golden_Meat_Pie.png";
import goldenNigiri from "../img/Golden_Nigiri.png";
import goldenNomwich from "../img/Golden_Nomwich.png";
import goldenPeanut from "../img/Golden_Peanut.png";
import goldenRibs from "../img/Golden_Ribs.png";
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

export const healthFood = [
  food("Nomwich", nomwich),
  food("Hot Dog", hotDog),
  food("Cheezy Pizza", cheezyPizza),
  food("Saucy Weiner", saucyWeiner),
  food("Kebab Sticks", kebabSticks),
  food("Peanut", peanut),
];

export const boostFood = [
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
];

export const goldenFood = [
  golden("Golden Peanut", goldenPeanut),
  golden("Golden Jam", goldenJam),
  golden("Golden Kebabs", goldenKebabs),
  golden("Golden Meat Pie", goldenMeatPie),
  golden("Golden Nomwich", goldenNomwich),
  golden("Golden Ham", goldenHam),
  golden("Golden Bread", goldenBread),
  golden("Golden Ribs", goldenRibs),
  golden("Golden Cheese", goldenCheese),
  golden("Golden Grilled Cheese Nomwich", goldenGrilledCheeseNomwich),
  golden("Golden Hampter Gummy Candy", goldenHampterGummyCandy),
  golden("Golden Nigiri", goldenNigiri),
  golden("Golden Dumpling", goldenDumpling),
  golden("Golden Cake", goldenCake),
  golden("Butter Bar", butterBar),
];
