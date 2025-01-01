import {
  DropTable12,
  DropTable18,
  DropTable23,
  DropTable25,
  DropTable26,
} from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop as d,
  mkTableDrop as t,
} from "./tools";

const bug = getItemMaker("bugs");
export const bugs = [
  bug("Fly", "Bug1"),
  bug("Butterfly", "Bug2"),
  bug("Sentient Cereal", "Bug3"),
  bug("Fruitfly", "Bug4"),
  bug("Mosquisnow", "Bug5"),
  bug("Flycicle", "Bug6"),
  bug("Worker Bee", "Bug7"),
  bug("Fairy", "Bug8"),
  bug("Scarab", "Bug9"),
  bug("Dust Mote", "Bug10"),
  bug("Dream Particulate", "Bug11"),
  bug("Ladybug", "Bug12"),
  bug("Firefly", "Bug13"),
];

const net = getItemMaker("bug catching nets");
export const bugCatchingNets = [
  net("Copper Netted Net", "CatchingNet2"),
  net("Reinforced Net", "CatchingNet3"),
  net("Golden Net", "CatchingNet4"),
  net("Platinet", "CatchingNet5"),
  net("Dementia Net", "CatchingNet6"),
  net("Void Imperium Net", "CatchingNet7"),
  net("Lustre Netting", "CatchingNet8"),
  net("Starfire Trim Netting", "CatchingNet9"),
  net("Dreadlo Matted Netting", "CatchingNet10"),
  net("Marbiglass Netting", "CatchingNet11"),
  net("Wrangler of the Qoxzul", "CatchingNet12"),
];

const nest = getDropperMaker("bug nest");
export const bugNests = [
  nest(
    "Fly Nest",
    "Jar Bridge",
    d("Fly", NaN),
    d("Fly Card", 4550),
    t(DropTable12, 66.7),
  ),
  nest(
    "Butterfly Bar",
    "Bandit Bob's Hideout",
    d("Butterfly", NaN),
    d("Butterfly Card", 5560),
    t(DropTable12, 66.7),
  ),
  nest(
    "Sentient Bowl",
    "Pincer Plateau",
    d("Sentient Cereal", NaN),
    d("Sentient Cereal Card", 6250),
    t(DropTable12, 66.7),
  ),
  nest(
    "Grocery Bag",
    "Up Up Down Down",
    d("Fruitfly", NaN),
    d("Fruitfly Card", 7140),
    t(DropTable12, 66.7),
  ),
  nest(
    "Snowden",
    "Mamooooth Mountain",
    d("Mosquisnow", NaN),
    d("Mosquisnow Card", 7140),
    t(DropTable18, 66.7),
  ),
  nest(
    "Icicle Nest",
    "Overpass of Sound",
    d("Flycicle", NaN),
    d("Flycicle Card", 7140),
    t(DropTable18, 66.7),
  ),
  nest(
    "Bee Hive",
    "Jelly Cube Bridge",
    d("Worker Bee", NaN),
    d("Worker Bee Card", 20000),
    t(DropTable23, 66.7),
  ),
  nest(
    "Fairy Hovel",
    "Shelled Shores",
    d("Fairy", NaN),
    d("Fairy Card", 50000),
    t(DropTable23, 66.7),
  ),
  nest(
    "Scarab Nest",
    "The Great Molehill",
    d("Scarab", NaN),
    d("Scarab Card", 50000),
    t(DropTable25, 66.7),
  ),
  nest(
    "Mote Hovel",
    "Mount Doomish",
    d("Dust Mote", NaN),
    d("Dust Mote Card", 50000),
    t(DropTable26, 66.7),
  ),
  nest("Dream Particulate", "Equinox Valley", d("Dream Particulate", NaN)),
  nest("Ladybug Nest", "Troll Playground", d("Ladybug", NaN)),
  nest("Firefly Nest", "Lightway Path", d("Firefly", NaN)),
];
