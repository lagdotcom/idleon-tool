import { getRecipeMaker, mkIQ as n } from "./tools";

// https://idleon.wiki/wiki/Smithing
const r = getRecipeMaker("smithing");
export const smithingTab3 = [
  r("Dementia Helmet", n("Froge", 5000), n("Dementia Bar", 300)),
  r("Dementia Body", n("Forest Soul", 1000), n("Dementia Bar", 350)),
  r("Dementia Shins", n("Floof Ploof", 8000), n("Dementia Bar", 400)),
  r("Dementia Boots", n("Poison Froge", 3), n("Dementia Bar", 500)),

  r("Uninflated Glove", n("Bandage Wraps", 2), n("Melty Cube", 70000)),
  r(
    "The Ice Breaker",
    n("Enforced Slasher"),
    n("Melty Cube", 25000),
    n("Redox Salts", 150),
  ),
  r(
    "Blizzard Bow",
    n("Pharaoh Bow"),
    n("Forest Soul", 7000),
    n("Redox Salts", 150),
  ),
  r(
    "Spriggly Storm",
    n("Crows Nest"),
    n("Tundra Logs", 10000),
    n("Redox Salts", 150),
  ),

  r(
    "Dementia Pickaxe",
    n("Platinum Pickaxe"),
    n("Dementia Bar", 275),
    n("Moustache Comb", 15000),
  ),
  r("Big Mining Pouch", n("Dementia Ore", 15000)),
  r(
    "Dementia Dicer",
    n("Plat Hatchet"),
    n("Tundra Logs", 15000),
    n("Redox Salts", 50),
  ),
  r("Big Choppin Pouch", n("Tundra Logs", 20000)),

  r(
    "Dementia Rod for Fishing",
    n("Dementia Bar", 300),
    n("Redox Salts", 50),
    n("Plat Fishing Rod"),
  ),
  r("Big Fish Pouch", n("Crescent Scorpie", 4), n("Redox Salts", 50)),
  r(
    "Dementia Net",
    n("Mosquisnow", 15000),
    n("Redox Salts", 50),
    n("Platinet"),
  ),
  r("Big Bug Pouch", n("Mosquisnow", 10000)),

  r(
    "Natural Traps",
    n("Nakeo Moleo", 5),
    n("Redox Salts", 50),
    n("Wooden Traps"),
  ),
  r("Big Critter Pouch", n("Mousey", 15000)),
  r(
    "Prickle Skull",
    n("Rooted Soul", 7000),
    n("Redox Salts", 50),
    n("Horned Skull"),
  ),
  r("Big Soul Pouch", n("Rooted Soul", 10000)),

  r(
    "Midnight Stopwatch",
    n("Silver Stopwatch"),
    n("Midnight Cookie", 30),
    n("Dense Water", 20),
    n("Spontaneity Salts", 400),
  ),
  r(
    "Dawn Stopwatch",
    n("Silver Stopwatch"),
    n("BobGoldPickle Chain"),
    n("Dense Water", 20),
    n("Spontaneity Salts", 400),
  ),
  r(
    "Big Food Pouch",
    n("Slurpin Herm", 1500),
    n("Buttered Toasted Butter", 1500),
    n("Yeti Ham", 10000),
  ),
  r("Big Materials Pouch", n("Sticky Stick", 15000), n("Ice Age 3", 3)),

  r(
    "Void Imperium Helmet",
    n("Dementia Helmet"),
    n("Spontaneity Salts", 500),
    n("Void Bar", 1000),
    n("Dense Water", 5),
  ),
  r(
    "Void Imperium Platebody",
    n("Dementia Body"),
    n("Audio Cord", 75000),
    n("Void Bar", 500),
    n("Dense Water", 4),
  ),
  r(
    "Void Imperium Shardshins",
    n("Dementia Shins"),
    n("Wispy Lumber", 75000),
    n("Void Bar", 650),
    n("Dense Water", 4),
  ),
  r(
    "Void Imperium Kicks",
    n("Dementia Boots"),
    n("Flycicle", 60000),
    n("Void Bar", 725),
    n("Dense Water", 4),
  ),

  r(
    "Eclectic Ordeal",
    n("Yellow Snowflake", 100),
    n("Minervowl", 50),
    n("Dootjat Eye", 10),
    n("Dense Water", 15),
  ),
  r(
    "Deuscythe",
    n("The Ice Breaker"),
    n("Black Lense", 10),
    n("Eternal Lord of The Undying Ember", 15),
    n("Dense Water", 15),
  ),
  r(
    "Blackhole Bow",
    n("Blizzard Bow"),
    n("Black Lense", 4),
    n("Spontaneity Salts", 350),
    n("Dense Water", 7),
  ),
  r(
    "Grey Gatsby",
    n("Spriggly Storm"),
    n("Black Lense", 4),
    n("Frigid Soul", 5000),
    n("Dense Water", 7),
  ),

  r(
    "Void Imperium Pik",
    n("Dementia Pickaxe"),
    n("Void Bar", 400),
    n("Dense Water", 5),
  ),
  r("Large Mining Pouch", n("Void Ore", 40000)),
  r(
    "Void Imperium Axe",
    n("Dementia Dicer"),
    n("Wispy Lumber", 50000),
    n("Dense Water", 5),
  ),
  r("Large Choppin Pouch", n("Wispy Lumber", 30000)),

  r(
    "Void Imperium Rod",
    n("Spontaneity Salts", 200),
    n("Minervowl", 3),
    n("Dementia Rod for Fishing"),
    n("Dense Water", 5),
  ),
  r("Large Fish Pouch", n("Bloach", 40000)),
  r(
    "Void Imperium Net",
    n("Flycicle", 50000),
    n("Dementia Net"),
    n("Dense Water", 5),
  ),
  r("Large Bug Pouch", n("Flycicle", 30000)),

  r(
    "Steel Traps",
    n("Eternal Lord of The Undying Ember", 6),
    n("Natural Traps"),
    n("Dense Water", 5),
  ),
  r("Large Critter Pouch", n("Pingy", 30000)),
  r(
    "Manifested Skull",
    n("Frigid Soul", 8000),
    n("Prickle Skull"),
    n("Dense Water", 5),
  ),
  r("Large Soul Pouch", n("Rooted Soul", 30000)),

  r(
    "Large Food Pouch",
    n("Golden Ham", 10),
    n("Critter Numnums", 30),
    n("Soulble Gum", 30),
  ),
  r("Large Materials Pouch", n("Audio Cord", 60000), n("Black Lense", 3)),
  r("Luckier Lad", n("Lucky Lad", 75)),
  r(
    "Anvil Tab 4",
    n("Void Bar", 1000),
    n("Frigid Soul", 2500),
    n("Eternal Lord of The Undying Ember", 10),
    n("Spontaneity Salts", 400),
  ),

  r(
    "Mark of Member",
    n("Grandma Disguise"),
    n("Void Imperium Helmet"),
    n("Dioxide Synthesis", 400),
  ),
  r("Murmillo Helm", n("Void Imperium Helmet"), n("Dioxide Synthesis", 150)),
  r(
    "Conquistador Prime",
    n("Void Imperium Helmet"),
    n("Dioxide Synthesis", 150),
  ),
  r(
    "Adornment of the High Priest",
    n("Void Imperium Helmet"),
    n("Dioxide Synthesis", 150),
  ),

  r(
    "Member Hoodie",
    n("Uninflated Glove", 2),
    n("Void Imperium Platebody"),
    n("Dioxide Synthesis", 400),
  ),
  r(
    "Damascus Plates",
    n("Void Imperium Platebody"),
    n("Dioxide Synthesis", 250),
  ),
  r(
    "Evergreen Wraps",
    n("Void Imperium Platebody"),
    n("Dioxide Synthesis", 250),
  ),
  r(
    "Elegantine Robes",
    n("Void Imperium Platebody"),
    n("Dioxide Synthesis", 250),
  ),

  r("Critter Numnums", n("Crabbo", 100), n("Distilled Water")),
  r("Soulble Gum", n("Dune Soul", 70), n("Distilled Water")),
  r(
    "Shivering Sack",
    n("Mamooth Hide Bag"),
    n("Melty Cube", 2000),
    n("Yellow Snowflake", 3),
  ),
  r(
    "Honker Hat",
    n("Honker", 1000000),
    n("Diamond Duck"),
    n("Dense Water", 25),
  ),

  r(
    "Tundra NPC Completion Token",
    n("Easy FB Tundra NPC Token"),
    n("Med FB Tundra NPC Token"),
    n("Hard FB Tundra NPC Token"),
  ),
  r(
    "Tundra Skills Completion Token",
    n("Frigid Soul", 12500),
    n("Jade Scarab", 4),
    n("Refurbished Cog"),
  ),
  r(
    "Tundra Misc Completion Token",
    n("Chizoar Helmet"),
    n("Neutron Ice Ring"),
    n("Nullo Salt", 10),
    n("Black Lense", 60),
  ),
  r(
    "Bucket of Slush",
    n("Melty Cube", 5),
    n("Snow Ball", 20),
    n("Iron Bar", 5),
  ),

  r(
    "Easy FB Tundra NPC Token",
    n("Lonely Hunter Token"),
    n("Hoggi Token"),
    n("Snouts Token"),
  ),
  r(
    "Med FB Tundra NPC Token",
    n("Shuvelle Token"),
    n("Yondergreen Token"),
    n("Crystalswine Token"),
  ),
  r("Hard FB Tundra NPC Token", n("Bellows Token"), n("Bill Brr Token")),
  r(
    "Chizors Caustic Scarf",
    n("Chizoars Blankie"),
    n("Chizoar Stalagmite", 15),
    n("Chizoar Spike", 30),
  ),

  r(
    "Chizoar Helmet",
    n("Void Imperium Helmet"),
    n("Chizoar Spike", 25),
    n("Blood Bone", 1000),
    n("Purple Salt", 100),
  ),
  r(
    "Chizoar Bodyplate",
    n("Void Imperium Platebody"),
    n("Chizoar Spike", 18),
    n("Cryosnake Skin", 100000),
    n("Purple Salt", 50),
  ),
  r(
    "Chizoar Scaled Leggings",
    n("Void Imperium Shardshins"),
    n("Chizoar Spike", 10),
    n("Black Lense", 8),
    n("Dioxide Synthesis", 250),
  ),
  r(
    "Chizoar Walkers",
    n("Void Imperium Kicks"),
    n("Chizoar Spike", 6),
    n("Ice Age 3", 10),
    n("Dioxide Synthesis", 100),
  ),

  // TODO tabs 4-6
];
