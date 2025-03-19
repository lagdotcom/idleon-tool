import { mkIQ as n, mkQuest as q } from "./tools";

export const world6Quests = [
  q("Lafu Shi", "Seed Planting", [n("plant seed", 1)], [n("Compost Bag", 3)]),
  q(
    "Lafu Shi",
    "Visiting the Farmer's Market",
    [n("pick apple", 2), n("purchase land plot", 1)],
    [n("Compost Bag", 4), n("Sand of Time", 2)],
  ),
  q(
    "Lafu Shi",
    "Climbing the Ninja Hotel",
    [
      n("Jade Coin", 100),
      n("upgrade Looting Ambition", 1),
      n("equip nunchaku"),
    ],
    [n("Compost Bag", 2), n("Sand of Time", 3)],
  ),
  q(
    "Lafu Shi",
    "Emporium Investing",
    [n("emporium purchase", 1)],
    [n("Compost Bag", 3), n("Sand of Time", 2)],
  ),
  q(
    "Lafu Shi",
    "Summoning Debut",
    [n("win summoning match", 1)],
    [n("Summoner Stone", 2)],
  ),
  q(
    "Lafu Shi",
    "Essence Juicing",
    [n("buy summon upgrade", 3), n("win summoning match", 1)],
    [n("Compost Bag", 2), n("Sand of Time", 1), n("Summoner Stone", 2)],
  ),

  q(
    "Spirit Sungmin",
    "Mind, Body, Soul, Tasks",
    [n("Leafy Droplet", 2500), n("Rice Cake", 1000), n("Bamboo", 500)],
    [n("Sand of Time", 2), n("Compost Bag", 2)],
  ),

  q(
    "Hoov",
    "Sneak Dropout",
    [n("sneaking level", 10)],
    [n("Crop Evo Stamp"), n("Sand of Time", 1)],
  ),
  q(
    "Hoov",
    "Stealth Check 1 2 3",
    [n("ninja twin stealth", 10420)],
    [n("Void Sword Stamp"), n("Gold Food Coupon", 300)],
  ),
  q(
    "Hoov",
    "Sneak Registration",
    [n("sneaking level", 40)],
    [n("Sand of Time", 1), n("Gold Food Coupon", 1000)],
  ),
  q(
    "Hoov",
    "Sneak Graduate",
    [n("sneaking level", 80)],
    [n("Ninja Chest"), n("Gold Food Coupon", 1500)],
  ),

  q(
    "Woodlin Elder",
    "Portal Issues",
    [n("defeat Woodlin Spirit", 400000)],
    [n("Gold Food Coupon", 800)],
  ),
  q(
    "Woodlin Elder",
    "Big Lock Picking",
    [n("defeat Woodlin Spirit on 2nd char", 400000)],
    [
      n("Large Experience Balloon", 6),
      n("Sand of Time", 3),
      n("Compost Bag", 4),
    ],
  ),
  q(
    "Woodlin Elder",
    "Fiddy",
    [n("defeat Woodlin Spirit, exactly", 50)],
    [n("Gold Food Coupon", 1500)],
  ),
  q(
    "Woodlin Elder",
    "Hunned Fiddy",
    [n("defeat Woodlin Spirit, exactly", 150)],
    [n("Gold Food Coupon", 2500)],
  ),
  q(
    "Woodlin Elder",
    "Triple Tre",
    [n("defeat Woodlin Spirit, exactly", 333)],
    [n("Gold Food Coupon", 4000)],
  ),

  q(
    "Sussy Gene",
    "Goofin' Around",
    [
      n("have a long summoning match", 120),
      n("spawn bloomies in one match", 5),
      n("spawn slimes", 1000),
    ],
    [n("Triad Essence Stamp"), n("Gold Food Coupon", 4000)],
  ),
  q(
    "Sussy Gene",
    "Messin' Around",
    [
      n("have summoning mana", 2500),
      n("get summoning match down to 1hp vs 1hp"),
      n("spawn vrumbies from single card", 8),
    ],
    [n("Summoner Stone Stamp"), n("Gold Food Coupon", 4000)],
  ),
  q(
    "Sussy Gene",
    "Loiterin' Around",
    [
      n("have a regalis familiar"),
      n("play special units in a row", 7),
      n("have a long summoning match", 300),
    ],
    [
      n("Void Axe Stamp"),
      n("Stacked Rice Cake", 2500),
      n("Gold Food Coupon", 4000),
    ],
  ),
];
