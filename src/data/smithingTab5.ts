import { getRecipeMaker, mkIQ as n, mkIQMaker as m } from "./tools";

const dandielogs = m("Dandielogs");
const dioxideSynthesis = m("Dioxide Synthesis");
const dustMote = m("Dust Mote");
const dreadloBar = m("Dreadlo Bar");
const goldenHampter = m("Golden Hampter Gummy Candy");
const hampter = m("Hampter");
const kraken = m("Kraken");
const krukCavityTooth = m("Kruk Cavity Tooth");
const krukTooth = m("Kruk Tooth");
const mapleLogs = m("Maple Logs");
const nulloSalts = m("Nullo Salts");
const oozieSoul = m("Oozie Soul");
const scarab = m("Scarab");
const suggmaAshes = m("Suggma Ashes");

// https://idleon.wiki/wiki/Smithing
const r = getRecipeMaker("smithing");
export const smithingTab5 = [
  r(
    "Magma Core Headdress",
    n("Thin Veil of the Troll"),
    dustMote(80000),
    dreadloBar(2500),
  ),
  r(
    "Magma Core Wavemaille",
    n("Trollish Garb"),
    n("Sundried Glass", 900000),
    dreadloBar(1200),
  ),
  r(
    "Magma Core Battleskirt",
    n("Twisted Scales"),
    n("Cheesy Crumbs", 1000000),
    dreadloBar(1600),
  ),
  r(
    "Magma Core Lavarunners",
    n("Soles of the Troll"),
    n("Orange Slice", 1200000),
    dreadloBar(2000),
  ),

  r(
    "Molten Core Knucklers",
    n("Diabolical Gauntlet"),
    goldenHampter(1000),
    hampter(500),
  ),
  r(
    "Magma Maul",
    n("Diabolical Flesh Ripper"),
    dandielogs(500000),
    hampter(100),
  ),
  r(
    "Sediment Core Grunkler",
    n("Diabolical Continuit"),
    dandielogs(500000),
    hampter(100),
  ),
  r(
    "Cattle Core Soothsayer Staff",
    n("Diabolical Opticule"),
    dandielogs(500000),
    hampter(100),
  ),

  r("Dreadlo Pickaxe", n("Starfire Pickaxe"), n("Starfire Bar", 10000)),
  r("Colossal Mining Pouch", n("Starfire Ore", 900000)),
  r("Dreadlo Hatchet", n("Starfire Hatchet"), mapleLogs(250000)),
  r("Colossal Chopping Pouch", mapleLogs(900000)),

  r("Dreadlo Rod", n("Starfire Rod"), kraken(250000)),
  r("Colossal Fish Pouch", kraken(900000)),
  r("Dreadlo Matted Netting", n("Starfire Trim Netting"), scarab(250000)),
  r("Colossal Bug Pouch", scarab(900000)),

  r(
    "Egalitarian Traps",
    n("Royal Traps"),
    n("Voodofish", 100),
    nulloSalts(10000),
  ),
  r("Colossal Critta Pouch", n("Blobfish", 900000), dioxideSynthesis(5000)),
  r(
    "Dreadnaught Skull",
    n("Slush Skull"),
    n("Luciferian Skull"),
    oozieSoul(125000),
    nulloSalts(10000),
  ),
  r("Colossal Soul Pouch", oozieSoul(800000), dioxideSynthesis(5000)),

  r(
    "Colossal Food Pouch",
    n("Grilled Cheese Nomwich", 2500000),
    n("Golden Grilled Cheese Nomwich", 50),
    n("Golden Hampter Gummy Candy", 50),
  ),
  r(
    "Colossal Matty Pouch",
    suggmaAshes(2000000),
    n("Meteorite", 600000),
    n("Hampter", 200),
  ),
  r(
    "Coldseeker Bullet",
    n("Dust Mote", 100),
    dandielogs(100),
    n("Spitfire", 500),
  ),
  r(
    "Anvil Tab 6",
    dreadloBar(8500),
    dandielogs(2000000),
    dustMote(1000000),
    krukCavityTooth(10),
  ),

  r(
    "Skulled Helmet of the Divine",
    n("Magma Core Headdress"),
    krukTooth(50),
    krukCavityTooth(2),
  ),
  r("Serrated Chest of the Divine", n("Magma Core Wavemaille"), krukTooth(30)),
  r(
    "Spiked Leggings of the Divine",
    n("Magma Core Battleskirt"),
    krukTooth(20),
  ),
  r(
    "Devious Slippers of the Divine",
    n("Magma Core Lavarunners"),
    krukTooth(10),
  ),

  r(
    "Crackled Skull Destroyer",
    n("Molten Core Knucklers"),
    krukTooth(100),
    krukCavityTooth(4),
    n("Mongo Worm Slices", 20000000),
  ),
  r(
    "Skull Lance",
    n("Magma Maul"),
    krukTooth(30),
    krukCavityTooth(4),
    n("Wormie Slices", 3000000),
  ),
  r(
    "Spine Tingler Sniper",
    n("Sediment Core Grunkler"),
    krukTooth(30),
    krukCavityTooth(4),
    n("Hard Hat", 4000000),
  ),
  r(
    "Staff of the Undead Plague",
    n("Cattle Core Soothsayer Staff"),
    krukTooth(30),
    krukCavityTooth(4),
    n("Molten Lamp", 5000000),
  ),

  r(
    "The Divine Scarf",
    n("Chizoars Caustic Scarf"),
    n("Strung Tooth of the Divine"),
    krukCavityTooth(10),
    n("Lucky Lad", 2),
  ),
  r(
    "Shiny Bored Beanie",
    n("Bored Beanie"),
    suggmaAshes(1000),
    n("Royal Suggma Urn"),
  ),
  r(
    "Divvy Slippers",
    n("Sheek Scrubs"),
    n("Chef Hat Shoes"),
    n("Molten Lamp", 50000),
  ),
  r(
    "Zero Point Stopwatch",
    n("Midnight Stopwatch"),
    n("Dawn Stopwatch"),
    n("Spirit Diamond", 25),
    krukCavityTooth(10),
  ),
];
