import { getRecipeMaker, mkInput as n } from "./tools";

// https://idleon.wiki/wiki/Smithing

const r = getRecipeMaker("smithing");

const recipes = [
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

  // TODO 57-84
];
export default recipes;
