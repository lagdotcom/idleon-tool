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
  DropTable9,
  DropTable11,
  DropTable13,
  DropTable14,
  DropTable15,
  DropTable16,
  DropTable17,
  DropTable18,
  DropTable19,
  DropTable20,
  DropTable21,
  DropTable25,
  DropTable26,
  DropTable27,
  DropTable28,
  DropTable29,
  DropTable30,
  DropTable31,
  DropTable32,
  DropTable33,
} from "./tables";
import { getAFKDropperMaker, mkDrop as d, mkTableDrop as t } from "./tools";

const m = getAFKDropperMaker("monster");
export const monsters = [
  m(
    "Green Mushroom",
    "Spore Meadows",
    "mushG",
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
    "Birch Enclave",
    undefined,
    d("Red Spore Cap", 5),
    d("Red Mushroom Card", 10000),
    t(DropTable1, 192),
  ),
  m(
    "Frog",
    "Froggy Fields",
    "frogG",
    d("Frog Leg", 4.76),
    d("Frog Card", 10000),
    d("Ketchup Bottle", 2),
    d("Mustard Bottle", 3.33),
    d("Small Mana Potion", 500),
    d("Dank Paypay Chest", 10000),
    d("Green Headband", 4000),
    t(DropTable1, 263),
  ),
  m(
    "Bored Bean",
    "Valley of the Beans",
    "beanG",
    d("Bean Slices", 5),
    d("Bored Bean Card", 10300),
    d("Armor Upgrade Stone II", 20000),
    d("Bored Beanie", 28600),
    t(DropTable1, 222),
  ),
  m(
    "Slime",
    "Jungle Perimeter",
    "slimeG",
    d("Slime Sludge", 5.26),
    d("Slime Card", 10500),
    d("Goo Galoshes (Beginner Recipe)", 33300),
    d("Toxic Sludge", 3330, 10),
    d("Double Goopi (Beginner Recipe)", 50000),
    t(DropTable2, 250),
  ),
  m(
    "Baby Boa",
    "Winding Willows",
    undefined,
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
    "Vegetable Patch",
    "carrotO",
    d("Carrot Cube", 5.88),
    d("Carrotman Card", 11100),
    d("Cheezy Pizza", 167, 4),
    d("Carrot Launcher", 25000),
    t(DropTable2, 167),
  ),
  m(
    "Glublin",
    "Forest Outskirts",
    undefined,
    d("Glublin Ear", 6.25),
    d("Glublin Card", 11600),
    d("Helmet Upgrade Stone I", 6670),
    d("Fur Shirt (Beginner Recipe)", 33300),
    t(DropTable3, 250),
  ),
  m(
    "Wode Board",
    "Encroaching Forest Villas",
    undefined,
    d("Plank", 6.67),
    d("Wode Board Card", 12500),
    d("Bleached Designer Wode Patch Pants (Beginner Recipe)", 33300),
    d("Dog Bone", 3.33),
    d("Planktop", 100000),
    t(DropTable3, 222),
  ),
  m(
    "Gigafrog",
    "Tucked Away",
    "frogBIG",
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
    "Poopy Sewers",
    "poopSmall",
    d("Corn Kernels", 4.17),
    d("Poop Card", 16700),
    d("Golden Plop", 20000),
    d("Bandito Pantaloon (Beginner Recipe)", 10000),
    d("Corporatube Sub", 4.35),
    t(DropTable3b, 167),
  ),
  m(
    "Rat",
    "Rats Nest",
    undefined,
    d("Rats Tail", 5.26),
    d("Rat Card", 20000),
    d("Employment Statistics", 10),
    d("Instablab Follower", 6.25),
    t(DropTable3b, 167),
  ),
  m("Boop", "Meel's Crypt", undefined, d("Bonemeal", 2), d("Boop Card", 667)),
  m(
    "Walking Stick",
    "The Base of the Bark",
    undefined,
    d("Stick", 4.76),
    d("Walking Stick Card", 16700),
    d("Woodular Circle", 20000),
    d("Fishing Overalls (Beginner Recipe)", 5000),
    t(DropTable3c, 175),
  ),
  m(
    "Nutto",
    "Hollowed Trunk",
    "acorn",
    d("Acorn", 4.35),
    d("Nutto Card", 20000),
    t(DropTable3c, 154),
  ),
  m(
    "Wood Mushroom",
    "Where the Branches End",
    "mushW",
    d("Red Frisbee", 100000),
    d("Woodular Circle", 13300),
    d("Wood Mushroom Card", 10000),
    t(DropTable3c, 143),
  ),
  m(
    "Crystal Carrot",
    "Blunder Hills",
    undefined,
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
    "Birch Enclave",
    undefined,
    d("Just Exp (Special Talent Book)", NaN),
    d("Frothy Malk (Special Talent Book)", NaN),
    d("Baba Yaga Card", 33.3),
    d("Baba Yaga Baby Eggs", 167),
    d("Serrated Rex Ring (Beginner Recipe)", 16.7),
    d("Flowies", 1),
    t(DropTable1, 1),
    t(DropTable2, 1),
    t(DropTable3, 1),
  ),
  m(
    "Dr Defecaus",
    "The Office",
    undefined,
    d("Just Exp (Special Talent Book)", NaN),
    d("Frothy Malk (Special Talent Book)", NaN),
    d("Dr Defecaus Card", 33.3),
    d("Job Application", 1),
    d("Polished Bludgeon (Novice Recipe)", 16.7),
    d("Corn Kernels", 1, 150),
    d("Stinky Axe", 50),
    d("Poopy Pickaxe", 100),
    d("Golden Plop", 10),
    t(DropTable3, 1),
  ),
  m(
    "Amarok",
    "Amarok Arena",
    undefined,
    d("Desert Topaz", NaN),
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
    "Chaotic Amarok",
    "Amarok Arena",
    undefined,
    d("Magic Meatloaf", 10, 3),
    d("Chaotic Amarok Card", 50),
    d("Grandma Disguise", 250),
    d("Granite Obol of Amarok's Stare", 303),
    d("Amarok Slab", 2.5, 3),
    d("Chaotic Amarok Slab", 5),
    t(DropTable1, 0.25),
    t(DropTable2, 0.25),
    t(DropTable3, 0.25),
  ),
  m(
    "Radiant Amarok",
    "Amarok Arena",
    undefined,
    d("Magic Meatloaf", 20, 10),
    d("Radiant Amarok Card", 50),
    d("Grandma Disguise", 83.3),
    d("Granite Obol of Amarok's Stare", 118),
    d("Radiant Amarok Backstabber", 1000),
    d("Mystery Upgrade Stone I", 4),
    d("Amarok Slab", 2, 6),
    d("Chaotic Amarok Slab", 2, 2),
    t(DropTable2, 0.5),
    t(DropTable3, 0.5),
  ),

  m(
    "Dungeon Frog",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 100),
    d("Flurbo", 667),
    d("Poisoned Leg", 5),
  ),
  m(
    "Poisonic Frog",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 83.3),
    d("Flurbo", 714),
    d("Minced Bluebeef", 3.57),
    d("Poisonic Frog Card", 250),
  ),
  m(
    "Blue Gigafrog",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 76.9),
    d("Flurbo", 333),
    d("Bloated Cyst", 4.55),
  ),
  m(
    "Globohopper",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 71.4),
    d("Flurbo", 250),
    d("Floppy Gizard", 5.26),
    d("Globohopper Card", 400),
  ),
  m(
    "King Frog",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 58.8),
    d("Flurbo", 167),
    d("Molted Tail", 6.25),
    d("King Frog Card", 400),
  ),
  m(
    "Lava Slimer",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 50),
    d("Flurbo", 83.3),
    d("Decomposing Skull", 8),
    d("Lava Slimer Card", 400),
  ),
  m(
    "Chromatium Frog",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 33.3),
    d("Flurbo", 50),
    d("Giant Frog Eye", 5.88),
    d("Chromatium Frog Card", 400),
  ),
  m(
    "Eldritch Croaker",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 16.7),
    d("Flurbo", 40),
    d("Eldritch Froggore", 10),
    d("Eldritch Croaker Card", 250),
  ),
  m(
    "Grandfrogger",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 1.25),
    d("Flurbo", 2),
    d("Grandfrogger Card", 25),
  ),
  m(
    "Rotting Grandfrogger",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 1.25),
    d("Flurbo", 2),
    d("Rotting Grandfrogger Card", 40),
  ),
  m(
    "Forlorn Grandfrogger",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 1.25),
    d("Flurbo", 2),
    d("Forlorn Grandfrogger Card", 40),
  ),
  m(
    "Vengeful Grandfrogger",
    "Grandfrog's Gazebo",
    undefined,
    d("Dungeon Credits", 1.25),
    d("Flurbo", 2),
    d("Vengeful Grandfrogger Card", 40),
  ),

  m(
    "Sandy Pot",
    "Jar Bridge",
    "jarSand",
    d("Pocket Sand", 4.55),
    d("Sandy Pot Card", 10000),
    d("Yellow Headband", 10000),
    d("Glass Shard", 20000),
    t(DropTable6, 333),
  ),
  m(
    "Mimic",
    "The Mimic Hole",
    "mimicA",
    d("Megalodon Tooth", 4.72),
    d("Sesame Seed", 100),
    d("Casual Confidante", 10),
    d("Mimic Card", 10000),
    d("Totally Normal and not fake Bag", 40000),
    d("Defenders Dignity (Novice Recipe)", 200000),
    t(DropTable6, 313),
  ),
  m(
    "Crabcake",
    "Dessert Dunes",
    "crabcake",
    d("Crabby Cakey", 4.88),
    d("Crabcake Card", 10000),
    d("Nuget Cake", 20000),
    d("Googley Eyes (Novice Recipe)", 40000),
    t(DropTable6, 278),
  ),
  m(
    "Mafioso",
    "The Grandioso Canyon",
    "coconut",
    d("Coconotnotto", 5),
    d("Triumphant Treason", 13.3),
    d("Mafioso Card", 10000),
    d("Strung Bludgeon (Novice Recipe)", 500000),
    t(DropTable7, 313),
  ),
  m(
    "Sand Castle",
    "Shifty Sandbox",
    "sandcastle",
    d("Furled Flag", 5.26),
    d("Claiming Cashe", 20),
    d("Sand Castle Card", 10000),
    t(DropTable7, 286),
  ),
  m(
    "Pincermin",
    "Pincer Plateau",
    "demonP",
    d("Pincer Arm", 5.56),
    d("Pincermin Card", 10000),
    d("Bolstered DNA Splicer (Journeyman Recipe)", 333000),
    t(DropTable7, 270),
  ),
  m(
    "Mashed Potato",
    "Slamabam Straightaway",
    "potato",
    d("Potato Remains", 5.88),
    d("Mashed Potato Card", 10000),
    t(DropTable7, 256),
  ),
  m(
    "Tyson",
    "The Ring",
    "steak",
    d("High Steaks", 5.56),
    d("Tyson Card", 10000),
    t(DropTable8, 313),
  ),
  m(
    "Moonmoon",
    "Up Up Down Down",
    "moonman",
    d("Wakka Cherry", 6.06),
    d("Ghost", 2000),
    d("Moonmoon Card", 10000),
    d("Loomi's Room Key", 10000),
    d("Baseball Hat", 6670000),
    t(DropTable8, 286),
  ),
  m(
    "Sand Giant",
    "Sands of Time",
    "sandgiant",
    d("Singlecle", 6.58),
    d("Sand Giant Card", 10000),
    d("Dootjat Eye (Novice Recipe)", 58800),
    t(DropTable8, 270),
  ),
  m(
    "Snelbie",
    "Djonnuttown",
    "snailZ",
    d("Shrapshell", 7.14),
    d("Snelbie Card", 10000),
    d("Fuscismatia", 500000),
    t(DropTable8, 256),
  ),
  m(
    "Dig Doug",
    "Sandstone Colosseum",
    undefined,
    d("Dig Doug Card", 25),
    t(DropTable7, 313),
  ),
  m(
    "Crystal Crabal",
    "Yum Yum Desert",
    undefined,
    d("Crystal Crabal Card", 125),
    d("Crystallin", 10),
    d("Quest Chungus (Special Talent Book)", 200),
    t(DropTable6, 1.67),
    t(DropTable7, 2),
    t(DropTable8, 2.5),
    t(DropTable9, 1.67),
    t(DropTable11, 2),
    t(DropTable5b, 1),
  ),

  m(
    "Biggie Hours",
    "The Mimic Hole / Sandstone Colosseum",
    undefined,
    d("Pulsation (Special Talent Book)", NaN),
    d("Cardiovascular! (Special Talent Book)", NaN),
    d("Biggie Hours Card", 41.7),
    d("Minuteglass", 3.33),
    d("Mystery Upgrade Stone I", 2.5, 2),
    d("Skullfish Pendant (Novice Recipe)", 16.7),
    d("Armor Upgrade Stone C", 125),
    d("Star Talent Reset Potion (Novice Recipe)", 16.7),
    t(DropTable6, 2),
    t(DropTable13, 2.5),
  ),
  m(
    "King Doot",
    "Sands of Time",
    undefined,
    d("Pulsation (Special Talent Book)", NaN),
    d("Cardiovascular! (Special Talent Book)", NaN),
    d("King Doot Card", 25),
    d("Efaunt's Tomb Key", 1.25),
    d("Protectors Pride (Novice Recipe)", 16.7),
    d("Gem", 1.33, 5),
    d("Mystery Upgrade Stone I", 1),
    d("Armor Upgrade Stone C", 25),
    d("Trimmed Rune Platelegs", 25),
    d("Midnight Cookie", 5, 2),
    d("Dootophone", 1),
    t(DropTable13, 2),
  ),
  m(
    "Efaunt",
    "Efaunts Tomb",
    undefined,
    d("Glacier Quartz", NaN),
    d("Efaunt Card", 40),
    d("Midnight Cookie", 14.3),
    d("Skeletal Obol of Efaunt's Gaze", 1000),
    d("Royal Turban", 1500),
    d("Star Talent Reset Potion (Novice Recipe)", 25),
    d("Ripped Tunic", 3.33),
    t(DropTable6, 0.5),
    t(DropTable7, 0.5),
    t(DropTable8, 0.5),
  ),
  m(
    "Chaotic Efaunt",
    "Efaunts Tomb",
    undefined,
    d("Chaotic Efaunt Card", 62.5),
    d("Midnight Cookie", 14.3),
    d("Skeletal Obol of Efaunt's Gaze", 333),
    d("Royal Turban", 500),
    d("Ripped Tunic", 2.5),
    d("Ribbed Tunic", 5),
    t(DropTable7, 0.5),
    t(DropTable8, 0.5),
  ),
  m(
    "Gilded Efaunt",
    "Efaunts Tomb",
    undefined,
    d("Gilded Efaunt Card", 50),
    d("Midnight Cookie", 14.3),
    d("Skeletal Obol of Efaunt's Gaze", 55.6),
    d("Royal Turban", 66.7),
    d("Ripped Tunic", 1.11, 12),
    d("Ribbed Tunic", 2, 4),
    d("Gilded Efaunt Dislodged Tusks", 1430),
    t(DropTable8, 0.5),
  ),

  m(
    "Target",
    "Crypt of Snakenhotep",
    undefined,
    d("Dungeon Credits", 83.3),
    d("Flurbo", 588),
    d("Target Card", 200),
  ),
  m(
    "Grumblo",
    "Crypt of Snakenhotep",
    undefined,
    d("Dungeon Credits", 62.5),
    d("Flurbo", 400),
    d("Grumblo Card", 125),
  ),
  m(
    "Lazlo",
    "Crypt of Snakenhotep",
    undefined,
    d("Dungeon Credits", 62.5),
    d("Flurbo", 500),
    d("Lazlo Card", 14.3),
  ),
  m(
    "Beefie",
    "Crypt of Snakenhotep",
    undefined,
    d("Dungeon Credits", 55.6),
    d("Flurbo", 400),
    d("Beefie Card", 400),
  ),
  m(
    "Cactopunk",
    "Crypt of Snakenhotep",
    undefined,
    d("Dungeon Credits", 45.5),
    d("Flurbo", 200),
    d("Catopunk Card", 400),
  ),
  m(
    "Crescent Spud",
    "Crypt of Snakenhotep",
    undefined,
    d("Dungeon Credits", 33.3),
    d("Flurbo", 167),
    d("Crescent Spud Card", 400),
  ),
  m(
    "Snakenhotep",
    "Crypt of Snakenhotep",
    undefined,
    d("Dungeon Credits", 1.25),
    d("Flurbo", 2),
    d("Snakenhotep Card", 50),
  ),
  m(
    "Enraged Snakenhotep",
    "Crypt of Snakenhotep",
    undefined,
    d("Dungeon Credits", 1.25),
    d("Flurbo", 2),
    d("Enraged Snakenhotep Card", 50),
  ),
  m(
    "Inevitable Snakenhotep",
    "Crypt of Snakenhotep",
    undefined,
    d("Dungeon Credits", 1.25),
    d("Flurbo", 2),
    d("Inevitable Snakenhotep Card", 50),
  ),

  m(
    "Sheepie",
    "Steep Sheep Ledge",
    undefined,
    d("Floof Ploof", 6.25),
    d("Sheepie Card", 10000),
    d("Box Statue", 5000),
    d("Twin Ores Stamp", 12500),
    t(DropTable14, 400),
  ),
  m(
    "Frost Flake",
    "Snowfield Outskirts",
    undefined,
    d("Melty Cube", 6.25),
    d("Frost Flake Card", 10000),
    d("Duplogs Stamp", 16700),
    d("Yellow Snowflake", 20000),
    t(DropTable14, 357),
  ),
  m(
    "Sir Stache",
    "The Stache Split",
    "stache",
    d("Moustache Comb", 6.25),
    d("Sir Stache Card", 10000),
    d("Decent Speed Potion", 500),
    d("Twosoul Statue", 5000),
    t(DropTable14, 323),
  ),
  m(
    "Bloque",
    "Refrigeration Station",
    "bloque",
    d("Sticky Stick", 6.25),
    d("Bloque Card", 10000),
    d("Seesaw Statue", 5000),
    d("Decent Mana Potion", 400),
    t(DropTable15, 400),
  ),
  m(
    "Mamooth",
    "Mamooooth Mountain",
    "mamoth",
    d("Mamooth Tusk", 6.25),
    d("Mamooth Card", 10000),
    d("Ice Age 3", 20000),
    d("Mamooth Hide Bag", 125000),
    d("Shovel", 1),
    t(DropTable15, 370),
  ),
  m(
    "Snowman",
    "Rollin' Tundra",
    "snowball",
    d("Snow Ball", 6.25),
    d("Snowman Card", 10000),
    d("Cool Diggy Tool Stamp", 40000),
    d("Mountain Bread", 111),
    d("Shovel", 1),
    t(DropTable15, 345),
  ),
  m(
    "Penguin",
    "Signature Slopes",
    "penguin",
    d("Pen", 6.25),
    d("Penguin Card", 10000),
    d("Signed Contract", 1000),
    d("Box Statue", 3330),
    t(DropTable15, 323),
  ),
  m(
    "Thermister",
    "Thermonuclear Climb",
    "thermostat",
    d("Cracked Glass", 6.25),
    d("Thermister Card", 10000),
    d("Swag Swingy Tool Stamp", 100000),
    d("Shovel", 1),
    d("Double Barreled DNA Splicer (Journeyman Recipe)", 1250000),
    t(DropTable15, 303),
  ),
  m(
    "Quenchie",
    "Waterlogged Entrance",
    undefined,
    d("Sippy Straw", 6.25),
    d("Quenchie Card", 10000),
    d("Twosoul Statue", 3330),
    t(DropTable16, 400),
  ),
  m(
    "Cryosnake",
    "Cryo Catacombs",
    undefined,
    d("Cryosnake Skin", 6.25),
    d("Cryosnake Card", 10000),
    d("Seesaw Statue", 3330),
    t(DropTable16, 357),
  ),
  m(
    "Bop Box",
    "Overpass of Sound",
    "speaker",
    d("Audio Cord", 6.25),
    d("Bop Box Card", 10000),
    d("Yeti Ham", 143),
    t(DropTable16, 333),
  ),
  m(
    "Neyeptune",
    "Crystal Basecamp",
    undefined,
    d("Contact Lense", 6.25),
    d("Neyeptune Card", 10000),
    d("Black Lense", 20000),
    t(DropTable16, 313),
  ),
  m(
    "Dedotated Ram",
    "Wam Wonderland",
    undefined,
    d("Ram Wool", 6.25),
    d("Dedotated Ram Card", 10000),
    d("Neutron Ice Ring", 1000000),
    d("Grey Beret", 6670000),
    t(DropTable16, 294),
  ),
  m(
    "Xylobone",
    "Chillsnap Colosseum",
    undefined,
    d("Xylobone Card", 100),
    t(DropTable14, 100),
  ),
  m(
    "Bloodbone",
    "Hell Hath Frozen Over",
    undefined,
    d("Blood Bone", 20),
    d("Equinox Mirror", 1000),
    d("Bloodbone Card", 10000),
    t(DropTable16, 200),
  ),
  m(
    "Crystal Cattle",
    "Frostbite Tundra",
    undefined,
    d("Crystal Cattle Card", 125),
    d("Crystallin", 10),
    d("Quest Chungus (Special Talent Book)", 200),
    t(DropTable14, 1.67),
    t(DropTable15, 2),
    t(DropTable16, 2.5),
    t(DropTable17, 1.67),
    t(DropTable18, 2),
    t(DropTable5b, 1),
  ),

  m(
    "Dilapidated Slush",
    "Refrigeration Station",
    undefined,
    d("Dilapidated Slush Card", 5),
    d("Slush Skull", 111),
    d("Slushy Obol of Much Dilapidation", 250),
    d("Chizoar's Cavern Key", 1.25, 2),
    d("Midnight Stopwatch (Apprentice Recipe)", 16.7),
    d("Armor Upgrade Stone C", 25),
    d("Armor Upgrade Stone C", 25),
    t(DropTable13, 2),
  ),
  m(
    "Chizoar",
    "Chizoar's Cavern",
    undefined,
    d("Chizoar Card", 143),
    d("Frozen Obol of Chizoar's Rage", 1250),
    d("Chizoars Blankie", 1000),
    d("Chizoar Spike", 3.33),
    t(DropTable14, 0.5),
    t(DropTable15, 0.5),
    t(DropTable16, 0.5),
  ),
  m(
    "Chaotic Chizoar",
    "Chizoar's Cavern",
    undefined,
    d("Chaotic Chizoar Card", 250),
    d("Frozen Obol of Chizoar's Rage", 500),
    d("Chizoars Blankie", 313),
    d("Chizoar Spike", 2.5, 3),
    d("Chizoar Stalagmite", 5),
    t(DropTable15, 0.5),
    t(DropTable16, 0.5),
  ),
  m(
    "Blighted Chizoar",
    "Chizoar's Cavern",
    undefined,
    d("Blighted Chizoar Card", 500),
    d("Frozen Obol of Chizoar's Rage", 100),
    d("Chizoars Blankie", 71.4),
    d("Blighted Chizoar Shard Cape", 3330),
    d("Chizoar Spike", 2, 7),
    d("Chizoar Stalagmite", 2, 2),
    d("Mystery Upgrade Stone I", 33.3),
    t(DropTable8, 0.5),
  ),

  m(
    "Ice Guard",
    "Glacial Basement",
    undefined,
    d("Dungeon Credits", 5),
    d("Flurbo", 12.5),
    d("Ice Guard Card", 58.8),
  ),
  m(
    "Glaciaxus",
    "Glacial Basement",
    undefined,
    d("Dungeon Credits", 1.25),
    d("Flurbo", 1.67),
    d("Glaciaxus Card", 50),
  ),
  m(
    "Golden Glaciaxus",
    "Glacial Basement",
    undefined,
    d("Dungeon Credits", 1.25),
    d("Flurbo", 1.67),
    d("Golden Glaciaxus Card", 50),
  ),
  m(
    "Caustic Glaciaxus",
    "Glacial Basement",
    undefined,
    d("Dungeon Credits", 1.25),
    d("Flurbo", 1.67),
    d("Caustic Glaciaxus Card", 50),
  ),

  m(
    "Purp Mushroom",
    "Spaceway Raceway",
    undefined,
    d("Purple Mush Cap", 6.25),
    d("Cooking Clogs", 167000),
    d("Purp Mushroom Card", 50000),
    t(DropTable19, 400),
    d("Toxic Sludge", 50),
  ),
  m(
    "TV",
    "TV Outpost",
    undefined,
    d("TV Remote", 6.25),
    d("Lost Batteries", 50000),
    d("Its a Boy Celebration", 455000),
    d("Storage Chest 22", 125000),
    d("TV Card", 50000),
    t(DropTable19, 357),
  ),
  m(
    "Donut",
    "Donut Drive-In",
    undefined,
    d("Half Eaten Donut", 6.25),
    d("Laboratory Scrubs", 167000),
    d("Donut Card", 50000),
    t(DropTable19, 323),
  ),
  m(
    "Demon Genie",
    "Outskirts of Fallstar Isle",
    undefined,
    d("Genie Lamp", 6.25),
    d("Lab Ring", 250000),
    d("Demon Genie Card", 50000),
    t(DropTable19, 294),
  ),
  m(
    "Soda Can",
    "Mountainous Deugh",
    undefined,
    d("Bottle Cap", 6.25),
    d("Basic Bobber", 526000),
    d("Soda Can Card", 50000),
    t(DropTable20, 370),
  ),
  m(
    "Flying Worm",
    "Wurm Highway",
    undefined,
    d("Wurm Tail", 6.25),
    d("Gilded Axe Stamp", 263000),
    d("Flying Worm Card", 50000),
    t(DropTable20, 400),
  ),
  m(
    "Gelatinous Cuboid",
    "Jelly Cube Bridge",
    undefined,
    d("Tongue Bone", 6.25),
    d("Gelatinous Chest", 263000),
    d("Gelatinous Cuboid Card", 50000),
    d("Propeller Cap", 6670000),
    t(DropTable20, 345),
  ),
  m(
    "Choccie",
    "Cocoa Tunnel",
    undefined,
    d("Crumpled Wrapper", 6.25),
    d("Chef Ring", 250000),
    d("Choccie Card", 50000),
    t(DropTable20, 323),
  ),
  m(
    "Biggole Wurm",
    "Standstill Plains",
    undefined,
    d("Smol Wurm", 6.25),
    d("Storage Chest 23", 1000000),
    d("Biggole Wurm Card", 50000),
    t(DropTable20, 303),
  ),
  m(
    "Clammie",
    "Shelled Shores",
    undefined,
    d("Empty Oyster Shell", 6.25),
    d("Pearler Shell", 50000),
    d("Clammie Card", 50000),
    t(DropTable21, 400),
  ),
  m(
    "Octodar",
    "The Untraveled Octopath",
    undefined,
    d("Wriggly Ball", 6.25),
    d("Octodar Card", 50000),
    d("Ergonomic DNA Splicer (Journeyman Recipe)", 3330000),
    t(DropTable21, 357),
  ),
  m(
    "Flombeige",
    "Flamboyant Bayou",
    undefined,
    d("Gel Chunk", 6.25),
    d("Gold Twine", 1000000),
    d("Flombeige Card", 50000),
    t(DropTable21, 333),
  ),
  m(
    "Stilted Seeker",
    "Enclave of Eyes",
    undefined,
    d("Condensed Zap", 6.25),
    d("Troll's Enclave Key", 15000),
    d("Stilted Seeker Card", 50000),
    t(DropTable21, 313),
  ),
  m(
    "Crystal Custard",
    "Hyperion Nebula",
    undefined,
    d("Crystal Custard Card", 125),
    d("Crystallin", 10),
    d("Quest Chungus (Special Talent Book)", 200),
    t(DropTable19, 1.67),
    t(DropTable20, 2),
    t(DropTable21, 2.5),
  ),

  m(
    "Mutated Mush",
    "Spaceway Raceway",
    undefined,
    d("Mutated Mush Card", 5),
    d("Troll's Enclave Key", 2),
    d("Dawn Stopwatch (Apprentice Recipe)", 50),
    d("Armor Upgrade Stone C", 25),
    d("Pet Egg", 1.67),
    d("Cooking Ladle", 1),
    d("Souped Lab Ring (Journeyman Recipe)", 125),
    t(DropTable13, 2),
  ),
  m(
    "Massive Troll",
    "Enclave of Eyes",
    undefined,
    d("Magma Geode", 1),
    d("Massive Troll Card", 250),
    d("Jagged Obol of Massive Trolling", 5000),
    d("Troll Scales", 7.69),
    t(DropTable19, 1),
    t(DropTable20, 1),
    t(DropTable21, 1),
  ),
  m(
    "Chaotic Troll",
    "Enclave of Eyes",
    undefined,
    d("Magma Geode", 1),
    d("Chaotic Troll Card", 500),
    d("Jagged Obol of Massive Trolling", 1250),
    d("Troll Scales", 3.33, 2),
    t(DropTable19, 1),
    t(DropTable20, 1),
    t(DropTable21, 1),
  ),
  m(
    "Blitzkrieg Troll",
    "Enclave of Eyes",
    undefined,
    d("Magma Geode", 1),
    d("Blitzkrieg Troll Card", 333),
    d("Jagged Obol of Massive Trolling", 143),
    d("Troll Scales", 2, 4),
    d("Cascading Scaled Cape of Krieg", 4000),
    d("Mystery Upgrade Stone II", 33.3),
    t(DropTable19, 1),
    t(DropTable20, 1),
    t(DropTable21, 1),
  ),

  m(
    "Suggma",
    "Naut Sake Perimeter",
    undefined,
    d("Suggma Ashes", 6.25),
    d("Royal Suggma Urn", 50000),
    d("Molten Core Knucklers (Adept Recipe)", 50000000),
    d("Suggma Card", 50000),
    t(DropTable25, 400),
  ),
  m(
    "Maccie",
    "Niagrilled Falls",
    undefined,
    d("Plated Crumbs", 6.67),
    d("Colossal Food Pouch (Adept Recipe)", 100000),
    d("Maccie Card", 50000),
    d("Talent IV Stamp", 333000),
    t(DropTable25, 357),
  ),
  m(
    "Mister Brightside",
    "The Killer Roundabout",
    undefined,
    d("Sundried Glass", 6.67),
    d("Mister Brightside Card", 50000),
    d("Colossal Matty Pouch (Adept Recipe)", 250000),
    t(DropTable25, 323),
  ),
  m(
    "Cheese Nub",
    "Cracker Jack Lake",
    undefined,
    d("Cheesy Crumbs", 7.14),
    d("Magma Core Headdress (Adept Recipe)", 1000000),
    d("Cheese Nub Card", 50000),
    d("Cheesy Chest", 990000),
    t(DropTable25, 294),
  ),
  m(
    "Stiltmole",
    "The Great Molehill",
    undefined,
    d("Stilt Pole", 7.14),
    d("Hampter", 50000),
    d("Magma Core Wavemaille (Adept Recipe)", 1670000),
    d("Stiltmole Card", 50000),
    t(DropTable25, 270),
  ),
  m(
    "Molti",
    "Erruption River",
    undefined,
    d("Meteorite", 6.25),
    d("Molti Card", 50000),
    d("Magma Core Battleskirt (Adept Recipe)", 2500000),
    t(DropTable26, 400),
  ),
  m(
    "Purgatory Stalker",
    "Mount Doomish",
    undefined,
    d("Shattered Skull", 6.25),
    d("Purgatory Stalker Card", 50000),
    d("Magma Core Lavarunners (Adept Recipe)", 5000000),
    t(DropTable26, 400),
  ),
  m(
    "Citringe",
    "OJ Bay",
    undefined,
    d("Orange Slice", 6.25),
    d("OJ Juice", 50000),
    d("Citringe Card", 50000),
    d("Magma Maul (Adept Recipe)", 1000000),
    t(DropTable26, 345),
  ),
  m(
    "Lampar",
    "Lampar Lake",
    undefined,
    d("Molten Lamp", 6.25),
    d("Lampar Card", 50000),
    d("Sediment Core Grunkler (Adept Recipe)", 1000000),
    d("Traffic Cone", 6670000),
    t(DropTable26, 323),
  ),
  m(
    "Fire Spirit",
    "Spitfire River",
    undefined,
    d("Spitfire", 6.25),
    d("Fire Spirit Card", 50000),
    d("Cattle Core Soothsayer Staff (Adept Recipe)", 1000000),
    t(DropTable26, 303),
  ),
  m(
    "Biggole Mole",
    "Miner Mole Outskirts",
    undefined,
    d("Hard Hat", 6.25),
    d("Kruk's Volcano Key", 75000),
    d("Biggole Mole Card", 50000),
    d("Coldseeker Bullet (Adept Recipe)", 2000000),
    t(DropTable26, 286),
  ),
  m(
    "Crawler",
    "Crawly Catacombs",
    undefined,
    d("Wormie Slices", 6.25),
    d("Kruk's Volcano Key", 50000),
    d("Crawler Card", 50000),
    t(DropTable27, 357),
  ),
  m(
    "Gloomie Mushroom",
    "The Hole",
    undefined,
    d("Gloomie Mushroom Card", 20000),
    d("Dragon Warrior Statue", 100000),
  ),
  m(
    "Tremor Wurm",
    "The Worm Nest",
    undefined,
    d("Mongo Worm Slices", 6.25),
    d("Kruk's Volcano Key", 25000),
    d("Tremor Wurm Card", 50000),
    d("Dementia Sword Stamp", 1000000),
    t(DropTable27, 286),
  ),
  m(
    "Crystal Capybara",
    "Smolderin' Plateau",
    undefined,
    d("Crystal Capybara Card", 125),
    d("Crystallin", 10),
    t(DropTable25, 3.33),
    t(DropTable26, 5),
    t(DropTable27, 5.88),
    t(DropTable28, 5.88),
  ),

  m(
    "Domeo Magmus",
    "The Killer Roundabout",
    undefined,
    d("Domeo Magmus Card", 1000),
    d("Shiny Bored Beanie (Master Recipe)", 1000),
    d("Magma Obol of Big Time Domeo", 3330),
    d("Divvy Slippers (Master Recipe)", 500),
    d("Kruk's Volcano Key", 2),
    d("Zero Point Stopwatch (Master Recipe)", 2000),
    d("Golden Cake", 20),
    t(DropTable13, 2),
  ),
  m(
    "Kattlekruk",
    "Kattlekruk's Volcano",
    undefined,
    d("Spirit Diamond", 1),
    d("Kruk Tooth", 25),
    d("Kattlekruk Card", 1250),
    d("Strung Tooth of the Divine", 100000),
    d("Molten Obol of Dead Divine", 20000),
    d("Armor Upgrade Stone SK", 20, 3),
    t(DropTable25, 1),
    t(DropTable26, 1),
    t(DropTable27, 1),
  ),
  m(
    "Chaotic Kattlekruk",
    "Kattlekruk's Volcano",
    undefined,
    d("Spirit Diamond", 1),
    d("Kruk Tooth", 10),
    d("Kruk Cavity Tooth", 100),
    d("Strung Tooth of the Divine", 28600),
    d("Molten Obol of Dead Divine", 4550),
    d("Tool Upgrade Stone SK", 20, 2),
    d("Chaotic Kattlekruk Card", 1250),
    t(DropTable25, 1),
    t(DropTable26, 1),
    t(DropTable27, 1),
  ),
  m(
    "Sacrilegious Kattlekruk",
    "Kattlekruk's Volcano",
    undefined,
    d("Spirit Diamond", 1),
    d("Kruk Tooth", 2.5, 2),
    d("Kruk Cavity Tooth", 12.5),
    d("Strung Tooth of the Divine", 2500),
    d("Molten Obol of Dead Divine", 714),
    d("Weapon Upgrade Stone SK", 20, 2),
    d("Helmet Upgrade Stone SK", 20),
    d("Sacrilegious Kattlekruk Card", 1250),
    d("Eternal Flames of The Divine", 3330),
    t(DropTable25, 1),
    t(DropTable26, 1),
    t(DropTable27, 1),
  ),

  m(
    "Sprout Spirit",
    "Gooble Goop Creek",
    undefined,
    d("Leafy Droplet", 6.25),
    d("Sprout Spirit Card", 40000),
    d("Pentastud Slapper (Master Recipe)", 50000000),
    d("Straw Hat", 2000000),
    d("Wig Bandana", 2940000),
    t(DropTable29, 400),
  ),
  m(
    "Ricecake",
    "Picnic Bridgeways",
    undefined,
    d("Rice Cake", 6.67),
    d("Stacked Rice Cake", 100000),
    d("Elegant Spear (Master Recipe)", 1670000),
    d("Charcoal Hat", 25000000),
    d("Ricecake Card", 50000),
    t(DropTable29, 357),
  ),
  m(
    "River Spirit",
    "Irrigation Station",
    undefined,
    d("Bamboo", 6.67),
    d("River Spirit Card", 66700),
    d("Pristine Longbow (Master Recipe)", 2000000),
    d("Funky Hat", 4330000),
    t(DropTable29, 323),
  ),
  m(
    "Baby Troll",
    "Troll Playground",
    undefined,
    d("Leafy Horn", 7.14),
    d("Baby Troll Card", 100000),
    d("Sparky Marble Staff (Master Recipe)", 2500000),
    d("Reinforced Headband", 6360000),
    d("Shogun Helmet", 9350000),
    t(DropTable29, 294),
  ),
  m(
    "Woodlin Spirit",
    "Edge of the Valley",
    undefined,
    d("Wooden Aortic Mass", 7.14),
    d("Woodlin Chest", 2000000),
    d("Gilded Headband", 13800000),
    d("Woodlin Spirit Card", 125000),
    t(DropTable29, 270),
  ),
  m(
    "Bamboo Spirit",
    "Bamboo Laboredge",
    undefined,
    d("Leafy Branch", 7.14),
    d("Bamboo Hat", 20200000),
    d("Bamboo Spirit Card", 167000),
    t(DropTable30, 400),
  ),
  m(
    "Lantern Spirit",
    "Lightway Path",
    undefined,
    d("Light Lantern", 7.14),
    d("Dark Lantern", 100000),
    d("Mittens of the Gods (Master Recipe)", 200000000),
    d("Festive Beast Mask", 29700000),
    d("Lantern Spirit Card", 200000),
    t(DropTable30, 400),
  ),
  m(
    "Mama Troll",
    "Troll Broodnest",
    undefined,
    d("Troll Flower", 7.69),
    d("Mama Troll Card", 333000),
    d("Drip of the Gods (Master Recipe)", 2940000),
    d("Heiress Headdress", 43700000),
    t(DropTable30, 345),
  ),
  m(
    "Leek Spirit",
    "Above the Clouds",
    undefined,
    d("Chopped Leek", 7.69),
    d("Leek Spirit Card", 500000),
    d("Tatters of the Gods (Master Recipe)", 4000000),
    d("Spirited Mane", 64300000),
    t(DropTable30, 323),
  ),
  m(
    "Ceramic Spirit",
    "Sleepy Skyline",
    undefined,
    d("Shattered Ceramic", 8.33),
    d("Ceramic Spirit Card", 1000000),
    d("Robe of the Gods (Master Recipe)", 4000000),
    d("Fiery Mane", 94600000),
    t(DropTable31, 303),
  ),
  m(
    "Skydoggie Spirit",
    "Dozey Dogpark",
    undefined,
    d("Eviscerated Chunk", 8.33),
    d("Massive Godbreaker (Master Recipe)", 4000000),
    d("Skydoggie Spirit Card", 1250000),
    d("Zeus Gon Fishin", 10000000),
    d("Potent Speed Potion", 1000, 3),
    d("Doublestring Godshooter (Master Recipe)", 4000000),
    d("Dumpling", 400, 5),
    d("Magnifique Godcaster (Master Recipe)", 4000000),
    t(DropTable31, 286),
  ),
  m(
    "Royal Egg",
    "Yolkrock Basin",
    undefined,
    d("Royal Yolk", 9.09),
    d("Fanned Blossomage", 205000000),
    d("Royal Egg Card", 1670000),
    t(DropTable32, 357),
  ),
  m(
    "Minichief Spirit",
    "Chieftain Stairway",
    undefined,
    d("Royal Fabric", 9.09),
    d("Minichief Spirit Card", 2000000),
    d("Crown of the Gods (Master Recipe)", 10000000),
    d("Dainty Brim", 301000000),
    t(DropTable32, 286),
  ),
  m(
    "Samurai Guardian",
    "Emperor's Castle Doorstep",
    undefined,
    d("Royal Headpiece", 10),
    d("Samurai Guardian Card", 2500000),
    d("Its Alright Celebration", 303000000),
    d("Guardian Mane", 139000000),
    t(DropTable32, 286),
  ),
  m(
    "Crystal Candalight",
    "Spirited Valley",
    undefined,
    d("Crystal Candalight Card", 500),
    d("Crystallin", 10),
    t(DropTable29, 3.33),
    t(DropTable30, 5.0),
    t(DropTable31, 5.88),
    t(DropTable32, 5.88),
    t(DropTable33, 5.88),
  ),

  m(
    "Demented Spiritlord",
    "Troll Broodnest",
    undefined,
    d("Demented Spiritlord Card", 1000),
    d("Demented Emperor Opal (Master Recipe)", 1250),
    d("Spiritlord Horn Chain", 2500),
    d("Golden Cake (Master Recipe)", 1250),
    d("Golden Cake", 10),
    t(DropTable13, 2),
  ),
];
