import { getRecipeMaker, mkIQ as n, mkIQMaker as m } from "./tools";

const dandielogs = m("Dandielogs");
const dustMote = m("Dust Mote");
const dreadloBar = m("Dreadlo Bar");
const goldenHampter = m("Golden Hampter Gummy Candy");
const hampter = m("Hampter");
const krukCavityTooth = m("Kruk Cavity Tooth");

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

  // TODO 9-23

  r(
    "Anvil Tab 6",
    dreadloBar(8500),
    dandielogs(2000000),
    dustMote(1000000),
    krukCavityTooth(10),
  ),

  // TODO 25-36
];
