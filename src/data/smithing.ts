import { getRecipeMaker, mkIQ as n } from "./tools";

// https://idleon.wiki/wiki/Smithing

const r = getRecipeMaker("smithing");
export const smithingRecipes = [
  // Tab 1
  r("Boxing Gloves", n("Crimson String"), n("Cue Tape")),
  r("Wooden Spear", n("Copper Bar", 5)),
  r("Wooden Bow", n("Spore Cap", 10)),
  r("Gnarled Wand", n("Oak Logs", 15)),

  r("Farmer Brim", n("Spore Cap", 4)),
  r("Orange Tee", n("Copper Bar")),
  r("Torn Jeans", n("Frog Leg", 6), n("Copper Bar", 3)),
  r("Flip Flops", n("Bean Slices", 12), n("Grass Leaf", 5)),

  r("Copper Pickaxe", n("Copper Bar", 10)),
  r("Cramped Mining Pouch", n("Copper Ore", 120)),
  r("Copper Chopper", n("Oak Logs", 25), n("Thread", 5)),
  r("Cramped Choppin Pouch", n("Oak Logs", 150), n("Trusty Nails", 30)),

  r("Leather Cap", n("Frog Leg", 15), n("Oak Logs", 10), n("Thread", 10)),
  r(
    "The Stingers",
    n("Copper Bar", 20),
    n("Oak Logs", 75),
    n("Trusty Nails", 20),
  ),
  r(
    "Cramped Food Pouch",
    n("Nomwich", 75),
    n("Hot Dog", 25),
    n("Oak Logs", 60),
  ),
  r(
    "Cramped Material Pouch",
    n("Trusty Nails", 80),
    n("Frog Leg", 40),
    n("Bean Slices", 30),
  ),

  r("Copper Helmet", n("Copper Bar", 20), n("Bean Slices", 40)),
  r("Copper Platebody", n("Copper Bar", 25), n("Trusty Nails", 120)),
  r("Copper Platelegs", n("Copper Bar", 30), n("Bleach Logs", 150)),
  r("Copper Boots", n("Copper Bar", 75)),

  r("Militia Helm", n("Copper Helmet"), n("Iron Bar", 15), n("Copper Ore", 80)),
  r("Thief Hood", n("Copper Helmet"), n("Iron Bar", 15), n("Thread", 40)),
  r("Top Hat", n("Copper Helmet"), n("Iron Bar", 15), n("Oak Logs", 150)),
  r("Birthday Hat", n("Copper Helmet"), n("Iron Bar", 150)),

  r("Steel Axe", n("Slime Sludge", 125), n("Boring Brick", 125)),
  r("Birch Longbow", n("Slime Sludge", 125), n("Bleach Logs", 250)),
  r("Quarterstaff", n("Slime Sludge", 125), n("Copper Bar", 100)),
  r("Copper Band", n("Copper Bar", 300)),

  r("Iron Pickaxe", n("Iron Bar", 70), n("Carrot Cube", 150)),
  r("Small Mining Pouch", n("Iron Ore", 700)),
  r("Iron Hatchet", n("Jungle Logs", 200), n("Boring Brick", 100)),
  r("Small Choppin Pouch", n("Bleach Logs", 800)),

  r("Iron Helmet", n("Iron Bar", 125), n("Glublin Ear", 300)),
  r("Iron Platebody", n("Iron Bar", 150), n("Jungle Logs", 600)),
  r("Iron Platelegs", n("Iron Bar", 170), n("Boring Brick", 225)),
  r(
    "Anvil Tab 2",
    n("Iron Bar", 250),
    n("Chain Link", 200),
    n("Forest Fibres", 400),
    n("Bullfrog Horn", 250),
  ),

  r("Blue Tee", n("Orange Tee"), n("Spore Cap", 25), n("Oak Logs", 50)),
  r(
    "Sleek Shank",
    n("Wooden Bow"),
    n("Gnarled Wand"),
    n("Wooden Spear", 2),
    n("Thread", 300),
  ),
  r(
    "Iron Boots",
    n("Copper Boots"),
    n("Trusty Nails", 500),
    n("Iron Bar", 125),
  ),
  r("Steel Band", n("Iron Bar", 600)),

  r(
    "Purple Tupacband",
    n("Bleach Logs", 100),
    n("Iron Ore", 50),
    n("Crude Oil", 60),
  ),
  r("Icing Ironbite", n("Iron Ore", 5), n("Small Mana Potion", 2)),
  r("Saucy Logfries", n("Jungle Logs", 6), n("Small Life Potion", 3)),
  r(
    "Goo Galoshes",
    n("Copper Boots"),
    n("Slime Sludge", 600),
    n("Jungle Logs", 1000),
  ),

  r("Fur Shirt", n("Glublin Ear", 500), n("Iron Bar", 500)),
  r("Hide Shirt", n("Copper Platebody"), n("Steel Axe"), n("Bleach Logs", 325)),
  r("Eco Friendly Oil", n("Crude Oil"), n("Grass Leaf")),
  r("Dooble Goopi", n("Copper Band"), n("Steel Band"), n("Slime Sludge", 1000)),

  r(
    "Bleached Designer Wode Patch Pants",
    n("Torn Jeans", 3),
    n("Plank", 275),
    n("Bleach Logs", 700),
  ),
  r(
    "Dirty Coal Miner Baggy Soot Pants",
    n("Torn Jeans", 3),
    n("Iron Ore", 200),
  ),
  r("Peanut", n("Hot Dog", 2), n("Copper Ore"), n("Bleach Logs")),
  r("Golden Peanut", n("Peanut", 100), n("Gold Bar", 50)),

  r(
    "Blunderbag",
    n("Spore Tee", 2),
    n("Green Headband", 2),
    n("Spore Cap", 150),
  ),
  r(
    "Purple Tee",
    n("Orange Tee"),
    n("Red Spore Cap", 40),
    n("Bleach Logs", 100),
  ),
  r("Green Tee", n("Spore Tee"), n("Orange Tee"), n("Thread", 150)),
  r(
    "Black Tee",
    n("Orange Tee", 5),
    n("Blue Tee", 2),
    n("Purple Tee", 2),
    n("Green Tee", 2),
  ),

  r(
    "Blunderhills NPC Completion Token",
    n("Easy Blunderhills NPC Token"),
    n("Med Blunderhills NPC Token"),
    n("Hard Blunderhills NPC Token"),
  ),
  r(
    "Blunder Skills Completion Token",
    n("Amarok Helmet"),
    n("Platinum Bar", 1000),
    n("Veiny Logs", 2000),
  ),
  r(
    "Blunderhills Misc Completion Token",
    n("Carrot Launcher"),
    n("Golden Peanut", 30),
    n("Golden Plop", 12),
    n("Bolt Cutters"),
  ),
  r("Acorn Topper", n("Acorn", 25000), n("Woodular Circle", 15)),

  r(
    "Easy Blunderhills NPC Token",
    n("Woodsman Token"),
    n("Glumlee Token"),
    n("Stiltzcho Token"),
    n("Funguy Token"),
  ),
  r(
    "Med Blunderhills NPC Token",
    n("Krunk Token"),
    n("Tiki Chief Token"),
    n("Dog Bone Token"),
    n("Papua Piggea Token"),
  ),
  r(
    "Hard Blunderhills NPC Token",
    n("Picnic Token"),
    n("TP Pete Token"),
    n("Sproutinald Token"),
    n("Dazey Token"),
  ),
  r("Serrated Rex Ring", n("Rex Ring"), n("Iron Bar", 1000)),

  r(
    "Amarok Helmet",
    n("Amarok Slab", 20),
    n("Forest Fibres", 2500),
    n("Woodular Circle", 5),
  ),
  r(
    "Amarok Bodyplate",
    n("Amarok Slab", 10),
    n("Iron Bar", 300),
    n("Corn Kernels", 600),
  ),
  r(
    "Amarok Hinds",
    n("Amarok Slab", 6),
    n("Chain Link", 300),
    n("Bullfrog Horn", 500),
  ),
  r("Amarok Paws", n("Amarok Slab", 5), n("Iron Boots"), n("Grass Leaf", 125)),

  r(
    "Fishing Overalls",
    n("Bleached Designer Wode Patch Pants", 2),
    n("Goldfish", 500),
  ),
  r(
    "Bandito Pantaloon",
    n("Dirty Coal Miner Baggy Soot Pants", 2),
    n("Fly", 500),
  ),
  // TODO 71
  r(
    "Chaotic Amarok Pendant",
    n("Chaotic Amarok Slab", 4),
    n("Amarok Slab", 10),
    n("Distilled Water", 25),
  ),

  r("Copper Fish Rod", n("Copper Bar", 200), n("Goldfish", 180)),
  r("Cramped Fish Pouch", n("Goldfish", 180)),
  r("Copper Netted Net", n("Jungle Logs", 500), n("Fly", 400)),
  r("Cramped Bug Pouch", n("Fly", 180)),

  r(
    "Iron Fishing Rod",
    n("Iron Bar", 300),
    n("Hermit Can", 650),
    n("Distilled Water", 3),
  ),
  r("Small Fish Pouch", n("Hermit Can", 425), n("Distilled Water", 2)),
  r(
    "Reinforced Net",
    n("Forest Fibres", 800),
    n("Butterfly", 850),
    n("Distilled Water", 3),
  ),
  r("Small Bug Pouch", n("Butterfly", 425), n("Distilled Water", 2)),

  r("Silkskin Traps", n("Poison Froge"), n("Redox Salts", 5)),
  r("Small Critter Pouch", n("Froge", 200), n("Redox Salts", 3)),
  r("Ceramic Skull", n("Forest Soul", 250), n("Redox Salts", 5)),
  r("Small Soul Pouch", n("Forest Soul", 200), n("Redox Salts", 3)),

  // Tab 2
  r("Gold Helmet", n("Copper Helmet"), n("Fly", 2000), n("Gold Bar", 200)),
  r(
    "Gold Platebody",
    n("Copper Platebody"),
    n("Pocket Sand", 1500),
    n("Gold Bar", 250),
  ),
  r(
    "Gold Platelegs",
    n("Copper Platelegs"),
    n("Goldfish", 500),
    n("Gold Bar", 300),
  ),
  r("Gold Boots", n("Iron Boots"), n("Gold Bar", 600), n("Distilled Water", 4)),

  r(
    "Bandage Wraps",
    n("The Stingers", 3),
    n("Cue Tape", 5000),
    n("Potty Rolls", 2000),
  ),
  r(
    "Royal Bayonet",
    n("Forest Fibres", 1250),
    n("Steel Axe"),
    n("Distilled Water", 8),
  ),
  r(
    "Spiked Menace",
    n("Birch Longbow"),
    n("Gold Bar", 250),
    n("Distilled Water", 8),
  ),
  r(
    "Starlight",
    n("Quarterstaff"),
    n("Chain Link", 1000),
    n("Distilled Water", 8),
  ),

  r(
    "Gold Pickaxe",
    n("Iron Pickaxe"),
    n("Megalodon Tooth", 2500),
    n("Gold Bar", 400),
  ),
  r("Average Mining Pouch", n("Gold Ore", 2000)),
  r(
    "Golden Axe",
    n("Iron Hatchet"),
    n("Golden Dubloon", 5),
    n("Crabby Cakey", 2000),
  ),
  r("Average Choppin Pouch", n("Forest Fibres", 2000)),

  r(
    "Gold Fishing Rod",
    n("Hermit Can", 2500),
    n("Leather Hide", 1000),
    n("Iron Fishing Rod"),
  ),
  r("Average Fish Pouch", n("Hermit Can", 2000)),
  r(
    "Golden Net",
    n("Golden Dubloon", 5),
    n("Butterfly", 2500),
    n("Reinforced Net"),
  ),
  r("Average Bug Pouch", n("Butterfly", 2000)),

  r(
    "Defenders Dignity",
    n("Goldfish", 10000),
    n("Golden Plop", 4),
    n("Distilled Water", 15),
  ),
  r(
    "Strung Bludgeon",
    n("Sleek Shank"),
    n("Glass Shard", 4),
    n("Distilled Water", 20),
  ),
  r(
    "Average Food Pouch",
    n("Meat Pie", 400),
    n("Icing Ironbite", 700),
    n("Saucy Logfries", 700),
  ),
  r("Average Material Pouch", n("Glass Shard"), n("Chain Link", 1700)),

  r(
    "Platinum Helmet",
    n("Iron Helmet"),
    n("Jellyfish", 2250),
    n("Platinum Bar", 750),
  ),
  r(
    "Platinum Platbody",
    n("Iron Platebody"),
    n("Potato Remains", 5000),
    n("Platinum Bar", 1000),
  ),
  r(
    "Platinum Shins",
    n("Iron Platelegs"),
    n("Sentient Cereal", 5000),
    n("Platinum Bar", 1250),
  ),
  r(
    "Platinum Boots",
    n("Gold Boots"),
    n("Tropilogs", 7000),
    n("Jellyfish", 3000),
  ),

  r("Polished Bludgeon", n("Strung Bludgeon"), n("Distilled Water", 25)),
  r(
    "Enforced Slasher",
    n("Nuget Cake", 3),
    n("Leather Hide", 2500),
    n("Royal Bayonet"),
  ),
  r(
    "Pharaoh Bow",
    n("Spiked Menace"),
    n("Woodular Circle", 3),
    n("Bloach", 1400),
  ),
  r("Crows Nest", n("Starlight"), n("Golden Plop", 3), n("Fruitfly", 4000)),

  r(
    "Platinum Pickaxe",
    n("Gold Pickaxe"),
    n("Platinum Bar", 800),
    n("Pincer Arm", 10500),
  ),
  r("Sizable Mining Pouch", n("Platinum Ore", 7500)),
  r(
    "Plat Hatchet",
    n("Golden Axe"),
    n("Tropilogs", 6500),
    n("Chain Link", 5000),
  ),
  r("Sizable Choppin Pouch", n("Tropilogs", 7500)),

  r(
    "Plat Fishing Rod",
    n("Bloach", 2000),
    n("Platinum Bar", 800),
    n("Gold Fishing Rod"),
  ),
  r("Sizable Fish Pouch", n("Bloach", 2500), n("Goldfish", 5000)),
  r("Platinet", n("Fruitfly", 7000), n("Platinum Ore", 3000), n("Golden Net")),
  r("Sizable Bug Pouch", n("Fruitfly", 7500)),

  r("Sizable Food Pouch", n("Golden Meat Pie", 9), n("Nuget Cake", 4)),
  r("Sizable Materials Pouch", n("Golden Plop", 3), n("Woodular Circle", 4)),
  // TODO 39
  r(
    "Anvil Tab 3",
    n("Platinum Bar", 2000),
    n("Bloach", 2000),
    n("Fruitfly", 2000),
    n("High Steaks", 1500),
  ),

  r(
    "Empty Box",
    n("Hermit Can", 250),
    n("Megalodon Tooth", 400),
    n("Distilled Water", 4),
  ),
  r(
    "Googley Eyes",
    n("Woodular Circle", 2),
    n("Distilled Water", 5),
    n("Capitalist Case"),
  ),
  r("Bullet", n("Forest Fibres", 10), n("Fly", 10)),
  r("FMJ Bullet", n("Gold Ore", 15), n("Bullet", 2)),

  r(
    "Nuget Cake Fedora",
    n("Nuget Cake", 5),
    n("Distilled Water", 20),
    n("Googley Eyes"),
  ),
  r("Viking Cap", n("Militia Helm"), n("Gold Bar", 400), n("Glass Shard", 2)),
  r("Sleek Coif", n("Thief Hood"), n("Tropilogs", 2000), n("Glass Shard", 2)),
  r("Witch Hat", n("Top Hat"), n("Corn Kernels", 4000), n("Glass Shard", 2)),

  // TODO 49
  r(
    "Studded Hide",
    n("Hide Shirt"),
    n("Megalodon Tooth", 4000),
    n("Nuget Cake"),
  ),
  r("Feral Leathering", n("Fur Shirt"), n("Stick", 3000), n("Nuget Cake")),
  r(
    "Furled Robes",
    n("Tattered Cloth"),
    n("Leather Hide", 1500),
    n("Nuget Cake"),
  ),

  r(
    "Cavern Trekkers",
    n("Gold Boots"),
    n("Distilled Water", 9),
    n("Copper Ore", 1500),
    n("Iron Ore", 1200),
  ),
  r(
    "Angler Boots",
    n("Gold Boots"),
    n("Distilled Water", 9),
    n("Goldfish", 1250),
    n("Hermit Can", 1000),
  ),
  r(
    "Bandito Boots",
    n("Gold Boots"),
    n("Distilled Water", 9),
    n("Fly", 2000),
    n("Butterfly", 1250),
  ),
  r(
    "Logger Heels",
    n("Gold Boots"),
    n("Distilled Water", 9),
    n("Jungle Logs", 1600),
    n("Forest Fibres", 1000),
  ),

  r("Slurpin Helm", n("Hermit Can", 5), n("Average Strength Potion", 2)),
  r("Buttered Toasted Butter", n("Butterfly", 5), n("Kebab Sticks")),
  r("Dootjat Eye", n("Silver Antique"), n("Gold Bar", 80), n("Ghost", 5)),
  r(
    "Sandy Satchel",
    n("Golden Plop"),
    n("Snakeskinventory Bag"),
    n("Pocket Sand", 777),
  ),

  r(
    "Efaunt Helmet",
    n("Trimmed Rune Platelegs"),
    n("Ripped Tunic", 20),
    n("Armor Upgrade Stone C", 2),
    n("Dootjat Eye", 3),
  ),
  r(
    "Efaunt Ribcage",
    n("Ripped Tunic", 10),
    n("Midnight Cookie", 10),
    n("Distilled Water", 25),
  ),
  r(
    "Efaunt Hipilium",
    n("Ripped Tunic", 7),
    n("Minuteglass", 3),
    n("Distilled Water", 25),
  ),
  r(
    "Efaunts Broken Ankles",
    n("Platinum Boots"),
    n("Ripped Tunic", 5),
    n("Nuget Cake", 3),
  ),

  r(
    "Efaunt Trunculus",
    n("Bandage Wraps"),
    n("Pharaoh Bow"),
    n("Ribbed Tunic", 4),
    n("Ripped Tunic", 15),
  ),
  r(
    "Protectors Pride",
    n("Defenders Dignity"),
    n("Trimmed Rune Platelegs"),
    n("Distilled Water", 35),
  ),
  r("Skullfish Pendant", n("Fishhead Pendant"), n("Distilled Water", 60)),
  // TODO 68

  r("Wooden Traps", n("Mutant Crabbo", 2), n("Redox Salts", 20)),
  r("Sizable Critter Pouch", n("Crabbo", 1000), n("Redox Salts", 15)),
  r("Horned Skull", n("Dune Soul", 1200), n("Redox Salts", 25)),
  r("Sizable Soul Pouch", n("Dune Soul", 1500), n("Redox Salts", 20)),

  r(
    "Yumyum Desert NPC Completion Token",
    n("Easy Yumyum Dez NPC Token"),
    n("Med Yumyum Dez NPC Token"),
    n("Hard Yumyum Dez NPC Token"),
  ),
  r(
    "Yumyum Skills Completion Token",
    n("Bloach", 4000),
    n("Fruitfly", 8000),
    n("Dense Water", 50),
  ),
  r(
    "Yumyum Misc Completion Token",
    n("Efaunt Helmet"),
    n("Fuscismatia"),
    n("Minuteglass", 13),
    n("Ghost", 100),
  ),
  r(
    "Star Talent Reset Potion",
    n("Talent Point Reset Fragment", 25),
    n("Distilled Water", 5),
  ),

  r(
    "Easy Yumyum Dez NPC Token",
    n("Bandit Bob Token"),
    n("Snake Jar Token"),
    n("Whattso Token"),
    n("Cowbo Jones Token"),
  ),
  r(
    "Med Yumyum Dez NPC Token",
    n("Carpetiem Token"),
    n("Goldric Token"),
    n("Fishpaste Token"),
    n("Cattleprod Token"),
  ),
  r(
    "Hard Yumyum Dez NPC Token",
    n("Loominadi Token"),
    n("Djonnut Token"),
    n("Scubidew Token"),
    n("Wellington Token"),
  ),
  // TODO 80
];
