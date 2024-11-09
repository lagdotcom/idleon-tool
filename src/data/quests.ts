import { mkIQ as n, mkQuest as q } from "./tools";

const quests = [
  q(
    "Scripticus",
    "Hardcore Gamer Status, Here I Come!",
    [n("kill Green Spores", 5)],
    [n("Crimson String")],
  ),
  q(
    "Scripticus",
    "Gear Up, Gamer!",
    [n("Boxing Gloves")],
    [n("Red Headband"), n("Bottled Town Teleport", 3)],
  ),
  q("Scripticus", "Mr. Worldwide", [n("reach map 2")], [n("Inventory Bag A")]),
  q(
    "Scripticus",
    "The Choice is Yours!",
    [n("spend talent points", 5)],
    [n("1 HR Time Candy", 2)],
  ),
  q(
    "Scripticus",
    "Certified Swinger, of Pickaxes of course!",
    [n("Mining Certificate")],
    [n("Junk Pickaxe")],
  ),
  q(
    "Scripticus",
    "The Smithing Grind",
    [n("Farmer Brim"), n("Orange Tee")],
    [n("Mini Materials Pouch"), n("Sleek Shank Recipe")],
  ),
  q(
    "Scripticus",
    "Warrior, Archer or Mage?",
    [n("Class Certificate")],
    [n("Inventory Bag B"), n("Small Material Pouch")],
  ),
  q(
    "Scripticus",
    "Stiltzcho, the Leaf Scout",
    [n("Scouting Report")],
    [n("Inventory Bag C")],
  ),
  q(
    "Scripticus",
    "What Lies at the Heart of the Forest",
    [n("find boss room")],
    [n("Bottled Town Teleport", 10), n("Small Experience Balloon")],
  ),
  q(
    "Scripticus",
    "The Bigger they are, the Bigger they Fall!",
    [n("kill Amarok")],
    [n("Will of the Eldest (Special Talent Book)")],
  ),
  q(
    "Scripticus",
    "Champion of the Grasslands",
    [
      n("Blunderhills NPC Completion Token"),
      n("Blunder Skills Completion Token"),
      n("Blunderhills Misc Completion Task"),
    ],
    [n("Blunder Hero")],
  ),
  q(
    "Scripticus",
    "Can't somebody else do it?",
    [n("claim AFK on 2nd char")],
    [n("Armor Upgrade Stone I"), n("1 HR Time Candy", 2)],
  ),

  q(
    "Town Marble",
    "Visualizing the Sculpture Within...",
    [n("Sculpting Tools")],
    [n("Power Statue")],
  ),

  q(
    "Mutton",
    "Beatboxing Starterpack",
    [n("White Headband"), n("Give Up On Life Pants"), n("Flip Flops")],
    [n("Fist Stamp"), n("Storage Chest 5")],
  ),
  q(
    "Mutton",
    "Clout Chasin'",
    [n("Corporatube Sub", 300)],
    [n("Manamoar Stamp"), n("1 HR Time Candy")],
  ),
  q(
    "Mutton",
    "Cross Platform Promotion",
    [n("Corporatube Sub", 5000), n("Instablab Follower", 1000)],
    [n("Scimitar Stamp"), n("Gem", 3)],
  ),
  q(
    "Mutton",
    "7 Figure Followers",
    [
      n("Corporatube Sub", 200000),
      n("Instablab Follower", 300000),
      n("Cloudsound Follower", 500000),
    ],
    [n("Golden Apple Stamp"), n("Steve Sword")],
  ),
];
export default quests;
