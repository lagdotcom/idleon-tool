import { getRecipeMaker, mkIQ as n } from "./tools";

// https://idleon.wiki/wiki/Smithing
const r = getRecipeMaker("smithing");
export const smithingTab2 = [
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
