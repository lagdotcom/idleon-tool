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
    "Woodsman",
    "A noob's first swing",
    [n("Oak Logs", 10)],
    [n("Miniature Choppin Pouch")],
  ),
  q(
    "Woodsman",
    "A noob's 2nd first swing",
    [n("Oak Logs", 100)],
    [n("Old Hatchet")],
  ),
  q(
    "Woodsman",
    "It's Just a Plank, Bro!",
    [n("Oak Logs", 1000)],
    [n("Stump Prop")],
  ),
  q(
    "Woodsman",
    "Exotic Pranks... I mean Logs!",
    [n("Forest Fibres")],
    [n("Woodsman Token")],
  ),

  q(
    "Picnic Stowaway",
    "The Hungry Stowaway",
    [n("Nomwich")],
    [n("Miniscule Food Pouch"), n("1 HR Time Candy")],
  ),
  q(
    "Picnic Stowaway",
    "Beating Up Frogs for some Sauce",
    [n("Ketchup Bottle", 3), n("Mustard Bottle", 3)],
    [n("Little Wooden Katana")],
  ),
  q(
    "Picnic Stowaway",
    "Live-Action Entertainment",
    [n("defeat Mushroom", 10)],
    [n("Golden Jam")],
  ),
  q(
    "Picnic Stowaway",
    "The Most Important Meal of the Day",
    [n("Frog Leg", 200), n("Bean Slices", 100)],
    [n("Golden Jam"), n("Average Life Potion", 25)],
  ),
  q(
    "Picnic Stowaway",
    "Brunchin' with the Blobs",
    [n("Peanut", 100), n("Bleach Logs", 1500), n("Grass Leaf", 50)],
    [
      n("Golden Jam", 3),
      n("Average Speed Potion", 50),
      n("Small Experience Balloon"),
    ],
  ),
  q(
    "Picnic Stowaway",
    "Luncheon with the Inlaws",
    [n("Crude Oil", 200), n("Iron Bar", 100), n("Sculpting Tools")],
    [n("Golden Kebabs"), n("Golden Jam", 5), n("Kachow Statue", 3)],
  ),
  q(
    "Picnic Stowaway",
    "Afternoon Tea in a Jiffy",
    [n("get hot teacup")],
    [n("Golden Kebabs", 3), n("Golden Jam", 10), n("Small Experience Balloon")],
  ),
  q(
    "Picnic Stowaway",
    "Early Evening Eating Endeavor",
    [n("Iron Helmet"), n("Kebab Sticks", 500)],
    [n("Golden Kebabs", 100), n("Golden Jam", 20)],
  ),
  q(
    "Picnic Stowaway",
    "The Last Supper, at Least for Today!",
    [n("Magic Meatloaf")],
    [
      n("Golden Meat Pie"),
      n("Golden Kebabs", 20),
      n("Crystals 4 Dayys (Special Talent Book)"),
    ],
  ),
  q(
    "Picnic Stowaway",
    "Don't Desert the Dessert",
    [n("Nuget Cake", 2)],
    [n("Gem"), n("Golden Meat Pie", 5), n("Warped Helmet Upgrade Stone", 2)],
  ),
  q(
    "Picnic Stowaway",
    "A Midnight Snack",
    [n("Midnight Cookie", 2)],
    [n("Picnic Token"), n("Golden Meat Pie", 10)],
  ),
  q(
    "Picnic Stowaway",
    "King of Food",
    [n("Picnic Token", 30)],
    [n("King of Food")],
  ),

  q(
    "Hamish",
    "The Hamazing Plot Twist",
    [n("Copper Chopper")],
    [n("Tomahawk Stamp"), n("Purple Tupacband (Recipe)")],
  ),
  q(
    "Hamish",
    "Should We Tell Him?",
    [n("Purple Tupacband")],
    [n("Choppin' Bag Stamp"), n("Talent Point Reset Potion")],
  ),
  q(
    "Hamish",
    "Slime for Storage",
    [n("Slime Sludge", 50)],
    [n("Storage Chest 1")],
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
