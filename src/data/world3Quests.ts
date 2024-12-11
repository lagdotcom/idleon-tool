import { mkIQ as n, mkQuest as q } from "./tools";

export const world3Quests = [
  q(
    "Lord of the Hunt",
    "Pelt for the Pelt God",
    [n("Shrapshell", 10), n("Snake Skin", 12), n("Cardboard Traps")],
    [n("Cardboard Traps"), n("12 HR Time Candy", 2)],
  ),
  q(
    "Lord of the Hunt",
    "Frogecoin to the MOON!",
    [n("Froge", 100), n("Poison Froge")],
    [n("Medium Experience Balloon", 5), n("4 HR Time Candy", 2)],
  ),
  q(
    "Lord of the Hunt",
    "Yet another Cartoon Reference",
    [n("Crabbo", 250), n("Mutant Crabbo")],
    [n("4 HR Time Candy", 2)],
  ),
  q(
    "Lord of the Hunt",
    "Small Stingers, Big Owie",
    [n("Scorpie", 500), n("Crescent Scorpie", 2)],
    [n("Large Experience Balloon", 2), n("4 HR Time Candy", 2)],
  ),
  q(
    "Lord of the Hunt",
    "The Mouse n the Molerat",
    [n("Mousey", 1000), n("Nakeo Moleo", 2)],
    [n("Gem", 10)],
  ),
  q(
    "Lord of the Hunt",
    "Happy Tree Friend",
    [n("Owlio", 1500), n("Minervowl", 3)],
    [n("12 HR Time Candy")],
  ),
  q(
    "Lord of the Hunt",
    "Noot Noot!",
    [n("Pingy", 2500), n("Eternal Lord of The Undying Ember", 4)],
    [n("12 HR Time Candy"), n("Gem", 10)],
  ),
  q(
    "Lord of the Hunt",
    "Bunny you Should Say That!",
    [n("Bunny", 4000), n("Purbunni", 6)],
    [n("Star Talent Reset Potion")],
  ),
  q(
    "Lord of the Hunt",
    "Rollin' Thunder!",
    [n("Dung Beat", 8000), n("Jade Scarab", 10)],
    [n("Talent Point Reset Potion", 4)],
  ),
  q(
    "Lord of the Hunt",
    "Untitled Quest",
    [n("Honker", 65000), n("Diamond Duck")],
    [n("Post Office Box Reseto Magnifico"), n("24 HR Time Candy")],
  ),
  q(
    "Lord of the Hunt",
    "To Trap or not to Trap",
    [
      n("Crescent Scorpie", 5000),
      n("Eternal Lord of The Undying Ember", 250),
      n("Diamond Duck", 100),
    ],
    [n("Critter Baron")],
  ),

  q(
    "Iceland Irwin",
    "Crikey, it's cold out!",
    [n("Melty Cube", 250)],
    [n("Gem", 25), n("4 HR Time Candy"), n("1 HR Time Candy", 2)],
  ),

  q(
    "Hoggindaz",
    "Turn ON for what???",
    [n("turn on refinery"), n("hours of redox fuel", 24)],
    [n("Gem", 3)],
  ),
  q(
    "Hoggindaz",
    "Trapping with the Lord",
    [n("buy trap from shop"), n("place a trap in Jungle")],
    [n("1 HR Time Candy"), n("Gem", 4)],
  ),
  q(
    "Hoggindaz",
    "Constructing a Tower",
    [n("build 3d printer"), n("build Wizard Defender"), n("make cog")],
    [n("Printer Sampling (Special Talent Book)"), n("Gem", 2)],
  ),
  q(
    "Hoggindaz",
    "Monke Tower Time!",
    [n("summon Goblin Gorefest"), n("place Wizard Towers", 4)],
    [n("1 HR Time Candy"), n("Gem", 2)],
  ),
  q(
    "Hoggindaz",
    "Taking Samples",
    [n("take samples", 2)],
    [n("Shrine Architect (Special Talent Book)"), n("Gem", 2)],
  ),
  q(
    "Hoggindaz",
    "Voter Recognition",
    [n("Shuvelle's Vote")],
    [n("2 HR Time Candy", 3)],
  ),
  q(
    "Hoggindaz",
    "Voter Appeasement",
    [n("Yondergreens Vote")],
    [n("4 HR Time Candy", 2)],
  ),
  q(
    "Hoggindaz",
    "Voter Apathy",
    [n("Bill Brr's Vote")],
    [n("12 HR Time Candy")],
  ),
  q(
    "Hoggindaz",
    "Chizoar No More",
    [n("defeat Chizoar")],
    [
      n("Hoggi Token"),
      n("Large Experience Balloon", 2),
      n("Medium Experience Balloon", 4),
    ],
  ),
  q(
    "Hoggindaz",
    "The Fresh Prince of the Tundra",
    [
      n("Tundra NPC Completion Token"),
      n("Tundra Skills Completion Token"),
      n("Tundra Misc Completion Token"),
    ],
    [n("Frost Prince")],
  ),

  q(
    "Carpenter Cardinal",
    "Restoring Power, once again, to a Portal",
    [n("Galaxial Amethyst")],
    [n("Cosmic Time Candy")],
  ),

  q(
    "Worldo",
    "Odd Jobs for Cold Hard Cash",
    [n("jobs completed", 15)],
    [n("Dungeon Card Pack"), n("Dungeon Loot Dice", 3)],
  ),
  q(
    "Worldo",
    "Can't Guard if you're Dead!",
    [n("guards defeated", 12)],
    [n("Dungeon Card Pack"), n("Dungeon Loot Dice", 4)],
  ),

  q(
    "Lonely Hunter",
    "Leaf Him Alone!",
    [n("Grass Leaf", 200), n("Twisty Leaf", 50)],
    [n("Gem", 5), n("1 HR Time Candy")],
  ),
  q(
    "Lonely Hunter",
    "Skeleton? Skelegone!",
    [n("defeat Xylobones", 5)],
    [n("1 HR Time Candy"), n("Colosseum Ticket", 2)],
  ),
  q(
    "Lonely Hunter",
    "Opening Chests",
    [
      n("open Bronze Chests", 7),
      n("open Silver Chests", 3),
      n("open Gold Chests"),
    ],
    [n("Lonely Hunter Token"), n("Colosseum Ticket", 2)],
  ),

  q("Snouts", "A Salty Fall", [n("Redox Salts", 30)], [n("Buckler Stamp")]),
  q(
    "Snouts",
    "Gravity VS Salt",
    [n("Explosive Salts", 50)],
    [n("Feather Stamp"), n("Purp Froge Stamp")],
  ),
  q(
    "Snouts",
    "Big Ol Chonker",
    [n("defeat giant Stache")],
    [n("Talent III Stamp"), n("Biblio Stamp")],
  ),
  q(
    "Snouts",
    "Mana Plox",
    [n("Decent Mana Potion", 250)],
    [n("Snouts Token"), n("4 HR Time Candy")],
  ),

  q(
    "Shuvelle",
    "Mayoral Luck",
    [n("get Mamooth Tusk drops in timer", 6)],
    [n("1 HR Time Candy", 2), n("Dungeon Loot Dice")],
  ),
  q(
    "Shuvelle",
    "Mayoral Skill",
    [n("Mosquisnow", 200)],
    [
      n("Dungeon Loot Dice", 2),
      n("Sentient Cereal", 2000),
      n("Jellyfish", 2000),
    ],
  ),
  q(
    "Shuvelle",
    "Mayoral Sack Size",
    [n("Mamooth Tusk", 8000)],
    [n("4 HR Time Candy")],
  ),
  q(
    "Shuvelle",
    "Mayoral Movie Taste",
    [n("Ice Age 3")],
    [n("Shuvelle's Vote"), n("Dungeon Loot Dice")],
  ),
  q(
    "Shuvelle",
    "Diggy Hole!",
    [n("get 12 shovels from Mamooths right under the rope")],
    [n("2 HR Time Candy"), n("Dungeon Loot Dice")],
  ),
  q(
    "Shuvelle",
    "Diggy Diggy Hole!",
    [n("get 15 shovels from Snowmen right under the rope")],
    [n("4 HR Time Candy"), n("Dungeon Loot Dice", 2)],
  ),
  q(
    "Shuvelle",
    "Dig Diggily Diggy Dig Dig Hole!",
    [n("get 16 shovels from Thermisters at the rightmost edge")],
    [n("Shuvelle Token"), n("4 HR Time Candy"), n("Dungeon Loot Dice", 2)],
  ),

  q(
    "Yondergreen",
    "Infrastructure Plan",
    [n("shrines placed", 4)],
    [n("Dungeon Loot Dice")],
  ),
  q(
    "Yondergreen",
    "Economic Policy",
    [n("coins on ground", 75)],
    [n("Dungeon Loot Dice")],
  ),
  q(
    "Yondergreen",
    "Stance on Big Tech",
    [n("sample size of Pen", 20)],
    [n("4 HR Time Candy")],
  ),
  q(
    "Yondergreen",
    "Legislative Action",
    [n("Signed Contract", 4)],
    [n("Yondergreens Vote"), n("Dungeon Loot Dice", 2)],
  ),
  q(
    "Yondergreen",
    "No Snapping Contract",
    [n("idle with Snouts for 4h10m±3m")],
    [n("4 HR Time Candy"), n("Dungeon Loot Dice")],
  ),
  q(
    "Yondergreen",
    "Keep Away Contract",
    [n("idle with Lonely Hunter for 9h33±3m")],
    [n("12 HR Time Candy"), n("Dungeon Loot Dice", 2)],
  ),
  q(
    "Yondergreen",
    "Ad Solidarity Contract",
    [n("idle with Bill Brr for 21h51m±3m")],
    [n("Yondergreen Token"), n("24 HR Time Candy")],
  ),

  q(
    "Crystalswine",
    "Melting the Snakes",
    [n("beat Cryosnake in time limit", 20)],
    [n("Hermes Stamp"), n("2 HR Time Candy"), n("Dungeon Loot Dice", 2)],
  ),
  q(
    "Crystalswine",
    "Sunrunning to Chizoar",
    [
      n("beat Cryosnake", 20),
      n("beat Bop Box", 17),
      n("beat Neyeptune", 22),
      n("time limit", NaN),
    ],
    [n("Crystalswine Token"), n("4 HR Time Candy"), n("Dungeon Loot Dice", 3)],
  ),
  q(
    "Crystalswine",
    "Global Warming",
    [
      n("beat Cryosnake", 20),
      n("beat Quenchie", 19),
      n("beat Thermister", 18),
      n("beat Penguin", 13),
      n("beat Snowman", 19),
      n("beat Mamooth", 20),
      n("beat Bloque", 19),
      n("beat Sir Stache", 20),
      n("beat Dedotated Ram", 20),
      n("time limit", NaN),
    ],
    [n("Avast Yar Stamp"), n("24 HR Time Candy"), n("Dungeon Loot Dice", 5)],
  ),

  q(
    "Bill Brr",
    "Fairly Odd Damage",
    [n("odd damage in a row", 8)],
    [n("Medium Experience Balloon", 5), n("Gem", 3)],
  ),
  q(
    "Bill Brr",
    "Laughin' Amphibian",
    [n("defeat Giga Frog")],
    [n("Dungeon Loot Dice"), n("Gem", 4)],
  ),
  q(
    "Bill Brr",
    "The Spores are a Bore",
    [n("defeat Cryosnake", 3), n("do not hurt spores")],
    [n("2 HR Time Candy", 2)],
  ),
  q(
    "Bill Brr",
    "Coin Shenanigans",
    [n("collect coin")],
    [n("Bill Brr's Vote"), n("Dungeon Loot Dice")],
  ),
  q(
    "Bill Brr",
    "Have a Candy",
    [n("1 HR Time Candy", 5), n("2 HR Time Candy", 2)],
    [n("4 HR Time Candy", 3)],
  ),
  q(
    "Bill Brr",
    "Duckin' and Shatterin'",
    [n("shatter orbs", 18)],
    [n("Dungeon Loot Dice", 2)],
  ),
  q(
    "Bill Brr",
    "Hatin' on the Green One",
    [n("defeat Chaotic Chizoar")],
    [n("Bill Brr Token"), n("Dungeon Loot Dice", 2)],
  ),

  q(
    "Bellows",
    "Poking Some Eyes Out",
    [n("defeat Neyeptune", 50)],
    [n("Chizoar's Cavern Key")],
  ),
  q(
    "Bellows",
    "Eyexperience",
    [n("get xp from single kill", 3200)],
    [n("Chizoar's Cavern Key", 2)],
  ),
  q(
    "Bellows",
    "Veyebing",
    [n("defeat giant Neyeptune")],
    [n("Chizoar's Cavern Key", 2)],
  ),
  q(
    "Bellows",
    "Optometric Hoarder",
    [n("Black Lense", 4), n("Contact Lense", 14000)],
    [n("Bellows Token")],
  ),
];
