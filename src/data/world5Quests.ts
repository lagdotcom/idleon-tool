import { mkIQ as n, mkQuest as q } from "./tools";

export const world5Quests = [
  q(
    "Lava Larry",
    "W5 Task Req Check",
    [
      n("Suggma Ashes", 2500),
      n("Plated Crumbs", 1000),
      n("Sundried Glass", 500),
    ],
    [n("Bottled Wind", 4), n("Gaming Fertilizer", 3)],
  ),

  q(
    "Muhmuguh",
    "Wave after wave slowly Sailing",
    [n("do sailing stuff")],
    [n("Bottled Wind", 4), n("Gaming Fertilizer", 3)],
  ),
  q(
    "Muhmuguh",
    "Rising up and Growing as a Gamer",
    [n("upgrade Gaming", 3)],
    [n("Bottled Wind", 4), n("Gaming Fertilizer", 4)],
  ),
  q(
    "Muhmuguh",
    "Learn the Language of the Universe",
    [n("unlock Divinity", 1)],
    [n("Bottled Wind", 5), n("Gaming Fertilizer", 4)],
  ),

  q(
    "Slargon",
    "Shut up the namecallers!",
    [n("defeat Suggma", 30000)],
    [n("Bottled Wind", 1)],
  ),
  q(
    "Slargon",
    "Smack the meanies!",
    [n("defeat Maccie", 250000)],
    [n("Gaming Fertilizer", 1)],
  ),
  q(
    "Slargon",
    "Mess with the Misters!",
    [n("defat Mr. Brightside", 1000000)],
    [n("Gaming Fertilizer", 2), n("Divinity Pearl", 3)],
  ),
  q(
    "Slargon",
    "Assert Dominance over the Meek!",
    [n("defeat Cheese Nub", 10000000)],
    [n("Bottled Wind", 3), n("Gaming Fertilizer", 3), n("Divinity Pearl", 5)],
  ),

  q(
    "Pirate Porkchop",
    "Bring me the Booty",
    [n("Sailing Gold Bar", 4000)],
    [n("Sailboat Stamp")],
  ),
  q(
    "Pirate Porkchop",
    "Sailing for some Sparks",
    [n("Lightning Treasure", 20000)],
    [n("Divine Stamp")],
  ),
  q(
    "Pirate Porkchop",
    "Seeking Treasure Shrooms",
    [n("Multishroom Treasure", 250000)],
    [n("Sashe Sidestamp")],
  ),
  q(
    "Pirate Porkchop",
    "Ye finest treasure at once!",
    [n("The Edge Treasure", 1000001)],
    [n("Conjocharmo Stamp")],
  ),

  q(
    "Poigu",
    "Think twice speak once",
    [n("Divinity", 25)],
    [n("Gamejoy Stamp"), n("Bottled Wind", 3), n("Gaming Fertilizer", 2)],
  ),
  q(
    "Poigu",
    "Speak from the heart not the mind",
    [n("Divinity", 50)],
    [n("Multitool Stamp"), n("Bottled Wind", 4), n("Gaming Fertilizer", 3)],
  ),
  q(
    "Poigu",
    "Learn the Language of the Universe",
    [n("Divinity", 80)],
    [n("Divinity Pearl", 3), n("Bottled Wind", 6), n("Gaming Fertilizer", 5)],
  ),

  q(
    "Tired Mole",
    "Establishing Order among Molekind",
    [n("defeat Biggole Moles", 6000000)],
    [n("Kruk's Volcano Key", 10), n("Divinity Pearl", 2)],
  ),
  q(
    "Tired Mole",
    "Like taking Keys from a Crawler",
    [n("defeat Crawler", 10000000)],
    [n("Kruk's Volcano Key", 25), n("Holy Pearl", 25)],
  ),
  q(
    "Tired Mole",
    "Divine Endeavor",
    [n("equip Divine Scarf"), n("get Kattlekruk Cape")],
    [n("One of the Divine")],
  ),
];
