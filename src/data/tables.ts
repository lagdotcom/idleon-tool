import { mkDrop, mkTableDrop } from "./tools";

export const SuperDropTable1 = [
  mkDrop("Lucky Lad", 3330),
  mkDrop("Silver Pen", 14.3),
  mkDrop("Roll Da Dice (Special Talent Book)", 10),
  mkDrop("Talent Point Reset Fragment", 10),
  mkDrop("Attacks On Simmer (Special Talent Book)", 10),
  mkDrop("Golden Nomwich", 2),
  mkDrop("Silver Obol of Pocket Change", 31.7),
  mkDrop("Silver Obol of Little Damage", 30.7),
  mkDrop("Bronze Obol of Experience", 32.8),
  mkDrop("Mystery Upgrade Stone I", 1.18, 2),
];

export const DropTable1 = [
  mkDrop("Copper Band (Recipe)", 125),
  mkDrop("Nomwich", 4, 10),
  mkDrop("Small Mana Potion", 10, 5),
  mkDrop("White Headband", 100),
  mkDrop("Give Up On Life Pants", 50),
  mkDrop("Anvil Zoomer Stamp", 833),
  mkDrop("Cloudsound Follower", 2, 3),
  mkDrop("Bronze STR Obol", 866, 1),
  mkTableDrop(SuperDropTable1, 250),
];

export const DropTable2 = [
  mkDrop("Hot Dog", 2.86, 15),
  mkDrop("Power Statue", 8.33),
  mkDrop("Small Speed Potion", 10, 5),
  mkDrop("Average Strength Potion", 5, 10),
  mkDrop("Bottled Town Teleport", 50),
  mkDrop("Tattered Cloth", 100),
  mkDrop("Time Thingy", 3.33),
  mkDrop("Cloudsound Follower", 2, 4),
  mkDrop("Bronze AGI Obol", 866),
  mkTableDrop(SuperDropTable1, 222),
];

export const DropTable3 = [
  mkDrop("Cheezy Pizza", 2.38, 15),
  mkDrop("Health Statue", 8.33),
  mkDrop("Steel Band (Recipe)", 20000),
  mkDrop("Average Mana Potion", 4, 10),
  mkDrop("Tool Upgrade Stone II", 33.3),
  mkDrop("Bottled Town Teleport", 20),
  mkDrop("Cloudsound Follower", 2, 6),
  mkDrop("Bronze WIS Obol", 866),
  mkTableDrop(SuperDropTable1, 200),
];

export const DropTable3b = [
  mkDrop("Small Life Potion", 2.5, 25),
  mkDrop("Small Mana Potion", 2.5, 25),
  mkDrop("Health Statue", 11.1),
  mkDrop("Feasty Statue", 20),
  mkDrop("Cloudsound Follower", 2, 3),
  mkTableDrop(SuperDropTable1, 182),
];

export const DropTable3c = [
  mkDrop("Small Life Potion", 2.5, 25),
  mkDrop("Small Mana Potion", 2.5, 25),
  mkDrop("Health Statue", 11.1),
  mkDrop("Bullseye Statue", 20),
  mkDrop("Cloudsound Follower", 2, 3),
  mkTableDrop(SuperDropTable1, 182),
];

export const DropTable4 = [
  mkDrop("Armor Upgrade Stone I", 55.6),
  mkDrop("Tool Upgrade Stone I", 55.6),
  mkDrop("Lumberbob Statue", 6.17),
  mkDrop("High IQ Lumber Stamp", 1850),
  mkDrop("Small Speed Potion", 8.33, 5),
  mkDrop("Book Stamp", 11100),
  mkDrop("Bronze LUK Obol", 1440),
  mkTableDrop(SuperDropTable1, 167),
];

export const DropTable5 = [
  mkDrop("Grass Leaf", 2, 5),
  mkDrop("Weapon Upgrade Stone I", 33.3),
  mkDrop("Tool Upgrade Stone I", 33.3),
  mkDrop("Mining Statue", 3.13),
  mkDrop("Small Strength Potion", 10, 5),
  mkDrop("Smart Dirt Stamp", 667),
  mkDrop("Silver STR Obol", 1360),
  mkTableDrop(SuperDropTable1, 167),
];

export const DropTable5b = [
  mkDrop("Speed Statue", 14.3),
  mkDrop("Feasty Statue", 20),
  mkDrop("Beholder Statue", 20),
];
