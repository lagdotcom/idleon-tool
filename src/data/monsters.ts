import amarok from "../img/Amarok_Card.png";
import babaYaga from "../img/Baba_Yaga_Card.png";
import babyBoa from "../img/Baby_Boa_Card.png";
import boop from "../img/Boop_Card.png";
import boredBean from "../img/Bored_Bean_Card.png";
import carrotman from "../img/Carrotman_Card.png";
import crabcake from "../img/Crabcake_Card.png";
import crystalCarrot from "../img/Crystal_Carrot_Card.png";
import drDefecaus from "../img/Dr_Defecaus_Card.png";
import frog from "../img/Frog_Card.png";
import gigafrog from "../img/Gigafrog_Card.png";
import glublin from "../img/Glublin_Card.png";
import greenMushroom from "../img/Green_Mushroom_Card.png";
import mafioso from "../img/Mafioso_Card.png";
import mashedPotato from "../img/Mashed_Potato_Card.png";
import mimic from "../img/Mimic_Card.png";
import nutto from "../img/Nutto_Card.png";
import pincermin from "../img/Pincermin_Card.png";
import poop from "../img/Poop_Card.png";
import rat from "../img/Rat_Card.png";
import redMushroom from "../img/Red_Mushroom_Card.png";
import sandCastle from "../img/Sand_Castle_Card.png";
import sandyPot from "../img/Sandy_Pot_Card.png";
import slime from "../img/Slime_Card.png";
import tyson from "../img/Tyson_Card.png";
import walkingStick from "../img/Walking_Stick_Card.png";
import wodeBoard from "../img/Wode_Board_Card.png";
import woodMushroom from "../img/Wood_Mushroom_Card.png";
import {
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
} from "./tables";
import { getDropperMaker, mkDrop as d, mkTableDrop as t } from "./tools";

const m = getDropperMaker("monster");

const monsters = [
  m(
    "Green Mushroom",
    greenMushroom,
    "Spore Meadows",
    d("Spore Cap", 4.55),
    d("Green Mushroom Card", 10000),
    d("Nomwich", 200, 3),
    d("Spore Tee", 2860),
    d("Weapon Upgrade Stone II", 20000),
    d("Bolt Cutters", 100000),
    t(DropTable1, 333),
  ),
  m(
    "Red Mushroom",
    redMushroom,
    "Birch Enclave",
    d("Red Spore Cap", 5),
    d("Red Mushroom Card", 10000),
    t(DropTable1, 192),
  ),
  m(
    "Frog",
    frog,
    "Froggy Fields",
    d("Frog Leg", 4.76),
    d("Frog Card", 10000),
    d("Small Mana Potion", 500),
    d("Dank Paypay Chest", 10000),
    d("Green Headband", 4000),
    t(DropTable1, 263),
  ),
  m(
    "Bored Bean",
    boredBean,
    "Valley of the Beans",
    d("Bean Slices", 5),
    d("Bored Bean Card", 10300),
    d("Armor Upgrade Stone II", 20000),
    d("Bored Beanie", 28600),
    t(DropTable1, 222),
  ),
  m(
    "Slime",
    slime,
    "Jungle Perimeter",
    d("Slime Sludge", 5.26),
    d("Slime Card", 10500),
    d("Goo Galoshes (Recipe)", 33300),
    d("Toxic Sludge", 3330, 10),
    d("Double Goopi (Recipe)", 50000),
    t(DropTable2, 250),
  ),
  m(
    "Baby Boa",
    babyBoa,
    "Winding Willows",
    d("Snake Skin", 5.56),
    d("Baby Boa Card", 10600),
    d("Cheezy Pizza", 200, 3),
    d("Strange Rock", 5),
    d("Longsword Stamp", 20000),
    d("Snakeskinventory Bag", 12500),
    t(DropTable2, 200),
  ),
  m(
    "Carrotman",
    carrotman,
    "Vegetable Patch",
    d("Carrot Cube", 5.88),
    d("Carrotman Card", 11100),
    d("Cheezy Pizza", 167, 4),
    d("Carrot Launcher", 25000),
    t(DropTable2, 167),
  ),
  m(
    "Glublin",
    glublin,
    "Forest Outskirts",
    d("Glublin Ear", 6.25),
    d("Glublin Card", 11600),
    d("Helmet Upgrade Stone I", 6670),
    d("Fur Shirt (Recipe)", 33300),
    t(DropTable3, 250),
  ),
  m(
    "Wode Board",
    wodeBoard,
    "Encroaching Forest Villas",
    d("Plank", 6.67),
    d("Wode Board Card", 12500),
    d("Bleached Designer Wode Patch Pants (Recipe)", 33300),
    d("Dog Bone", 3.33),
    d("Planktop", 100000),
    t(DropTable3, 222),
  ),
  m(
    "Gigafrog",
    gigafrog,
    "Tucked Away",
    d("Bullfrog Horn", 7.14),
    d("Gigafrog Card", 14300),
    d("Battleaxe Stamp", 33300),
    d("Average Life Potion", 1000, 5),
    d("Kapow Stamp", 3330),
    d("Bronze Obol of Pop", 100000),
    t(DropTable3, 200),
  ),
  m(
    "Poop",
    poop,
    "Poopy Sewers",
    d("Corn Kernels", 4.17),
    d("Poop Card", 16700),
    d("Golden Plop", 20000),
    d("Bandito Pantaloon (Recipe)", 10000),
    d("Corporatube Sub", 4.35),
    t(DropTable3b, 167),
  ),
  m(
    "Rat",
    rat,
    "Rats Nest",
    d("Rats Tail", 5.26),
    d("Rat Card", 20000),
    d("Employment Statistics", 10),
    d("Instablab Follower", 6.25),
    t(DropTable3b, 167),
  ),
  m("Boop", boop, "Meel's Crypt", d("Bonemeal", 2), d("Boop Card", 667)),
  m(
    "Walking Stick",
    walkingStick,
    "The Base of the Bark",
    d("Stick", 4.76),
    d("Walking Stick Card", 16700),
    d("Woodular Circle", 20000),
    d("Fishing Overalls (Recipe)", 5000),
    t(DropTable3c, 175),
  ),
  m(
    "Nutto",
    nutto,
    "Hollowed Trunk",
    d("Acorn", 4.35),
    d("Nutto Card", 20000),
    t(DropTable3c, 154),
  ),
  m(
    "Wood Mushroom",
    woodMushroom,
    "Where the Branches End",
    d("Red Frisbee", 100000),
    d("Woodular Circle", 13300),
    d("Wood Mushroom Card", 10000),
    t(DropTable3c, 143),
  ),
  m(
    "Crystal Carrot",
    crystalCarrot,
    "Blunder Hills",
    d("Crystal Carrot Card", 100),
    d("Crystallin", 10),
    d("Quest Chungus (Special Talent Book)", 200),
    t(DropTable1, 1.67),
    t(DropTable2, 2),
    t(DropTable3, 2.5),
    t(DropTable4, 1.67),
    t(DropTable5, 2),
    t(DropTable5b, 1),
  ),

  m(
    "Baba Yaga",
    babaYaga,
    "Birch Enclave",
    d("Baba Yaga Card", 33.3),
    d("Baba Yaga Baby Eggs", 167),
    d("Serrated Rex Ring (Recipe)", 16.7),
    d("Flowies", 1),
    t(DropTable1, 1),
    t(DropTable2, 1),
    t(DropTable3, 1),
  ),
  m(
    "Dr Defecaus",
    drDefecaus,
    "The Office",
    d("Dr Defecaus Card", 33.3),
    d("Job Application", 1),
    d("Polished Bludgeon (Recipe)", 16.7),
    d("Corn Kernels", 1, 150),
    d("Stinky Axe", 50),
    d("Poopy Pickaxe", 100),
    d("Golden Plop", 10),
    t(DropTable3, 1),
  ),
  m(
    "Amarok",
    amarok,
    "Amarok Arena",
    d("Magic Meatloaf", 20),
    d("Amarok Card", 25),
    d("Grandma Disguise", 1000),
    d("Granite Obol of Amarok's Stare", 1430),
    d("Amarok Slab", 3.33),
    t(DropTable1, 0.5),
    t(DropTable2, 0.5),
    t(DropTable3, 0.5),
  ),

  m(
    "Sandy Pot",
    sandyPot,
    "Jar Bridge",
    d("Pocket Sand", 4.55),
    d("Sandy Pot Card", 10000),
    d("Yellow Headband", 10000),
    d("Glass Shard", 20000),
    t(DropTable6, 333),
  ),
  m(
    "Mimic",
    mimic,
    "The Mimic Hole",
    d("Megalodon Tooth", 4.72),
    d("Sesame Seed", 100),
    d("Casual Confidante", 10),
    d("Mimic Card", 10000),
    d("Totally Normal and not fake Bag", 40000),
    d("Defenders Dignity (Recipe)", 200000),
    t(DropTable6, 313),
  ),
  m(
    "Crabcake",
    crabcake,
    "Dessert Dunes",
    d("Crabby Cakey", 4.88),
    d("Crabcake Card", 10000),
    d("Nuget Cake", 20000),
    d("Googley Eyes (Recipe)", 40000),
    t(DropTable6, 278),
  ),
  m(
    "Mafioso",
    mafioso,
    "The Grandioso Canyon",
    d("Coconotnotto", 5),
    d("Triumphant Treason", 13.3),
    d("Mafioso Card", 10000),
    d("Strung Bludgeon (Recipe)", 500000),
    t(DropTable7, 313),
  ),
  m(
    "Sand Castle",
    sandCastle,
    "Shifty Sandbox",
    d("Furled Flag", 5.26),
    d("Claiming Cashe", 20),
    d("Sand Castle Card", 10000),
    t(DropTable7, 286),
  ),
  m(
    "Pincermin",
    pincermin,
    "Pincer Plateau",
    d("Pincer Arm", 5.56),
    d("Pincermin Card", 10000),
    d("Bolstered DNA Splicer (Recipe)", 333000),
    t(DropTable7, 270),
  ),
  m(
    "Mashed Potato",
    mashedPotato,
    "Slamabam Straightaway",
    d("Potato Remains", 5.88),
    d("Mashed Potato Card", 10000),
    t(DropTable7, 256),
  ),
  m(
    "Tyson",
    tyson,
    "The Ring",
    d("High Steaks", 5.56),
    d("Tyson Card", 10000),
    t(DropTable8, 313),
  ),
];
export default monsters;
