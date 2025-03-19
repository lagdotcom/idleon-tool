import { mkDrop as d, mkTableDrop as t } from "./tools";

export const SuperDropTable1 = [
  d("Lucky Lad", 3330),
  d("Silver Pen", 14.3),
  d("Roll Da Dice (Special Talent Book)", 10),
  d("Talent Point Reset Fragment", 10),
  d("Attacks On Simmer (Special Talent Book)", 10),
  d("Golden Nomwich", 2),
  d("Silver Obol of Pocket Change", 31.7),
  d("Silver Obol of Little Damage", 30.7),
  d("Bronze Obol of Experience", 32.8),
  d("Mystery Upgrade Stone I", 1.18, 2),
];

export const SuperDropTable2 = [
  d("Silver Pen", 11.1),
  d("Lucky Lad", 3330),
  d("Talent Point Reset Fragment", 6.67),
  d("Golden Meat Pie", 2),
  d("Gold LUK Obol", 63.5),
  d("Silver Obol of Double Sixes", 38.1),
  d("Bronze Obol of Defence", 32.8),
  d("Mystery Upgrade Stone I", 1.43, 3),
];

export const SuperDropTable3 = [
  d("Silver Pen", 11.1),
  d("Saw Stamp", 66.7),
  d("Lucky Lad", 3330),
  d("Talent Point Reset Fragment", 6.67),
  d("Golden Ham", 2),
  d("Golden Cheese", 2.5),
  d("Bronze Obol of Multikill", 32.8),
  d("Mystery Upgrade Stone II", 1.43, 3),
];

export const SuperDropTable4 = [
  d("Silver Pen", 11.1),
  d("Lucky Lad", 3330),
  d("Talent Point Reset Fragment", 6.67),
  d("Golden Ribs", 2),
  d("Mystery Upgrade Stone II", 1.43, 3),
];

export const SuperDropTable5 = [
  d("Silver Pen", 11.1),
  d("Lucky Lad", 3330),
  d("Talent Point Reset Fragment", 6.67),
  d("Golden Grilled Cheese Nomwich", 2),
  d("Mystery Upgrade Stone III", 4),
];

export const SuperDropTable6 = [
  d("Silver Pen", 11.1),
  d("Atomic Stamp", 1110),
  d("Lucky Lad", 3330),
  d("Mystery Upgrade Stone IV", 66.7),
];

export const DropTable1 = [
  d("Copper Band (Beginner Recipe)", 125),
  d("Nomwich", 4, 10),
  d("Small Mana Potion", 10, 5),
  d("White Headband", 100),
  d("Give Up On Life Pants", 50),
  d("Anvil Zoomer Stamp", 833),
  d("Cloudsound Follower", 2, 3),
  d("Bronze STR Obol", 866, 1),
  t(SuperDropTable1, 250),
];

export const DropTable2 = [
  d("Hot Dog", 2.86, 15),
  d("Power Statue", 8.33),
  d("Small Speed Potion", 10, 5),
  d("Average Strength Potion", 5, 10),
  d("Bottled Town Teleport", 50),
  d("Tattered Cloth", 100),
  d("Time Thingy", 3.33),
  d("Cloudsound Follower", 2, 4),
  d("Bronze AGI Obol", 866),
  t(SuperDropTable1, 222),
];

export const DropTable3 = [
  d("Cheezy Pizza", 2.38, 15),
  d("Health Statue", 8.33),
  d("Steel Band (Beginner Recipe)", 20000),
  d("Average Mana Potion", 4, 10),
  d("Tool Upgrade Stone II", 33.3),
  d("Bottled Town Teleport", 20),
  d("Cloudsound Follower", 2, 6),
  d("Bronze WIS Obol", 866),
  t(SuperDropTable1, 200),
];

export const DropTable3b = [
  d("Small Life Potion", 2.5, 25),
  d("Small Mana Potion", 2.5, 25),
  d("Health Statue", 11.1),
  d("Feasty Statue", 20),
  d("Cloudsound Follower", 2, 3),
  t(SuperDropTable1, 182),
];

export const DropTable3c = [
  d("Small Life Potion", 2.5, 25),
  d("Small Mana Potion", 2.5, 25),
  d("Health Statue", 11.1),
  d("Bullseye Statue", 20),
  d("Cloudsound Follower", 2, 3),
  t(SuperDropTable1, 182),
];

export const DropTable4 = [
  d("Armor Upgrade Stone I", 55.6),
  d("Tool Upgrade Stone I", 55.6),
  d("Lumberbob Statue", 6.17),
  d("High IQ Lumber Stamp", 1850),
  d("Small Speed Potion", 8.33, 5),
  d("Book Stamp", 11100),
  d("Bronze LUK Obol", 1440),
  t(SuperDropTable1, 167),
];

export const DropTable5 = [
  d("Grass Leaf", 2, 5),
  d("Weapon Upgrade Stone I", 33.3),
  d("Tool Upgrade Stone I", 33.3),
  d("Mining Statue", 3.13),
  d("Small Strength Potion", 10, 5),
  d("Smart Dirt Stamp", 667),
  d("Silver STR Obol", 1360),
  t(SuperDropTable1, 167),
];

export const DropTable5b = [
  d("Speed Statue", 14.3),
  d("Feasty Statue", 20),
  d("Beholder Statue", 20),
];

export const DropTable6 = [
  d("Inventory Bag G", 556),
  d("Kebab Sticks", 2.38, 15),
  d("Average Speed Potion", 2.5, 25),
  d("Drippy Drop Stamp", 1670),
  d("Anvil Statue", 14.3),
  d("Monster Rating", 1.67),
  d("Cloudsound Follower", 2, 7),
  d("Instablab Follower", 3.33, 3),
  d("Silver AGI Obol", 1360),
  t(SuperDropTable2, 167),
];

export const DropTable7 = [
  d("Storage Chest 14", 833),
  d("Armor Upgrade Stone B", 200),
  d("Meat Pie", 2.38, 15),
  d("Droplots Stamp", 2500),
  d("Exp Book Statue", 15),
  d("Monster Rating", 1.11),
  d("Cloudsound Follower", 2, 8),
  d("Instablab Follower", 3.33, 3),
  d("Silver WIS Obol", 1360),
  t(SuperDropTable2, 167),
];

export const DropTable8 = [
  d("Midnight Cookie", 333),
  d("Bullseye Stamp", 100),
  d("Decent Life Potion", 2.5, 25),
  d("Buzz Buzz Stamp", 6670),
  d("Cauldron Statue", 14.3),
  d("Cloudsound Follower", 2, 8),
  d("Instablab Follower", 3.33, 3),
  d("Silver LUK Obol", 1360),
  t(SuperDropTable2, 167),
];

export const DropTable9 = [
  d("Bugsack Stamp", 1000),
  d("Ol Reliable Statue", 9.8),
  d("Paper Boat", 10000),
  t(SuperDropTable2, 167),
];

export const DropTable10 = [
  d("Armor Upgrade Stone II", 500),
  d("Tool Upgrade Stone I", 33.3),
  d("Small Speed Potion", 5, 5),
  t(SuperDropTable2, 167),
];

export const DropTable11 = [
  d("Twisty Leaf", 2, 4),
  d("Weapon Upgrade Stone II", 500),
  d("Tool Upgrade Stone I", 33.3),
  d("Thicc Skin Statue", 20),
  d("Small Strength Potion", 14.3, 5),
  d("Alch Go Brrr Stamp", 3330),
  t(SuperDropTable2, 167),
];

export const DropTable12 = [
  d("Tool Upgrade Stone II", 500),
  d("Tool Upgrade Stone I", 33.3),
  d("Oceanman Statue", 11.8),
  d("Agile Stamp", 5000),
  d("Small Strength Potion", 14.3, 5),
  d("Bag o Heads Stamp", 10000),
  t(SuperDropTable2, 167),
];

export const DropTable13 = [
  d("Small Experience Balloon", 2),
  d("Gem", 1, 4),
  d("1 HR Time Candy", 2.5),
  d("2 HR Time Candy", 5),
  d("4 HR Time Candy", 20),
  d("12 HR Time Candy", 100),
  d("24 HR Time Candy", 333),
  d("72 HR Time Candy", 3330),
];

export const DropTable14 = [
  d("Stample Stamp", 1000),
  d("Distilled Water", 45.5),
  d("Banked Pts Stamp", 1670),
  d("EhExPee Statue", 20),
  d("Speed Statue", 33.3),
  d("Decent Strength Potion", 6.67, 25),
  d("Cloudsound Follower", 2, 8),
  d("Instablab Follower", 3.33, 5),
  d("Corporatube Sub", 5, 3),
  d("Bronze Obol of Worship", 1060),
  t(SuperDropTable3, 167),
];

export const DropTable15 = [
  d("Multikill Stamp", 3330),
  d("Distilled Water", 40),
  d("Violence Stamp", 6670),
  d("Mountain Bread", 2, 15),
  d("Bucket of Slush (Apprentice Recipe)", 500),
  d("EhExPee Statue", 25),
  d("Cloudsound Follower", 2, 9),
  d("Instablab Follower", 3.33, 5),
  d("Corporatube Sub", 5, 3),
  d("Bronze Obol of Trapping", 1060),
  t(SuperDropTable3, 167),
];

export const DropTable16 = [
  d("Flowin Stamp", 10000),
  d("Distilled Water", 37),
  d("Blover Stamp", 12500),
  d("Average EXP Potion", 10, 25),
  d("Feasty Statue", 33.3),
  d("Cloudsound Follower", 2, 10),
  d("Corporatube Sub", 5, 3),
  d("Instablab Follower", 3.33, 5),
  d("Bronze Obol of Construction", 1060),
  t(SuperDropTable3, 167),
];

export const DropTable17 = [
  d("Arctic Leaf", 2, 3),
  d("Hidey Box Stamp", 833),
  t(SuperDropTable3, 167),
];

export const DropTable18 = [
  d("Spikemouth Stamp", 833),
  t(SuperDropTable3, 167),
];

export const DropTable19 = [
  d("Pecunia Statue", 40),
  d("Tripleshot Stamp", 3700),
  d("Massless Unit for Physics Questions", 4350),
  d("Cloudsound Follower", 2, 8),
  d("Corporatube Sub", 5, 3),
  t(SuperDropTable4, 167),
];

export const DropTable20 = [
  d("Mutton Statue", 40),
  d("Wiener Links", 6670),
  d("Potent Mana Potion", 6.67, 50),
  d("Cloudsound Follower", 2, 8),
  d("Corporatube Sub", 5, 3),
  t(SuperDropTable4, 167),
];

export const DropTable21 = [
  d("Egg Statue", 40),
  d("Blackheart Stamp", 5560),
  d("Crash Box", 20000),
  d("Cloudsound Follower", 2, 8),
  d("Corporatube Sub", 5, 3),
  t(SuperDropTable4, 167),
];

export const DropTable22 = [
  d("Galactic Leaf", 2, 3),
  d("Dualhook Prongs", 1250),
  t(SuperDropTable4, 167),
];

export const DropTable23 = [
  d("Its a Girl Celebration", 1250),
  t(SuperDropTable4, 167),
];

export const DropTable25 = [
  d("Battleaxe Statue", 66.7),
  d("Maxo Slappo Stamp", 5880),
  d("Golden Hampter Gummy Candy", 159),
  d("Quotient EXP Potion", 10, 20),
  d("Storage Chest 24", 833),
  d("Cloudsound Follower", 2, 8),
  d("Corporatube Sub", 5, 3),
  t(SuperDropTable5, 200),
];

export const DropTable26 = [
  d("Boat Statue", 66.7),
  d("Intellectostampo", 6670),
  d("Golden Grilled Cheese Nomwich", 66.7),
  d("Quotient EXP Potion", 7.14, 20),
  d("Storage Chest 25", 3330),
  d("Cloudsound Follower", 2, 8),
  d("Corporatube Sub", 5, 3),
  t(SuperDropTable5, 200),
];

export const DropTable27 = [
  d("Spiral Statue", 66.7),
  d("Valve Patented Circle Thingies", 4350),
  d("Golden Grilled Cheese Nomwich", 40),
  d("Golden Hampter Gummy Candy", 120),
  d("Quotient EXP Potion", 5.26, 20),
  d("Cloudsound Follower", 2, 8),
  d("Corporatube Sub", 5, 3),
  t(SuperDropTable5, 200),
];

export const DropTable28 = [
  d("Magma Leaf", 2, 3),
  d("Platinum Twine", 1250),
  t(SuperDropTable5, 167),
];

export const DropTable29 = [
  d("Golden Dumpling", 250),
  d("White Essence Stamp", 7690),
  d("Compost Statue", 100),
  d("Jade Mint Stamp", 4000),
  d("Cloudsound Follower", 2, 8),
  d("Corporatube Sub", 5, 3),
  t(SuperDropTable6, 200),
];

export const DropTable30 = [
  d("Stealth Statue", 125),
  d("Golden Nigiri", 159),
  d("Sneaky Peeky Stamp", 5880),
  d("Cloudsound Follower", 2, 8),
  d("Corporatube Sub", 5, 3),
  t(SuperDropTable6, 200),
];

export const DropTable31 = [
  d("Essence Statue", 143),
  d("Captalist Stats Stamp", 8330),
  d("Cloudsound Follower", 2, 8),
  d("Corporatube Sub", 5, 3),
  t(SuperDropTable6, 200),
];

export const DropTable32 = [
  d("Golden Dumpling", 154),
  d("Dark Triad Essence Stamp", 12500),
  d("Cloudsound Follower", 2, 8),
  d("Corporatube Sub", 5, 3),
  t(SuperDropTable6, 200),
];

export const DropTable33 = [d("Spirit Leaf", 2, 3), t(SuperDropTable6, 167)];

export const allDropTables = {
  DropTable1,
  DropTable2,
  DropTable3,
  DropTable3b,
  DropTable3c,
  DropTable4,
  DropTable5,
  DropTable5b,
  DropTable6,
  DropTable7,
  DropTable8,
  DropTable9,
  DropTable10,
  DropTable11,
  DropTable12,
  DropTable13,
  DropTable14,
  DropTable15,
  DropTable16,
  DropTable17,
  DropTable18,
  DropTable19,
  DropTable20,
  DropTable21,
  DropTable22,
  DropTable23,
  DropTable25,
  DropTable26,
  DropTable27,
  DropTable28,
  DropTable29,
  DropTable30,
  DropTable31,
  DropTable32,
  DropTable33,

  SuperDropTable1,
  SuperDropTable2,
  SuperDropTable3,
  SuperDropTable4,
  SuperDropTable5,
  SuperDropTable6,
};
