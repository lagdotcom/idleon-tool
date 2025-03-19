import { mkIQ as n, mkQuest as q } from "./tools";

export const world1Quests = [
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
      n("Blunderhills Misc Completion Token"),
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
    "Builder Bird",
    "Restoring Power to the Portal",
    [n("Desert Topaz")],
    [n("Small Experience Balloon", 2), n("Star Talent Reset Potion", 3)],
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
    "Dog Bone",
    "Why he Die???",
    [n("Dog Bone", 3)],
    [n("Forest Villa Key", 3)],
  ),
  q(
    "Dog Bone",
    "Bow Wow going Dow...n!",
    [n("Amarok Slab", 25)],
    [n("Dog Bone Token"), n("Forest Villa Key", 5)],
  ),

  q(
    "Tiki Chief",
    "Brochure Building",
    [n("Plank", 500), n("Trusty Nails", 1000)],
    [n("Kachow Statue", 5), n("Golden Jam", 3)],
  ),
  q(
    "Tiki Chief",
    "Three Strikes, you're Out!",
    [n("guys invited", 3)],
    [n("Questin Stamp")],
  ),
  q(
    "Tiki Chief",
    "Blame it on the Glublins",
    [n("glublins defeated", 5000)],
    [n("Medium Experience Balloon")],
  ),
  q(
    "Tiki Chief",
    "Hotel? Tikivago. Sorry, couldn't Help It!",
    [n("boss kills", 5), n("speedy kill")],
    [n("Tiki Chief Token"), n("Mystery Upgrade Stone I", 2)],
  ),

  q("Papua Piggea", "Oinko Boinko", [n("Kapow Stamp")], [n("Gem", 2)]),
  q(
    "Papua Piggea",
    "Crystal Crime Stopper",
    [n("Crystallin")],
    [n("Small Experience Balloon", 4), n("4 HR Time Candy", 2)],
  ),
  q(
    "Papua Piggea",
    "Stamp Collecting",
    [n("Target Stamp", 3), n("Mana Stamp", 5), n("Vitality Stamp", 2)],
    [n("Potion Stamp"), n("Small Experience Balloon", 3)],
  ),
  q(
    "Papua Piggea",
    "This Little Piggy Felt Remorse",
    [n("total stamp level", 500)],
    [n("Papua Piggea Token"), n("Polearm Stamp"), n("Speed Statue", 8)],
  ),

  q(
    "Sprout",
    "Sticks and Stone Something Something Bones...",
    [n("Stick", 500), n("Iron Ore", 1500)],
    [n("Thicc Skin Statue", 12), n("Small Experience Balloon", 3)],
  ),
  q(
    "Sprout",
    "Justice Wears No Clothes",
    [n("unclothed kills", 30)],
    [n("Adam's Leaf"), n("Small Experience Balloon")],
  ),
  q(
    "Sprout",
    "Shoe Shopping with Sprout",
    [n("Iron Boots", 2), n("Goo Galoshes", 2), n("Flip Flops")],
    [n("MCR Tshirt")],
  ),
  q(
    "Sprout",
    "Frisbee Fanatic",
    [n("Red Frisbee")],
    [n("Sproutinald Token"), n("Frisbee Ring")],
  ),

  q(
    "Dazey",
    "Dressing like a Dork",
    [n("Forest Fibres", 1000), n("Flowies", 5)],
    [n("Gem")],
  ),
  q(
    "Dazey",
    "Literally Physics",
    [n("Forest Fibres", 1000), n("Flowies", 5), n("Woodular Circle")],
    [n("Dazey Token"), n("Medium Experience Balloon", 5)],
  ),

  q(
    "Glumlee",
    "Learning to Swing",
    [n("Copper Ore", 2)],
    [n("Glumlee's Special Tutorial Oil")],
  ),
  q(
    "Glumlee",
    "Learning to Smelt",
    [n("Copper Bar")],
    [n("Bottled Town Teleport", 10)],
  ),
  q(
    "Glumlee",
    "Literally Burning your Money",
    [n("forge upgrades bought", 2)],
    [n("Mining Certificate"), n("Miniature Mining Pouch")],
  ),
  q(
    "Glumlee",
    "The Impossible Task",
    [n("Broken Mic")],
    [n("Exp Converter (Special Talent Book)")],
  ),
  q(
    "Glumlee",
    "He's Havin' a Bad Day",
    [n("Broken Mic")],
    [n("Glumlee Token")],
  ),

  q(
    "Krunk",
    "A Plot to be Perfect",
    [n("Iron Ore", 200), n("Small Mana Potion", 50)],
    [n("Icing Ironbite", 200)],
  ),
  q(
    "Krunk",
    "The Scientific Method, According to a Rock",
    [n("Gold Ore", 200), n("Iron Bar", 100), n("Power Statue", 20)],
    [n("Armor Upgrade Stone G", 5), n("Storage Chest 3")],
  ),
  q(
    "Krunk",
    "King of the Cavern",
    [n("Bleach Logs", 1200), n("Trusty Nails", 300), n("Thread", 600)],
    [n("Speed Statue", 2)],
  ),
  q(
    "Krunk",
    "(Krunk Token)",
    [n("complete all of Krunk's quests"), n("mining level", 20)],
    [n("Krunk Token")],
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

  q(
    "TP Pete",
    "Roll of Anger",
    [n("defeat poops in 200 seconds", 40)],
    [n("Small Experience Balloon", 2), n("Gem", 2)],
  ),
  q(
    "TP Pete",
    "The Rats are to Blame!",
    [n("Employment Statistics", 50)],
    [n("Tool Upgrade Stone II", 2), n("Small Experience Balloon", 2)],
  ),
  q(
    "TP Pete",
    "Fired for BS Reasons!",
    [n("Job Application")],
    [n("Poopy Pickaxe")],
  ),
  q(
    "TP Pete",
    "(TP Pete Token)",
    [n("complete all of TP Pete's quests"), n("reach class level", 60)],
    [n("TP Pete Token")],
  ),
  q(
    "TP Pete",
    "(Toilet Paper Postage)",
    [n('say "More like Poopy Pete"')],
    [n("Toilet Paper Postage (Special Talent Book)")],
  ),

  q("Meel", "Spooky Scary Skelepoops", [n("defeat Boops", 30)], [n("Gem", 25)]),
  q(
    "Meel",
    "Waitin' for the Cards to Drop",
    [n("Bonemeal", 777)],
    [n("Death Wish"), n("Armor Upgrade Stone C", 6)],
  ),
];
