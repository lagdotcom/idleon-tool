import { mkIQ as n, mkQuest as q } from "./tools";

export const world4Quests = [
  q(
    "Gobo",
    "Breeding in Outer Space",
    [n("breed Green Mushroom")],
    [n("Pet Egg", 6)],
  ),
  q("Gobo", "Intense Pet Fighting", [n("pet battle won")], [n("Pet Egg", 6)]),
  q(
    "Gobo",
    "Squirrel Tactics",
    [n("breed Squirrel"), n("claim spice")],
    [n("Cooking Ladle", 8), n("Pet Egg", 3)],
  ),
  q(
    "Gobo",
    "Spicy Cooking",
    [n("start recipe"), n("finish recipe"), n("afk in kitchen area", 15)],
    [n("Cooking Ladle", 5), n("Pet Egg", 4)],
  ),
  q(
    "Gobo",
    "Lab Experimentation, Ft. You",
    [n("upload player to lab"), n("light up 1st bonus")],
    [n("Cooking Ladle", 6), n("Pet Egg", 5)],
  ),

  q(
    "Nebula Neddy",
    "Task Requirement Affirmative",
    [
      n("Purple Mush Cap", 200),
      n("TV Remote", 400),
      n("Half Eaten Donut", 750),
    ],
    [n("Cooking Ladle", 48), n("Pet Egg", 12), n("Dense Water", 15)],
  ),

  q(
    "Oinkin",
    "Filling the Menu",
    [n("lv 2 meals", 3)],
    [n("Cooked Meal Stamp"), n("Cooking Ladle", 4), n("Pet Egg", 4)],
  ),
  q(
    "Oinkin",
    "Diner Deliverer",
    [
      n("genetic splicing lv", 3),
      n("egg capacity lv", 2),
      n("breedability pulse lv", 1),
    ],
    [n("Nest Eggs Stamp"), n("Cooking Ladle", 5), n("Pet Egg", 4)],
  ),
  q(
    "Oinkin",
    "Recipe for Fattening Pastry",
    [n("discover Croissant recipe")],
    [n("Ladle Stamp"), n("Cooking Ladle", 6), n("Pet Egg", 4)],
  ),

  q(
    "Royal Worm",
    "Let the Tails Hit the Floor",
    [n("space filled with wurm tail", 1540)],
    [
      n("Studious Quester (Special Talent Book)"),
      n("Kachow Statue", 100),
      n("Holy Pearl", 2),
    ],
  ),
  q(
    "Royal Worm",
    "Bothering Mutants",
    [n("mutated mush spawnkills", 5)],
    [n("Coldseeker Bullet", 5000), n("Holy Pearl", 4)],
  ),
  q(
    "Royal Worm",
    "Royal Score",
    [n("colosseum score", 48500000)],
    [n("Cooking Ladle", 40), n("Holy Pearl", 2)],
  ),
  q(
    "Royal Worm",
    "Downfall of the Hammer Things",
    [n("kill Stilters without respawn", 1), n("big brain prayer active", 1)],
    [n("Dementia Net"), n("Black Pearl", 4)],
  ),
  q(
    "Royal Worm",
    "Kickin' the Can",
    [n("clash of cans wave", 55), n("personal damage dealt", 5000)],
    [n("Twosoul Statue", 2500), n("Soulble Gum", 5000)],
  ),
  q(
    "Royal Worm",
    "A Royal Gift",
    [n("Wurm Tail", 10000000)],
    [n("Fat Albert"), n("Pearler Shell", 30)],
  ),
  q(
    "Royal Worm",
    "Bossin' the Boss",
    [n("defeat Blitzkrieg Troll", 100)],
    [n("Cosmic Time Candy"), n("Divinity Pearl", 5)],
  ),
  q(
    "Royal Worm",
    "Normie Bidding",
    [n("w4 quests done", 22)],
    [n("72 HR Time Candy"), n("Holy Pearl", 6)],
  ),
  q(
    "Royal Worm",
    "Royal Bidding",
    [n("defeat Crystal Custard", 25000)],
    [n("Nebula Royal"), n("Gold Food Coupon", 5000), n("Divinity Pearl", 7)],
  ),

  q(
    "Capital P",
    "Right side wrong side!",
    [n("party points", 200)],
    [n("Lab Tube Stamp"), n("Cooking Ladle", 1)],
  ),
  q(
    "Capital P",
    "No room on the Dance Floor!",
    [n("party points", 1400)],
    [n("DNA Stamp"), n("Cooking Ladle", 1)],
  ),
  q(
    "Capital P",
    "Everybody move it move it!",
    [n("party points", 10000)],
    [n("Diamond Axe Stamp"), n("Cooking Ladle", 1)],
  ),

  q(
    "Blobbo",
    "A Honker Took mah Baby!",
    [n("Honker", 10000)],
    [n("Cooking Ladle", 48), n("Pet Egg", 10)],
  ),
  q(
    "Blobbo",
    "Glitter Critter",
    [
      n("Jade Scarab", 30),
      n("Eternal Lord of The Undying Ember", 60),
      n("Crescent Scorpie", 200),
    ],
    [n("Cooking Ladle", 48), n("Pet Egg", 15)],
  ),

  q(
    "Rift Ripper",
    "Entering The Rift...",
    [n("Lost Batteries", 5), n("Purple Mush Cap", 878), n("Wurm Tail", 592)],
    [n("Phone Box", 50), n("Gem Envelope", 10), n("Cosmic Time Candy", 3)],
  ),

  q(
    "Monolith",
    "Surface Level Jealousy",
    [n("total statue lv", 250), n("unique statues in inventory", 17)],
    [n("24 HR Time Candy"), n("Holy Pearl", 2)],
  ),
  q(
    "Monolith",
    "Onyx Statue Crafting",
    [n("Power Statue", 20000)],
    [n("Onyx Tools"), n("Divinity Pearl", 2), n("Holy Pearl", 4)],
  ),
  q(
    "Monolith",
    "A Lack of Modesty",
    [n("manually loot statues", 100000)],
    [
      n("Monolithialism (Special Talent Book)"),
      n("EhExPee Statue", 10000),
      n("Kachow Statue", 10000),
    ],
  ),
];
