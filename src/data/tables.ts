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
  d("Copper Band (Recipe)", 125),
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
  d("Steel Band (Recipe)", 20000),
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

export const DropTable11 = [
  d("Twisty Leaf", 2, 4),
  d("Weapon Upgrade Stone II", 500),
  d("Tool Upgrade Stone I", 33.3),
  d("Thicc Skin Statue", 20),
  d("Small Strength Potion", 14.3, 5),
  d("Alch Go Brrr Stamp", 3330),
  t(SuperDropTable2, 167),
];

export const DropTable17 = [
  d("Arctic Leaf", 2, 3),
  d("Hidey Box Stamp", 833),
  t(SuperDropTable3, 167),
];

export const DropTable22 = [
  d("Galactic Leaf", 2, 3),
  d("Dualhook Prongs", 1250),
  t(SuperDropTable4, 167),
];

export const DropTable28 = [
  d("Magma Leaf", 2, 3),
  d("Platinum Twine", 1250),
  t(SuperDropTable5, 167),
];

export const DropTable33 = [d("Spirit Leaf", 2, 3), t(SuperDropTable6, 167)];
