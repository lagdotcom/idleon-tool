import { getItemMaker } from "./tools";

const food = getItemMaker("health food");
export const healthFood = [
  food("Nomwich", "FoodHealth1"),
  food("Hot Dog", "FoodHealth3"),
  food("Cheezy Pizza", "FoodHealth2"),
  food("Peanut"),
  food("Saucy Weiner"),
  food("Kebab Sticks", "FoodHealth6"),
  food("Meat Pie", "FoodHealth7"),
  food("Mountain Bread", "FoodHealth10"),
  food("Yeti Ham"),
  food("Sheepie Dairy"),
  food("Cupcake"),
  food("Spicy Space Ribs"),
  food("Lemon Slice"),
  food("Grilled Cheese Nomwich"),
  food("Raw Nigiri"),
  food("Dumpling"),
  food("Cranberry Jam"),
  food("Milk Choco"),
  food("Magic Meatloaf", "Meatloaf"),
];

const boost = getItemMaker("boost food");
export const boostFood = [
  boost("Small Strength Potion", "FoodPotOr1"),
  boost("Average Strength Potion", "FoodPotOr2"),
  boost("Decent Strength Potion", "FoodPotOr3"),
  boost("Potent Strength Potion", "FoodPotOr4"),
  boost("Small Life Potion", "FoodPotRe1"),
  boost("Average Life Potion", "FoodPotRe2"),
  boost("Decent Life Potion", "FoodPotRe3"),
  boost("Potent Life Potion", "FoodPotRe4"),
  boost("Small Speed Potion", "FoodPotGr1"),
  boost("Average Speed Potion", "FoodPotGr2"),
  boost("Decent Speed Potion", "FoodPotGr3"),
  boost("Potent Speed Potion", "FoodPotGr4"),
  boost("Small Mana Potion", "FoodPotMana1"),
  boost("Average Mana Potion", "FoodPotMana2"),
  boost("Decent Mana Potion", "FoodPotMana3"),
  boost("Potent Mana Potion", "FoodPotMana4"),
  boost("Small EXP Potion", "FoodPotYe1"),
  boost("Average EXP Potion", "FoodPotYe2"),
  boost("Minto Choco"),
  boost("Decent EXP Potion", "FoodPotYe3"),
  boost("Potent EXP Potion", "FoodPotYe4"),
  boost("Quotient EXP Potion", "FoodPotYe5"),
  boost("Lemony Choco"),
  boost("Shiny Pearl"),
  boost("Icing Ironbite", "FoodMining1"),
  boost("Giftybread Man"),
  boost("Stained Pearl"),
  boost("Saucy Logfries"),
  boost("Chogg Nog"),
  boost("Slurpin Herm"),
  boost("Candy Canes"),
  boost("Aqua Pearl"),
  boost("Buttered Toasted Butter"),
  boost("Mistleberries"),
  boost("Critter Numnums"),
  boost("Soulble Gum"),
  boost("Bullet"),
  boost("FMJ Bullet"),
  boost("Coldseeker Bullet"),
  boost("Midnight Cookie"),
  boost("Cherry Choco"),
];

const golden = getItemMaker("golden food");
export const goldenFood = [
  golden("Golden Peanut"),
  golden("Golden Jam", "FoodG1"),
  golden("Golden Kebabs", "FoodG2"),
  golden("Golden Meat Pie", "FoodG3"),
  golden("Golden Nomwich", "FoodG4"),
  golden("Golden Ham"),
  golden("Golden Bread", "FoodG6"),
  golden("Golden Ribs"),
  golden("Golden Cheese", "FoodG8"),
  golden("Golden Grilled Cheese Nomwich"),
  golden("Golden Hampter Gummy Candy"),
  golden("Golden Nigiri"),
  golden("Golden Dumpling"),
  golden("Golden Cake"),
  golden("Butter Bar", "ButterBar"),
];
