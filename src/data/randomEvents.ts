import { getDropperMaker, mkDrop as d, mkTableDrop as t } from "./tools";

const pearls = [d("Black Pearl", NaN), d("Holy Pearl", NaN)];

const balloons = [
  d("Small Experience Balloon", NaN),
  d("Medium Experience Balloon", NaN),
];

const eventDrops = [
  t(pearls, 8.3333333333),
  t(balloons, 3.3333333333),
  d("Dungeon Loot Dice", 2.5),
  d("Gold Food Coupon", 2.5),
  d("Gold Food Coupon", 2.5),
];

const w1StatueDrop = [
  d("Power Statue", NaN, 5),
  d("Speed Statue", NaN, 5),
  d("Mining Statue", NaN, 5),
  d("Feasty Statue", NaN, 5),
  d("Health Statue", NaN, 5),
  d("Kachow Statue", NaN, 5),
];

const w2StatueDrop = [
  ...w1StatueDrop,
  d("Lumberbob Statue", NaN, 5),
  d("Thicc Skin Statue", NaN, 5),
  d("Oceanman Statue", NaN, 5),
  d("Ol Reliable Statue", NaN, 5),
  d("Exp Book Statue", NaN, 5),
  d("Anvil Statue", NaN, 5),
];

const w3StatueDrop = [
  ...w2StatueDrop,
  d("Cauldron Statue", NaN, 5),
  d("Beholder Statue", NaN, 5),
  d("Bullseye Statue", NaN, 5),
  d("Box Statue", NaN, 5),
  d("Twosoul Statue", NaN, 5),
  d("EhExPee Statue", NaN, 5),
];

const e = getDropperMaker("random event");
export const randomEvents = [
  e(
    "Meteorite",
    "Random Event",
    d("Meteorhead", 80),
    d("Meteorite Ring", 100),
    ...eventDrops,
  ),
  e(
    "Mega Grumblo",
    "Random Event",
    d("Grumbie the Hatchet Hammer", 120),
    ...eventDrops,
  ),
  e(
    "Glacial Guild",
    "Random Event",
    d("Ice Guard Helmet", 60),
    d("Vigilant Obol of Ice Guard", 60),
    ...eventDrops,
  ),
  e("Snake Swarm", "Random Event", d("Skewered Snek", 120), ...eventDrops),
  e(
    "Angry Frogs",
    "Random Event",
    d("Grumpy Obol of the Grandfrogger", 60),
    ...eventDrops,
  ),

  e("World 1 Event", "Random Event", t(w1StatueDrop, 5)),
  e("World 2 Event", "Random Event", t(w2StatueDrop, 5)),
  e("World 3 Event", "Random Event", t(w3StatueDrop, 5)),
];
