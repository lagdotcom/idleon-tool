import { getRecipeMaker, mkIQ as n } from "./tools";

// https://idleon.wiki/wiki/Smithing
const r = getRecipeMaker("smithing");
export const smithingTab4 = [
  r(
    "Lustre Veil",
    n("Void Imperium Helmet"),
    n("Skelefish", 80000),
    n("Lustre Bar", 2500),
  ),
  r(
    "Lustre Chestplate",
    n("Void Imperium Platebody"),
    n("Purple Mush Cap", 100000),
    n("Lustre Bar", 1200),
  ),
  r(
    "Lustre Scales",
    n("Void Imperium Shardshins"),
    n("Purple Screw", 60000),
    n("Lustre Bar", 1600),
  ),
  r(
    "Lustre Shieldshoe",
    n("Void Imperium Kicks"),
    n("TV Remote", 120000),
    n("Lustre Bar", 2000),
  ),

  r(
    "Knuckle Sabers",
    n("Eclectic Ordeal"),
    n("Thingymabob", 50000),
    n("Dioxide Synthesis", 2000),
  ),
  r(
    "Slimsharp Fin",
    n("Deuscythe"),
    n("Alien Hive Chunk", 90000),
    n("Dioxide Synthesis", 500),
  ),
  r(
    "Shardsure Leif",
    n("Blackhole Bow"),
    n("Skelefish", 110000),
    n("Dioxide Synthesis", 500),
  ),
  r(
    "Skullslip Hallow",
    n("Grey Gatsby"),
    n("Bunny", 50000),
    n("Dioxide Synthesis", 500),
  ),

  r(
    "Lustre Pickaxe",
    n("Void Imperium Pik"),
    n("Lustre Bar", 1000),
    n("Dioxide Synthesis", 600),
  ),
  r(
    "Massive Mining Pouch",
    n("Lustre Ore", 110000),
    n("Dioxide Synthesis", 400),
  ),
  r(
    "Lustre Logger",
    n("Void Imperium Axe"),
    n("Alien Hive Chunk", 110000),
    n("Dioxide Synthesis", 600),
  ),
  r(
    "Massive Choppin Pouch",
    n("Alien Hive Chunk", 110000),
    n("Dioxide Synthesis", 400),
  ),

  r(
    "Lustre Rod",
    n("Skelefish", 90000),
    n("Void Imperium Rod"),
    n("Dioxide Synthesis", 750),
  ),
  r("Massive Fish Pouch", n("Skelefish", 120000), n("Dioxide Synthesis", 500)),
  r(
    "Lustre Netting",
    n("Worker Bee", 130000),
    n("Void Imperium Net"),
    n("Dioxide Synthesis", 750),
  ),
  r("Massive Bug Pouch", n("Worker Bee", 110000), n("Dioxide Synthesis", 500)),

  r(
    "Meaty Traps",
    n("Jade Scarab", 10),
    n("Steel Traps"),
    n("Dioxide Synthesis", 1000),
  ),
  r("Massive Critter Pouch", n("Honker", 100000), n("Dioxide Synthesis", 1000)),
  r(
    "Glauss Skull",
    n("Frigid Soul", 40000),
    n("Manifested Skull"),
    n("Dioxide Synthesis", 1000),
  ),
  r(
    "Massive Soul Pouch",
    n("Frigid Soul", 90000),
    n("Dioxide Synthesis", 1000),
  ),

  r(
    "Rough Rockers",
    n("Cavern Trekkers"),
    n("Lustre Shieldshoe"),
    n("Copper Ore", 300000),
  ),
  r(
    "Fiberous Footings",
    n("Logger Heels"),
    n("Lustre Shieldshoe"),
    n("Oak Logs", 300000),
  ),
  r(
    "Deep Sea Galoshes",
    n("Angler Boots"),
    n("Lustre Shieldshoe"),
    n("Goldfish", 300000),
  ),
  r(
    "Spaggy Westerados",
    n("Cavern Trekkers"),
    n("Lustre Shieldshoe"),
    n("Fly", 300000),
  ),

  r("Chef Hat Shoes", n("Cooking Clogs", 4), n("Lustre Shieldshoe")),
  r("Sheek Scrubs", n("Laboratory Scrubs", 4), n("Lustre Shieldshoe")),
  r(
    "Massive Food Pouch",
    n("Sheepie Dairy", 175000),
    n("Magic Meatloaf", 30),
    n("Lost Batteries", 10),
    n("Dioxide Synthesis", 1000),
  ),
  r(
    "Massive Materials Pouch",
    n("Genie Lamp", 130000),
    n("Lost Batteries", 10),
    n("Dioxide Synthesis", 1000),
  ),

  r(
    "Diabolical Headcase",
    n("Lustre Veil"),
    n("Blobfish", 600000),
    n("Starfire Bar", 10000),
    n("Nullo Salt", 800),
  ),
  r(
    "Diabolical Abdomen",
    n("Lustre Chestplate"),
    n("Cubed Logs", 400000),
    n("Starfire Bar", 25000),
    n("Nullo Salt", 400),
  ),
  r(
    "Diabolical Trimed Leg Guards",
    n("Lustre Scales"),
    n("Fairy", 450000),
    n("Starfire Bar", 4000),
    n("Nullo Salt", 600),
  ),
  r(
    "Diabolical Toe Tips",
    n("Lustre Shieldshoe"),
    n("Manta Ray", 500000),
    n("Starfire Bar", 5000),
    n("Nullo Salt", 700),
  ),

  r(
    "Diabolical Gauntlet",
    n("Knuckle Sabers"),
    n("Starfire Bar", 500000),
    n("Nullo Salt", 5000),
  ),
  r(
    "Diabolical Flesh Ripper",
    n("Slimsharp Fin"),
    n("Kraken", 200000),
    n("Starfire Bar", 3000),
    n("Nullo Salt", 750),
  ),
  r(
    "Diabolical Continuit",
    n("Shardsure Leif"),
    n("Voodofish", 10),
    n("Starfire Bar", 3000),
    n("Nullo Salt", 750),
  ),
  r(
    "Diabolical Opticule",
    n("Skullslip Hallow"),
    n("Squishy Soul", 15000),
    n("Starfire Bar", 3000),
    n("Nullo Salt", 800),
  ),

  r(
    "Starfire Pickaxe",
    n("Lustre Pickaxe"),
    n("Lustre Bar", 5000),
    n("Pearler Shell", 20),
  ),
  r(
    "Volumetric Mining Pouch",
    n("Starfire Ore", 300000),
    n("Pearler Shell", 4),
    n("Purple Salt", 800),
  ),
  r(
    "Starfire Hatchet",
    n("Lustre Logger"),
    n("Cubed Logs", 100000),
    n("Pearler Shell", 20),
  ),
  r(
    "Volumetric Chopping Pouch",
    n("Cubed Logs", 300000),
    n("Pearler Shell", 4),
    n("Purple Salt", 800),
  ),

  // TODO 41-50
  r(
    "Starfire Rod",
    n("Manta Ray", 40000),
    n("Pearler Shell", 20),
    n("Lustre Rod"),
  ),
  r("Volumetric Fish Pouch", n("Manta Ray", 300000), n("Nullo Salt", 600)),
  r(
    "Starfire Trim Netting",
    n("Fairy", 100000),
    n("Pearler Shell", 20),
    n("Lustre Netting"),
  ),
  r("Volumetric Bug Pouch", n("Fairy", 300000), n("Nullo Salt", 600)),

  r("Royal Traps", n("Blobfish", 100000), n("Meaty Traps")),
  r("Volumetric Critta Pouch", n("Blobfish", 300000), n("Nullo Salt", 800)),
  r("Luciferian Skull", n("Squishy Soul", 60000), n("Glauss Skull")),
  r("Volumetric Soul Pouch", n("Squishy Soul", 300000), n("Nullo Salt", 800)),

  r(
    "Volumetric Food Pouch",
    n("Spicy Space Ribs", 500000),
    n("Nullo Salt", 800),
    n("Pearler Shell", 25),
  ),
  r(
    "Volumetric Matty Pouch",
    n("Condensed Zap", 500000),
    n("Pearler Shell", 25),
    n("Nullo Salt", 800),
  ),
  // TODO 51
  r(
    "Anvil Tab 5",
    n("Starfire Bar", 5000),
    n("Cubed Logs", 200000),
    n("Fairy", 150000),
    n("Nullo Salt", 600),
  ),

  r(
    "Peeper Pouch",
    n("Sand Shark", 10000),
    n("Worker Bee", 20000),
    n("Alien Hive Chunk", 20000),
    n("Squishy Soul", 5000),
  ),
  r("Bolstered DNA Splicer", n("Ghost", 100), n("Sappy DNA Splicer", 5)),
  r(
    "Double Barreled DNA Splicer",
    n("Ice Age 3", 30),
    n("Bolstered DNA Splicer"),
  ),
  r(
    "Ergonomic DNA Splicer",
    n("Lost Batteries", 200),
    n("Double Barreled DNA Splicer"),
  ),

  r(
    "Souped Lab Ring",
    n("Lab Ring", 5),
    n("Purple Mush Cap", 100000),
    n("Chef Ring"),
  ),
  // TODO 58
  // TODO 59
  // TODO 60

  r(
    "Thin Veil of The Troll",
    n("Troll Scales", 50),
    n("Gold Twine", 3),
    n("Starfire Bar", 20000),
    n("Nullo Salt", 4000),
  ),
  r(
    "Trollish Garb",
    n("Troll Scales", 25),
    n("Pearler Shell", 25),
    n("Starfire Bar", 10000),
    n("Nullo Salt", 2800),
  ),
  r(
    "Twisted Scales",
    n("Troll Scales", 15),
    n("Condensed Zap", 333333),
    n("Starfire Bar", 5000),
    n("Nullo Salt", 1600),
  ),
  r(
    "Soles of the Troll",
    n("Cooking Clogs", 8),
    n("Troll Scales", 10),
    n("Starfire Bar", 3000),
    n("Nullo Salt", 750),
  ),
];
