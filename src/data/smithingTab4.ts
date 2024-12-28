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

  // TODO 21-64
];
