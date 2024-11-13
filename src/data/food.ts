import aquaPearl from "../img/Aqua_Pearl.png";
import averageEXPPotion from "../img/Average_EXP_Potion.png";
import averageLifePotion from "../img/Average_Life_Potion.png";
import averageManaPotion from "../img/Average_Mana_Potion.png";
import averageSpeedPotion from "../img/Average_Speed_Potion.png";
import averageStrengthPotion from "../img/Average_Strength_Potion.png";
import bullet from "../img/Bullet.png";
import butterBar from "../img/Butter_Bar.png";
import butteredToastedButter from "../img/Buttered_Toasted_Butter.png";
import candyCanes from "../img/Candy_Canes.png";
import cheezyPizza from "../img/Cheezy_Pizza.png";
import cherryChoco from "../img/Cherry_Choco.png";
import choggNog from "../img/Chogg_Nog.png";
import coldseekerBullet from "../img/Coldseeker_Bullet.png";
import cranberryJam from "../img/Cranberry_Jam.png";
import critterNumnums from "../img/Critter_Numnums.png";
import cupcake from "../img/Cupcake.png";
import decentEXPPotion from "../img/Decent_EXP_Potion.png";
import decentLifePotion from "../img/Decent_Life_Potion.png";
import decentManaPotion from "../img/Decent_Mana_Potion.png";
import decentSpeedPotion from "../img/Decent_Speed_Potion.png";
import decentStrengthPotion from "../img/Decent_Strength_Potion.png";
import dumpling from "../img/Dumpling.png";
import fMJBullet from "../img/FMJ_Bullet.png";
import giftybreadMan from "../img/Giftybread_Man.png";
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
import grilledCheeseNomwich from "../img/Grilled_Cheese_Nomwich.png";
import hotDog from "../img/Hot_Dog.png";
import icingIronbite from "../img/Icing_Ironbite.png";
import kebabSticks from "../img/Kebab_Sticks.png";
import lemonSlice from "../img/Lemon_Slice.png";
import lemonyChoco from "../img/Lemony_Choco.png";
import magicMeatloaf from "../img/Magic_Meatloaf.png";
import meatPie from "../img/Meat_Pie.png";
import midnightCookie from "../img/Midnight_Cookie.png";
import milkChoco from "../img/Milk_Choco.png";
import mintoChoco from "../img/Minto_Choco.png";
import mistleberries from "../img/Mistleberries.png";
import mountainBread from "../img/Mountain_Bread.png";
import nomwich from "../img/Nomwich.png";
import peanut from "../img/Peanut.png";
import potentEXPPotion from "../img/Potent_EXP_Potion.png";
import potentLifePotion from "../img/Potent_Life_Potion.png";
import potentManaPotion from "../img/Potent_Mana_Potion.png";
import potentSpeedPotion from "../img/Potent_Speed_Potion.png";
import potentStrengthPotion from "../img/Potent_Strength_Potion.png";
import quotientEXPPotion from "../img/Quotient_EXP_Potion.png";
import rawNigiri from "../img/Raw_Nigiri.png";
import saucyLogfries from "../img/Saucy_Logfries.png";
import saucyWeiner from "../img/Saucy_Weiner.png";
import sheepieDairy from "../img/Sheepie_Dairy.png";
import shinyPearl from "../img/Shiny_Pearl.png";
import slurpinHerm from "../img/Slurpin_Herm.png";
import smallEXPPotion from "../img/Small_EXP_Potion.png";
import smallLifePotion from "../img/Small_Life_Potion.png";
import smallManaPotion from "../img/Small_Mana_Potion.png";
import smallSpeedPotion from "../img/Small_Speed_Potion.png";
import smallStrengthPotion from "../img/Small_Strength_Potion.png";
import soulbleGum from "../img/Soulble_Gum.png";
import spicySpaceRibs from "../img/Spicy_Space_Ribs.png";
import stainedPearl from "../img/Stained_Pearl.png";
import yetiHam from "../img/Yeti_Ham.png";
import { getItemMaker } from "./tools";

const food = getItemMaker("health food");
export const healthFood = [
  food("Nomwich", nomwich, "FoodHealth1"),
  food("Hot Dog", hotDog, "FoodHealth3"),
  food("Cheezy Pizza", cheezyPizza, "FoodHealth2"),
  food("Peanut", peanut),
  food("Saucy Weiner", saucyWeiner),
  food("Kebab Sticks", kebabSticks, "FoodHealth6"),
  food("Meat Pie", meatPie, "FoodHealth7"),
  food("Mountain Bread", mountainBread),
  food("Yeti Ham", yetiHam),
  food("Sheepie Dairy", sheepieDairy),
  food("Cupcake", cupcake),
  food("Spicy Space Ribs", spicySpaceRibs),
  food("Lemon Slice", lemonSlice),
  food("Grilled Cheese Nomwich", grilledCheeseNomwich),
  food("Raw Nigiri", rawNigiri),
  food("Dumpling", dumpling),
  food("Cranberry Jam", cranberryJam),
  food("Milk Choco", milkChoco),
  food("Magic Meatloaf", magicMeatloaf, "Meatloaf"),
];

const boost = getItemMaker("boost food");
export const boostFood = [
  boost("Small Strength Potion", smallStrengthPotion, "FoodPotPor1"),
  boost("Average Strength Potion", averageStrengthPotion, "FoodPotOr2"),
  boost("Decent Strength Potion", decentStrengthPotion, "FoodPotOr3"),
  boost("Potent Strength Potion", potentStrengthPotion, "FoodPotOr4"),
  boost("Small Life Potion", smallLifePotion, "FoodPotRe1"),
  boost("Average Life Potion", averageLifePotion, "FoodPotRe2"),
  boost("Decent Life Potion", decentLifePotion, "FoodPotRe3"),
  boost("Potent Life Potion", potentLifePotion, "FoodPotRe4"),
  boost("Small Speed Potion", smallSpeedPotion, "FoodPotGr1"),
  boost("Average Speed Potion", averageSpeedPotion, "FoodPotGr2"),
  boost("Decent Speed Potion", decentSpeedPotion, "FoodPotGr3"),
  boost("Potent Speed Potion", potentSpeedPotion, "FoodPotGr4"),
  boost("Small Mana Potion", smallManaPotion, "FoodPotMana1"),
  boost("Average Mana Potion", averageManaPotion, "FoodPotMana2"),
  boost("Decent Mana Potion", decentManaPotion, "FoodPotMana3"),
  boost("Potent Mana Potion", potentManaPotion, "FoodPotMana4"),
  boost("Small EXP Potion", smallEXPPotion),
  boost("Average EXP Potion", averageEXPPotion),
  boost("Minto Choco", mintoChoco),
  boost("Decent EXP Potion", decentEXPPotion),
  boost("Potent EXP Potion", potentEXPPotion),
  boost("Quotient EXP Potion", quotientEXPPotion),
  boost("Lemony Choco", lemonyChoco),
  boost("Shiny Pearl", shinyPearl),
  boost("Icing Ironbite", icingIronbite, "FoodMining1"),
  boost("Giftybread Man", giftybreadMan),
  boost("Stained Pearl", stainedPearl),
  boost("Saucy Logfries", saucyLogfries),
  boost("Chogg Nog", choggNog),
  boost("Slurpin Herm", slurpinHerm),
  boost("Candy Canes", candyCanes),
  boost("Aqua Pearl", aquaPearl),
  boost("Buttered Toasted Butter", butteredToastedButter),
  boost("Mistleberries", mistleberries),
  boost("Critter Numnums", critterNumnums),
  boost("Soulble Gum", soulbleGum),
  boost("Bullet", bullet),
  boost("FMJ Bullet", fMJBullet),
  boost("Coldseeker Bullet", coldseekerBullet),
  boost("Midnight Cookie", midnightCookie),
  boost("Cherry Choco", cherryChoco),
];

const golden = getItemMaker("golden food");
export const goldenFood = [
  golden("Golden Peanut", goldenPeanut),
  golden("Golden Jam", goldenJam, "FoodG1"),
  golden("Golden Kebabs", goldenKebabs),
  golden("Golden Meat Pie", goldenMeatPie, "FoodG3"),
  golden("Golden Nomwich", goldenNomwich, "FoodG4"),
  golden("Golden Ham", goldenHam),
  golden("Golden Bread", goldenBread),
  golden("Golden Ribs", goldenRibs),
  golden("Golden Cheese", goldenCheese),
  golden("Golden Grilled Cheese Nomwich", goldenGrilledCheeseNomwich),
  golden("Golden Hampter Gummy Candy", goldenHampterGummyCandy),
  golden("Golden Nigiri", goldenNigiri),
  golden("Golden Dumpling", goldenDumpling),
  golden("Golden Cake", goldenCake),
  golden("Butter Bar", butterBar, "ButterBar"),
];
