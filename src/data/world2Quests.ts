import { mkIQ as n, mkQuest as q } from "./tools";

export const world2Quests = [
  q(
    "Obol Altar",
    "Bad Kitty, get off that altar!",
    [n("BobJoePickle")],
    [n("Bronze Obol of Puny Damage")],
  ),
  q(
    "Postboy Pablob",
    "Signed, Sealed and Lost in the Post",
    [n("Empty Box", 5)],
    [n("Gem", 75), n("2 HR Time Candy", 5)],
  ),

  q("Cowbo Jones", "The Grind Begins...?", [n("kill Pots", 10)], [n("Gem", 5)]),
  q(
    "Cowbo Jones",
    "The Hatless Howerhouse!",
    [n("no-hat kill", 20)],
    [n("Storage Chest 4")],
  ),
  q(
    "Cowbo Jones",
    "No Country for One Character",
    [n("characters created", 4)],
    [n("1 HR Time Candy", 3)],
  ),
  q(
    "Cowbo Jones",
    "Say Goodbye to your Dubloon!",
    [n("Golden Dubloon")],
    [n("Small Experience Balloon", 5), n("Gem", 5)],
  ),
  q(
    "Cowbo Jones",
    "Alchemial Apprentice",
    [n("bubble unlocked"), n("Distilled Water")],
    [n("Weapon Upgrade Stone II", 2), n("Armor Upgrade Stone II", 3)],
  ),
  q(
    "Cowbo Jones",
    "Three Vials? Those are Rookie Numbers!",
    [n("vials unlocked", 2)],
    [],
  ),
  q(
    "Cowbo Jones",
    "The Notorious B.O.B",
    [n("criminal found")],
    [n("Gem", 3), n("Small Experience Balloon", 2)],
  ),
  q(
    "Cowbo Jones",
    "Bake Him Away, Toys",
    [n("Signed Arrest Warrant")],
    [n("Inventory Bag E")],
  ),
  q(
    "Cowbo Jones",
    "A Hat in Crime",
    [n("Leather Hide", 100), n("Trusty Nails", 750)],
    [n("Cowbo Galloneer"), n("Warped Helmet Upgrade Stone")],
  ),
  q(
    "Cowbo Jones",
    "Commence Criminal Crimes!",
    [n("steal from Goldric")],
    [n("Inventory Bag F")],
  ),
  q(
    "Cowbo Jones",
    "The Worst Trade Deal in History",
    [n("resell Dubloons", 10)],
    [n("Gem", 4), n("Small Experience Balloon", 3)],
  ),
  q(
    "Cowbo Jones",
    "Children? What'd they ever do for Me...",
    [n("donations made", 4)],
    [n("Gem", 6), n("Medium Experience Balloon")],
  ),
  q(
    "Cowbo Jones",
    "Oh No, not the Elderly!",
    [n("do Carpetiem's quests")],
    [n("Inventory Bag H")],
  ),
  q(
    "Cowbo Jones",
    "Tomb Raid",
    [n("defeat Efaunt")],
    [
      n("24 HR Time Candy"),
      n("Silver Obol of Experience"),
      n("Cowbo Jones Token"),
    ],
  ),
  q(
    "Cowbo Jones",
    "The New Sheriff",
    [
      n("Yumyum Desert NPC Completion Token"),
      n("Yumyum Skills Completion Token"),
      n("Yumyum Misc Completion Token"),
    ],
    [n("YumYum Sheriff")],
  ),

  q(
    "Desert Davey",
    "U Cool?",
    [n("Steel Axe"), n("Birch Longbow"), n("Quarterstaff")],
    [n("Gem", 50), n("4 HR Time Candy", 2), n("1 HR Time Candy", 3)],
  ),

  q(
    "Walupiggy",
    "Treasure Hunt 1",
    [n("steps completed", 6), n("treasure dug up")],
    [n("12 HR Time Candy", 2), n("Black Pearl", 5)],
  ),
  q(
    "Walupiggy",
    "Treasure Hunt 2",
    [n("steps completed", 7), n("treasure dug up")],
    [
      n("24 HR Time Candy", 2),
      n("Talent Point Special Tab", 4),
      n("Talent Point Tab 3", 3),
    ],
  ),
  q(
    "Walupiggy",
    "Treasure Hunt 3",
    [n("steps completed", 8), n("treasure dug up")],
    [
      n("Warped Helmet Upgrade Stone", 6),
      n("Black Pearl", 8),
      n("Talent Point Tab 2", 3),
    ],
  ),
  q(
    "Walupiggy",
    "Treasure Hunt 4",
    [n("steps completed", 8), n("treasure dug up")],
    [n("Steamy Time Candy", 5), n("Goldegg Capsule"), n("Newbie Card Pack")],
  ),

  q(
    "Constructor Crow",
    "Restoring Power to Another Portal",
    [n("Glacier Quartz")],
    [n("Medium Experience Balloon", 3)],
  ),

  q("Whattso", "Mopey Dick", [n("Goldfish", 20)], [n("Wormie Weight")]),
  q(
    "Whattso",
    "The Whaley Hard Minigame",
    [n("fish minigame score", 10)],
    [n("Scripticus Spoons"), n("Gem", 3)],
  ),
  q(
    "Whattso",
    "Bobbin' Bobbers",
    [n("fishing score total", 50)],
    [n("Triple Threat"), n("Whattso Token")],
  ),
  q(
    "Whattso",
    "The Biggest Fish in the Sea...?",
    [n("catch the whale")],
    [n("Electrical Wiring"), n("The Bobber Challenge Scroll")],
  ),

  q(
    "Scubidew",
    "Don't Step to Me, Bro!",
    [n("Goldfish", 400), n("Hermit Can", 100), n("Jellyfish", 25)],
    [n("Iron Hook"), n("Gem", 3)],
  ),
  q(
    "Scubidew",
    "Uncovering the Deep Sea State!!!",
    [n("fish caught", 5), n("timer", 120)],
    [n("Basic Bobber"), n("Tool Upgrade Stone II", 2)],
  ),
  q("Scubidew", "A Normal Quest.", [n("Goldfish")], [n("Scubidew Token")]),

  q(
    "Fishpaste97",
    "'Accidental' Exploit",
    [n("Butterfly", 1500)],
    [n("Fishing Rod Stamp"), n("1 HR Time Candy")],
  ),
  q(
    "Fishpaste97",
    "Can you do the Can Can?",
    [n("catch cans in a row", 3)],
    [n("Fishpaste Token"), n("One Pound of Feathers"), n("Talent S Stamp")],
  ),

  q(
    "Omar Da Ogar",
    "Helping Omar",
    [n("Thread", 20000)],
    [n("BobJoePickle"), n("Frog Leg", 4)],
  ),
  q(
    "Omar Da Ogar",
    "Helping Omar Again",
    [
      n("fishing level", 35),
      n("1 HR Time Candy", 24),
      n("2 HR Time Candy", 10),
      n("4 HR Time Candy", 5),
    ],
    [n("Shallow Watering"), n("Glublin Ear", 3)],
  ),
  q(
    "Omar Da Ogar",
    "Helping Omar A 3rd Time",
    [n("fishing level", 40), n("Sand Shark", 40000), n("BobJoePickle")],
    [n("Large Experience Balloon", 5), n("Bean Slices", 5)],
  ),
  q(
    "Omar Da Ogar",
    "Helping Omar Some More",
    [n("fishing level", 50), n("Kraken", 250000), n("BobJoePickle")],
    [n("Oceanic Ring"), n("Carrot Cube", 4)],
  ),
  q(
    "Omar Da Ogar",
    "Helping Omar Yet Again Deja Vu",
    [
      n("fishing level", 70),
      n("Fruitfly", 250000),
      n("Worker Bee", 75000),
      n("BobJoePickle", 2),
    ],
    [n("Aqua Pearl", 100), n("Holy Pearl", 2), n("Snake Skin", 5)],
  ),
  q(
    "Omar Da Ogar",
    "Helping Omar For The Final Time",
    [n("fishing level", 90), n("Shellfish", 1000)],
    [n("Deepwater Trench Ring"), n("Spore Cap", 6)],
  ),

  q(
    "Centurion",
    "Down The Mimic Hole!",
    [n("mimics defeated quickly")],
    [n("Colosseum Ticket")],
  ),
  q(
    "Centurion",
    "Which one of yours is the Mafia?",
    [n("Coconotnotto", 2500)],
    [n("1 HR Time Candy", 2), n("Colosseum Ticket", 2)],
  ),
  q(
    "Centurion",
    "High Scorer",
    [n("colosseum score", 200000)],
    [n("2 HR Time Candy", 2)],
  ),
  q(
    "Centurion",
    "Colosseum Champ!",
    [
      n("class level", 65),
      n("waves completed", 15),
      n("colosseum score", 350000),
    ],
    [n("4 HR Time Candy"), n("2 HR Time Candy", 2)],
  ),
  q(
    "Centurion",
    "Colosseum GDQ",
    [
      n("1st colosseum time left", 180),
      n("2nd colosseum time left", 180),
      n("3rd colosseum time left", 180),
    ],
    [n("12 HR Time Candy"), n("Gem", 30)],
  ),
  q(
    "Centurion",
    "Centurio Rank",
    [n("win w4 colosseum")],
    [n("12 HR Time Candy"), n("Holy Pearl", 5)],
  ),
  q(
    "Centurion",
    "Legatus Rank",
    [n("win w5 colosseum")],
    [n("24 HR Time Candy"), n("Holy Pearl", 6), n("Divinity Pearl", 8)],
  ),
  q(
    "Centurion",
    "Glorious Gladiator",
    [n("win w6 colosseum")],
    [n("Gladiator")],
  ),

  q(
    "Snake Jar",
    "Lookin' Like a Snack",
    [n("Megalodon Tooth", 4200)],
    [n("Warped Helmet Upgrade Stone", 3), n("Gem", 6)],
  ),
  q(
    "Snake Jar",
    "Red Stuff Bad!",
    [n("Small Life Potion", 8500)],
    [n("Storage Chest 11"), n("12 HR Time Candy")],
  ),
  q(
    "Snake Jar",
    "PSA. You Are Being Eaten!",
    [n("survive beaing eaten", 4)],
    [n("Jar"), n("Medium Experience Balloon", 3), n("Gem", 20)],
  ),
  q(
    "Snake Jar",
    "A Noob, served Medium Rare!",
    [n("other player lured")],
    [n("Snake Jar Token"), n("1 HR Time Candy", 3), n("Gem", 10)],
  ),

  q(
    "Bandit Bob",
    "Bullets for Bandit Bob!",
    [n("Bullet", 30)],
    [n("Warped Weapon Upgrade Stone", 2), n("Small Experience Balloon", 2)],
  ),
  q(
    "Bandit Bob",
    "Bob's Brand New Bandana",
    [n("Yellow Headband")],
    [n("Power Statue", 7)],
  ),
  q(
    "Bandit Bob",
    "Bringing Bob's Boxes",
    [n("plan-it express orders", 2)],
    [n("Signed Arrest Warrant"), n("Gem", 2)],
  ),
  q(
    "Bandit Bob",
    "The Desert Dungeon Prequest",
    [n("Sesame Seed")],
    [n("Bandit Bob Token")],
  ),

  q(
    "Gangster Gus",
    "Plunderin Down Yonder",
    [n("dungeon attempted")],
    [n("Dungeon Loot Dice", 2), n("Dungeon Credits", 15)],
  ),
  q(
    "Gangster Gus",
    "Perfect Progress Score",
    [n("dungeon attempted")],
    [n("Dungeon Loot Dice", 3), n("Dungeon Credits", 25)],
  ),
  q(
    "Gangster Gus",
    "Sanke Revival Denial",
    [n("dungeon attempted")],
    [n("Dungeon Loot Dice", 3), n("Dungeon Credits", 25)],
  ),

  q(
    "Speccius",
    "More like 'Sleepius' lmao",
    [n("Kebab Sticks", 130), n("Crabby Cakey", 150)],
    [
      n("2 HR Time Candy", 2),
      n("Talent Point Reset Potion"),
      n("Talent Point Reset Fragment", 5),
    ],
  ),
  q("Speccius", "Specialization Station", [n("select a sub class")], []),

  q(
    "XxX Cattleprod XxX",
    "Peak Gaming",
    [n("mafiosos defeated in 30 seconds", 15)],
    [n("Lil' Mining Baggy Stamp"), n("Catch Net Stamp")],
  ),
  q(
    "XxX Cattleprod XxX",
    "Wait No, I meant Pathetic Gaming",
    [
      n("mafiosos defeated in 72 seconds", 30),
      n("sand castles defeated in 72 seconds", 18),
    ],
    [n("Mason Jar Stamp"), n("Fishhead Stamp")],
  ),
  q(
    "XxX Cattleprod XxX",
    "Ok, NOW it's Peak Gaming!",
    [
      n("Monster Rating", 1000),
      n("Player Rating With Letter P"),
      n("Player Rating With Letter S"),
    ],
    [n("Stat Graph Stamp")],
  ),

  q(
    "Goldric",
    "Trickle Down Economics",
    [n("collect coins on ground", 15)],
    [n("Gem", 3)],
  ),
  q(
    "Goldric",
    "Hoopsies",
    [n("catching minigame hoops in a row", 15)],
    [n("Gem", 4), n("Tool Upgrade Stone III", 2)],
  ),
  q(
    "Goldric",
    "Only Winners have Portraits",
    [
      n("Casual Confidante", 200),
      n("Triumphant Treason", 200),
      n("Claiming Cashe", 200),
    ],
    [n("Gem", 5)],
  ),
  q(
    "Goldric",
    "Criminal Code of Conduct",
    [n("Golden Plop")],
    [n("Gem", 7), n("Warped Weapon Upgrade Stone", 2)],
  ),
  q(
    "Goldric",
    "Dress to Impress",
    [n("wear golden helmet/platebody/platelegs/tool")],
    [n("Bag o Nuts")],
  ),
  q(
    "Goldric",
    "Dont lay a finger on my Sheepies!!!",
    [n("defeat sand castles", 18), n("do not hurt sheep")],
    [n("Goldric Token"), n("24 HR Time Candy")],
  ),

  q(
    "Carpetiem",
    "Darn Lazy Gamers!",
    [n("defeat potatos actively", 750)],
    [n("Silver STR Obol"), n("Gem", 3)],
  ),
  q(
    "Carpetiem",
    "Old Timey Craftin'",
    [n("craft bullet", 225), n("do not open chest")],
    [n("Distilled Water", 15), n("Small Experience Balloon", 2)],
  ),
  q(
    "Carpetiem",
    "Be like Buster!",
    [n("beat special tyson with red boxing gloves equipped")],
    [n("Gem", 4)],
  ),
  q(
    "Carpetiem",
    "Helping 100 times over",
    [n('say "The boomer aint so bad" to different players', 30)],
    [n("Carpetiem Token"), n("Iron Hook"), n("Silver Twine")],
  ),

  q(
    "Loominadi",
    "Rhyming is Key!",
    [n("Loomi's Room Key", 10)],
    [
      n("Mystery Upgrade Stone I", 3),
      n("Gem", 8),
      n("Small Experience Balloon", 5),
    ],
  ),
  q(
    "Loominadi",
    "Uh, Something About Vials?",
    [n("blue alchemy vials", 13)],
    [n("Mystery Upgrade Stone I", 3), n("Gem", 10), n("Distilled Water", 15)],
  ),
  q(
    "Loominadi",
    "Journey to the Center of the Blundermines",
    [n("reach ol' straightaway")],
    [n("Mystery Upgrade Stone II", 5), n("Gem", 15), n("Silver Antique", 2)],
  ),
  q(
    "Loominadi",
    "The Mummy of Mystery",
    [n("beat king doot")],
    [n("Loominadi Token"), n("Literal Elephant"), n("24 HR Time Candy")],
  ),

  q(
    "Wellington",
    "Platforms in Disguise, Platsformers!",
    [n("find secret platforms", 3)],
    [n("Brainstew Stamps"), n("Arcane Stamp")],
  ),
  q(
    "Wellington",
    "Findin' Fingerprints",
    [n("High Steaks", 2500), n("Wakka Cherry", 2500), n("Singlecle", 2500)],
    [n("Gem", 5), n("Fly Intel Stamp"), n("Holy Mackerel Stamp")],
  ),
  q(
    "Wellington",
    "You Can't Run, but you Can Hide",
    [n('say "Darn you, Blobulyte! Why must you hide like a coward')],
    [n("Talent II Stamp"), n("Medium Experience Balloon", 2)],
  ),
  q(
    "Wellington",
    "Puzzles and Math, a Winning Combination!",
    [n("do the puzzle")],
    [
      n("Wellington Token"),
      n("Stonks! (Special Talent Book)"),
      n("Large Experience Balloon", 3),
    ],
  ),

  q(
    "Djonnut",
    "Genie Dieting",
    [
      n("Average Mana Potion", 200),
      n("Icing Ironbite", 600),
      n("Jellyfish", 150),
    ],
    [n("1 HR Time Candy", 8)],
  ),
  q(
    "Djonnut",
    "I'm Blue Dabadedada",
    [n("defeat moonmen", 3000), n("Ghost")],
    [n("Efaunt's Tomb Key", 2)],
  ),
  q(
    "Djonnut",
    "The Blue New World",
    [n("Melty Cube", 2500), n("Sticky Stick", 2500), n("Mamooth Tusk", 2500)],
    [n("Efaunt's Tomb Key", 5), n("Djonnut Token")],
  ),

  q(
    "Cactolyte",
    "Super Skillage",
    [
      n("Bag o Nuts"),
      n("mining level", 32),
      n("smithing level", 35),
      n("choppin level", 33),
    ],
    [n("Gem", 50), n("12 HR Time Candy", 4)],
  ),
  q(
    "Cactolyte",
    "Top Skillage",
    [n("fishing level", 23), n("alchemy level", 25), n("catching level", 25)],
    [n("24 HR Time Candy"), n("Elderly Peanut")],
  ),
  q(
    "Cactolyte",
    "Peanut De-Aging",
    [
      n("beat Biggie Hours with Elderly Peanut in inventory"),
      n("Pete the Peanut"),
    ],
    [
      n("Medium Experience Balloon", 20),
      n("Medium Experience Balloon", 10),
      n("Large Experience Balloon", 5),
    ],
  ),
  q("Cactolyte", "Maestro! The Stro! Mman!", [], [n("Club Maestro")]),
];
