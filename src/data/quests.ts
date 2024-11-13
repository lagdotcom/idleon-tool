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
    "Rocklyte",
    "How It's Made, Episode 7. The Super Peanut",
    [n("Stone Peanut"), n("Peanut", 500)],
    [n("Golden Peanut (Recipe)")],
  ),
  q(
    "Rocklyte",
    "If Life Gives you Peanuts, make Shiny Peanuts!",
    [n("Golden Peanut", 5)],
    [n("Mystery Upgrade Stone I")],
  ),
  q(
    "Rocklyte",
    "Becoming the Best Beginner",
    [],
    [n("Beginner Best Class (Special Talent Book)"), n("Club Member")],
  ),

  q(
    "Toadstall",
    "Creating a Party!",
    [n("create a party"), n("invite someone")],
    [n("Dungeon Credits", 10)],
  ),
  q(
    "Toadstall",
    "Bigger Party Better Party!",
    [n("be in a party of 3")],
    [n("Dungeon Credits", 15), n("Dungeon Loot Dice", 2)],
  ),
  q(
    "Toadstall",
    "Bother the Frogger!",
    [n("defeat Grandfrogger")],
    [n("Dungeon Credits", 20), n("Dungeon Loot Dice", 2)],
  ),

  q(
    "Promotheus",
    "I'm Ready, Promotion!",
    [n("achieve level 10")],
    [n("Bottled Town Teleport", 5)],
  ),
  q(
    "Promotheus",
    "Three Right Answers",
    [n("select a new class")],
    [
      n("Class Certificate"),
      n("Talent Point Reset Potion", 3),
      n("Talent Point Reset Fragment"),
    ],
  ),
  q(
    "Promotheus",
    "Slovakian Scare",
    [n("house monster found")],
    [n("Alien Headband"), n("Talent Point Reset Potion")],
  ),
  q(
    "Promotheus",
    "The Witcher, but not Really",
    [n("defeat Baba Yaga")],
    [n("Inventory Bag D"), n("Small Experience Balloon", 2)],
  ),

  q(
    "Stiltzcho",
    "Outta the Way Slimes",
    [n("slimes defeated", 10)],
    [n("Speed Statue", 3), n("Average Speed Potion", 25)],
  ),
  q(
    "Stiltzcho",
    "No Stone Unturned",
    [n("Strange Rock", 4)],
    [n("Speed Statue", 2), n("Small Experience Balloon")],
  ),
  q(
    "Stiltzcho",
    "Investigator by Day, Prankster by Night",
    [n("Carrot Cube", 2), n("Bleach Logs")],
    [n("Scouting Report"), n("Carrot Horror")],
  ),
  q(
    "Stiltzcho",
    "Time Crime Episode 1",
    [n("afk at Spores", 14400)],
    [n("2 HR Time Candy")],
  ),
  q(
    "Stiltzcho",
    "Time Crime Episode 2",
    [n("afk at Frogs", 28800)],
    [n("4 HR Time Candy")],
  ),
  q(
    "Stiltzcho",
    "Time Crime Season Finale",
    [n("afk at Slimes", 57600)],
    [n("Stiltzcho Token"), n("24 HR Time Candy")],
  ),

  q(
    "Funguy",
    "Mushroom Munchies",
    [
      n("Peanut", 100),
      n("Cheezy Pizza", 25),
      n("Average Strength Potion", 100),
    ],
    [n("Small Food Pouch"), n("Talent Point Reset Potion")],
  ),
  q(
    "Funguy",
    "Videogame Highscores are COOL!",
    [n("choppin score", 35)],
    [n("Fur Shirt (Recipe)")],
  ),
  q(
    "Funguy",
    "Partycrastination",
    [n("Time Thingy", 250)],
    [n("Silver Stopwatch")],
  ),
  q(
    "Funguy",
    "Party Crashin'",
    [n("meet new people", 35), n("make some friends")],
    [n("Gem", 4)],
  ),
  q(
    "Funguy",
    "Wicked Party Cleanup",
    [n("Potty Rolls", 10000)],
    [n("Funguy Token"), n("Warped Weapon Upgrade Stone", 4)],
  ),

  q(
    "Bushlyte",
    "A Peanut for your Thoughts",
    [n("Peanut", 50)],
    [n("Mystery Upgrade Stone I")],
  ),
  q(
    "Bushlyte",
    "Honk if you Love Peanuts!",
    [n("Peanut", 200)],
    [n("Mystery Upgrade Stone I", 2)],
  ),
  q(
    "Bushlyte",
    "A Peanut Saved",
    [n("Peanut", 400)],
    [n("Mystery Upgrade Stone I", 3), n("Stone Peanut")],
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
