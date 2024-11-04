import { getRecipeMaker, mkInput as n } from "./tools";

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

  r("Peanut", n("Hot Dog", 2), n("Copper Ore"), n("Bleach Logs")),
  r("Golden Peanut", n("Peanut", 100), n("Gold Bar", 50)),
  r("Fur Shirt", n("Glublin Ear", 500), n("Iron Bar", 500)),
];
export default recipes;
