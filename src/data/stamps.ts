import { getItemMaker, getSinkMaker, mkIQ as n } from "./tools";

const i = getItemMaker("stamps");
export const stamps = [
  i("Sword Stamp", "StampA1"),
  i("Heart Stamp", "StampA2"),
  i("Mana Stamp", "StampA3"),
  i("Tomahawk Stamp", "StampA4"),
  i("Target Stamp", "StampA5"),
  i("Shield Stamp", "StampA6"),
  i("Longsword Stamp", "StampA7"),
  i("Kapow Stamp", "StampA8"),
  i("Fist Stamp", "StampA9"),
  i("Battleaxe Stamp", "StampA10"),
  i("Agile Stamp", "StampA11"),
  i("Vitality Stamp", "StampA12"),
  i("Book Stamp", "StampA13"),
  i("Manamoar Stamp", "StampA14"),
  i("Clover Stamp", "StampA15"),
  i("Scimitar Stamp", "StampA16"),
  i("Bullseye Stamp", "StampA17"),
  i("Feather Stamp", "StampA18"),
  i("Polearm Stamp", "StampA19"),
  i("Violence Stamp", "StampA20"),
  i("Buckler Stamp", "StampA21"),
  i("Hermes Stamp", "StampA22"),
  i("Sukka Foo", "StampA23"),
  i("Arcane Stamp", "StampA24"),
  i("Avast Yar Stamp", "StampA25"),
  i("Steve Sword", "StampA26"),
  i("Blover Stamp", "StampA27"),
  i("Stat Graph Stamp", "StampA28"),
  i("Gilded Axe Stamp", "StampA29"),
  i("Diamond Axe Stamp", "StampA30"),
  i("Tripleshot Stamp", "StampA31"),
  i("Blackheart Stamp", "StampA32"),
  i("Maxo Slappo Stamp", "StampA33"),
  i("Sashe Sidestamp", "StampA34"),
  i("Intellectostampo", "StampA35"),
  i("Conjocharmo Stamp", "StampA36"),
  i("Dementia Sword Stamp", "StampA37"),
  i("Golden Sixes Stamp", "StampA38"),
  i("Stat Wallstreet Stamp", "StampA39"),
  i("Void Sword Stamp", "StampA40"),
  i("Void Axe Stamp", "StampA41"),
  i("Captalist Stats Stamp", "StampA42"),

  i("Pickaxe Stamp"),
  i("Hatchet Stamp"),
  i("Anvil Zoomer Stamp"),
  i("Lil' Mining Baggy Stamp", "StampB4"),
  i("Twin Ores Stamp"),
  i("Choppin' Bag Stamp"),
  i("Duplogs Stamp"),
  i("Matty Bag Stamp"),
  i("Smart Dirt Stamp"),
  i("Cool Diggy Tool Stamp"),
  i("High IQ Lumber Stamp"),
  i("Swag Swingy Tool Stamp"),
  i("Alch Go Brrr Stamp"),
  i("Brainstew Stamps"),
  i("Drippy Drop Stamp"),
  i("Droplots Stamp"),
  i("Fishing Rod Stamp"),
  i("Fishhead Stamp"),
  i("Catch Net Stamp", "StampB19"),
  i("Fly Intel Stamp"),
  i("Bag o Heads Stamp"),
  i("Holy Mackerel Stamp"),
  i("Bugsack Stamp"),
  i("Buzz Buzz Stamp"),
  i("Hidey Box Stamp"),
  i("Purp Froge Stamp"),
  i("Spikemouth Stamp"),
  i("Stample Stamp"),
  i("Saw Stamp"),
  i("Amplestample Stamp"),
  i("Flowin Stamp"),
  i("Banked Pts Stamp"),
  i("Cooked Meal Stamp"),
  i("Spice Stamp"),
  i("Ladle Stamp"),
  i("Nest Eggs Stamp"),
  i("Egg Stamp"),
  i("Lab Tube Stamp"),
  i("Sailboat Stamp"),
  i("Gamejoy Stamp"),
  i("Divine Stamp"),
  i("Multitool Stamp"),
  i("Skelefish Stamp"),
  i("Crop Evo Stamp"),
  i("Sneaky Peeky Stamp"),
  i("Jade Mint Stamp"),
  i("Summoner Stone Stamp"),
  i("White Essence Stamp"),
  i("Triad Essence Stamp"),
  i("Dark Triad Essence Stamp"),
  i("Questin Stamp"),
  i("Mason Jar Stamp"),
  i("Crystallin"),
  i("Arcade Ball Stamp"),
  i("Gold Ball Stamp"),
  i("Potion Stamp"),
  i("Golden Apple Stamp"),
  i("Ball Timer Stamp"),
  i("Card Stamp"),
  i("Forge Stamp"),
  i("Vendor Stamp"),
  i("Sigil Stamp"),
  i("Talent II Stamp"),
  i("Talent III Stamp"),
  i("Talent IV Stamp"),
  i("Talent S Stamp"),
  i("Multikill Stamp"),
  i("Biblio Stamp"),
  i("DNA Stamp"),
  i("Refinery Stamp"),
  i("Atomic Stamp"),
];

const s = getSinkMaker("stamp");
export const stampSinks = [
  s("Sword Stamp", n("Spore Cap", NaN)),
  s("Heart Stamp", n("Oak Logs", NaN)),
  s("Battleaxe Stamp", n("Grass Leaf", NaN)),
  s("Agile Stamp", n("Copper Chopper", NaN)),
  s("Vitality Stamp", n("Snake Skin", NaN)),
  s("Book Stamp", n("Iron Bar", NaN)),
  s("Manamoar Stamp", n("Glublin Ear", NaN)),
  s("Clover Stamp", n("Iron Platebody", NaN)),
  s("Scimitar Stamp", n("Goldfish", NaN)),
  s("Bullseye Stamp", n("Sentient Cereal", NaN)),
  s("Feather Stamp", n("Coconotnotto", NaN)),
  s("Polearm Stamp", n("Steel Axe", NaN)),
  s("Violence Stamp", n("Dementia Ore", NaN)),
  s("Buckler Stamp", n("Platinum Bar", NaN)),
  s("Hermes Stamp", n("Rooted Soul", NaN)),
  s("Sukka Foo", n("Amarok Slab", NaN)),
  s("Arcane Stamp", n("Gold Bar", NaN)),
  s("Avast Yar Stamp", n("Bunny", NaN)),
  s("Steve Sword", n("Fruitfly", NaN)),
  s("Blover Stamp", n("Jellyfish", NaN)),
  s("Stat Graph Stamp", n("Mystery Upgrade Stone I", NaN)),
  s("Gilded Axe Stamp", n("Thingymabob", NaN)),
  s("Diamond Axe Stamp", n("PVC Pipe", NaN)),
  s("Tripleshot Stamp", n("Tangled Cords", NaN)),
  s("Blackheart Stamp", n("Purple Screw", NaN)),
  s("Maxo Slappo Stamp", n("Maple Logs", NaN)),
  s("Sashe Sidestamp", n("Scarab", NaN)),
  s("Intellectostampo", n("Oozie Soul", NaN)),
  s("Conjocharmo Stamp", n("Suggma Ashes", NaN)),
  s("Dementia Sword Stamp", n("Dreadlo Ore", NaN)),
  s("Golden Sixes Stamp", n("Kraken", NaN)),
  s("Stat Wallstreet Stamp", n("Mystery Upgrade Stone II", NaN)),
  s("Void Sword Stamp", n("Rice Cake", NaN)),
  s("Void Axe Stamp", n("Bamboo Logs", NaN)),
  s("Captalist Stats Stamp", n("Firefly", NaN)),

  s("Pickaxe Stamp", n("Oak Logs", NaN)),
  s("Hatchet Stamp", n("Thread", NaN)),
  s("Anvil Zoomer Stamp", n("Copper Ore", NaN)),
  s("Lil' Mining Baggy Stamp", n("Jungle Logs", NaN)),
  s("Twin Ores Stamp", n("Thief Hood", NaN)),
  s("Choppin' Bag Stamp", n("Carrot Cube", NaN)),
  s("Duplogs Stamp", n("Militia Helm", NaN)),
  s("Matty Bag Stamp", n("Cramped Material Pouch", NaN)),
  s("Smart Dirt Stamp", n("Plank", NaN)),
  s("Cool Diggy Tool Stamp", n("Iron Hatchet", NaN)),
  s("High IQ Lumber Stamp", n("Bullfrog Horn", NaN)),
  s("Swag Swingy Tool Stamp", n("Copper Pickaxe", NaN)),
  s("Alch Go Brrr Stamp", n("Forest Fibres", NaN)),
  s("Brainstew Stamps", n("Gold Ore", NaN)),
  s("Drippy Drop Stamp", n("Pocket Sand", NaN)),
  s("Droplots Stamp", n("Bloach", NaN)),
  s("Fishing Rod Stamp", n("Fly", NaN)),
  s("Fishhead Stamp", n("Megalodon Tooth", NaN)),
  s("Catch Net Stamp", n("Goldfish", NaN)),
  s("Fly Intel Stamp", n("Crabby Cakey", NaN)),
  s("Bag o Heads Stamp", n("Butterfly", NaN)),
  s("Holy Mackerel Stamp", n("Platinum Ore", NaN)),
  s("Bugsack Stamp", n("Hermit Can", NaN)),
  s("Buzz Buzz Stamp", n("Potty Rolls", NaN)),
  s("Hidey Box Stamp", n("Crabbo", NaN)),
  s("Purp Froge Stamp", n("Scorpie", NaN)),
  s("Spikemouth Stamp", n("Mousey", NaN)),
  s("Stample Stamp", n("Floof Ploof", NaN)),
  s("Saw Stamp", n("Dementia Bar", NaN)),
  s("Amplestample Stamp", n("Mosquisnow", NaN)),
  s("Flowin Stamp", n("Redox Salts", NaN)),
  s("Banked Pts Stamp", n("Dune Soul", NaN)),
  s("Cooked Meal Stamp", n("Skelefish", NaN)),
  s("Spice Stamp", n("Purple Mush Cap", NaN)),
  s("Ladle Stamp", n("Sand Shark", NaN)),
  s("Nest Eggs Stamp", n("Alien Hive Chunk", NaN)),
  s("Egg Stamp", n("Half Eaten Donut", NaN)),
  s("Lab Tube Stamp", n("Bottle Cap", NaN)),
  s("Sailboat Stamp", n("Stilt Pole", NaN)),
  s("Gamejoy Stamp", n("Dandielogs", NaN)),
  s("Divine Stamp", n("Orange Slice", NaN)),
  s("Multitool Stamp", n("Dust Mote", NaN)),
  s("Skelefish Stamp", n("Skelefish", NaN)),
  s("Crop Evo Stamp", n("Icefish", NaN)),
  s("Sneaky Peeky Stamp", n("Leafy Horn", NaN)),
  s("Jade Mint Stamp", n("Stacked Rice Cake", NaN)),
  s("Summoner Stone Stamp", n("Breezy Soul", NaN)),
  s("White Essence Stamp", n("Ladybug", NaN)),
  s("Triad Essence Stamp", n("Caulifish", NaN)),
  s("Dark Triad Essence Stamp", n("Effervescent Logs", NaN)),

  s("Questin Stamp", n("Slime Sludge", NaN)),
  s("Mason Jar Stamp", n("Glass Shard", NaN)),
  s("Crystallin", n("Boring Brick", NaN)),
  s("Arcade Ball Stamp", n("Copper Ore", NaN)),
  s("Gold Ball Stamp", n("Goldfish", NaN)),
  s("Potion Stamp", n("Icing Ironbite", NaN)),
  s("Golden Apple Stamp", n("Golden Nomwich", NaN)),
  s("Ball Timer Stamp", n("Oak Logs", NaN)),
  s("Card Stamp", n("Furled Flag", NaN)),
  s("Forge Stamp", n("Godshard Ore", NaN)),
  s("Vendor Stamp", n("Cue Tape", NaN)),
  s("Sigil Stamp", n("Ram Wool", NaN)),
  s("Talent II Stamp", n("Pincer Arm", NaN)),
  s("Talent III Stamp", n("Arctic Leaf", NaN)),
  s("Talent IV Stamp", n("Royal Suggma Urn", NaN)),
  s("Talent S Stamp", n("Twisty Leaf", NaN)),
  s("Multikill Stamp", n("Spore Cap", NaN)),
  s("Biblio Stamp", n("Tundra Logs", NaN)),
  s("DNA Stamp", n("Worker Bee", NaN)),
  s("Refinery Stamp", n("Cheesy Crumbs", NaN)),
  s("Atomic Stamp", n("Bamboo", NaN)),
];
