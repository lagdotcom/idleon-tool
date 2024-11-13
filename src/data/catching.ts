import beeHive from "../img/Bee_Hive.png";
import butterfly from "../img/Butterfly.png";
import butterflyBar from "../img/Butterfly_Bar.png";
import copperNettedNet from "../img/Copper_Netted_Net.png";
import dementiaNet from "../img/Dementia_Net.png";
import dreadloMattedNetting from "../img/Dreadlo_Matted_Netting.png";
import dreamParticulate from "../img/Dream_Particulate.png";
import dustMote from "../img/Dust_Mote.png";
import fairy from "../img/Fairy.png";
import fairyHovel from "../img/Fairy_Hovel.png";
import firefly from "../img/Firefly.png";
import fireflyNest from "../img/Firefly_Nest.png";
import fly from "../img/Fly.png";
import flyNest from "../img/Fly_Nest.png";
import flycicle from "../img/Flycicle.png";
import fruitfly from "../img/Fruitfly.png";
import goldenNet from "../img/Golden_Net.png";
import groceryBag from "../img/Grocery_Bag.png";
import icicleNest from "../img/Icicle_Nest.png";
import ladybug from "../img/Ladybug.png";
import ladybugNest from "../img/Ladybug_Nest.png";
import lustreNetting from "../img/Lustre_Netting.png";
import marbiglassNetting from "../img/Marbiglass_Netting.png";
import mosquisnow from "../img/Mosquisnow.png";
import moteHovel from "../img/Mote_Hovel.png";
import platinet from "../img/Platinet.png";
import reinforcedNet from "../img/Reinforced_Net.png";
import scarab from "../img/Scarab.png";
import scarabNest from "../img/Scarab_Nest.png";
import sentientBowl from "../img/Sentient_Bowl.png";
import sentientCereal from "../img/Sentient_Cereal.png";
import snowden from "../img/Snowden.png";
import starfireTrimNetting from "../img/Starfire_Trim_Netting.png";
import voidImperiumNet from "../img/Void_Imperium_Net.png";
import workerBee from "../img/Worker_Bee.png";
import wranglerOfTheQoxzul from "../img/Wrangler_of_the_Qoxzul.png";
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
  bug("Fly", fly, "Bug1"),
  bug("Butterfly", butterfly, "Bug2"),
  bug("Sentient Cereal", sentientCereal),
  bug("Fruitfly", fruitfly),
  bug("Mosquisnow", mosquisnow),
  bug("Flycicle", flycicle),
  bug("Worker Bee", workerBee),
  bug("Fairy", fairy),
  bug("Scarab", scarab),
  bug("Dust Mote", dustMote),
  bug("Dream Particulate", dreamParticulate),
  bug("Ladybug", ladybug),
  bug("Firefly", firefly),
];

const net = getItemMaker("bug catching nets");
export const bugCatchingNets = [
  net("Copper Netted Net", copperNettedNet, "CatchingNet2"),
  net("Reinforced Net", reinforcedNet, "CatchingNet3"),
  net("Golden Net", goldenNet),
  net("Platinet", platinet),
  net("Dementia Net", dementiaNet),
  net("Void Imperium Net", voidImperiumNet),
  net("Lustre Netting", lustreNetting),
  net("Starfire Trim Netting", starfireTrimNetting),
  net("Dreadlo Matted Netting", dreadloMattedNetting),
  net("Marbiglass Netting", marbiglassNetting),
  net("Wrangler of the Qoxzul", wranglerOfTheQoxzul),
];

const nest = getDropperMaker("bug nest");
export const bugNests = [
  nest(
    "Fly Nest",
    flyNest,
    "Jar Bridge",
    d("Fly", NaN),
    d("Fly Card", 4550),
    t(DropTable12, 66.7),
  ),
  nest(
    "Butterfly Bar",
    butterflyBar,
    "Bandit Bob's Hideout",
    d("Butterfly", NaN),
    d("Butterfly Card", 5560),
    t(DropTable12, 66.7),
  ),
  nest(
    "Sentient Bowl",
    sentientBowl,
    "Pincer Plateau",
    d("Sentient Cereal", NaN),
    d("Sentient Cereal Card", 6250),
    t(DropTable12, 66.7),
  ),
  nest(
    "Grocery Bag",
    groceryBag,
    "Up Up Down Down",
    d("Fruitfly", NaN),
    d("Fruitfly Card", 7140),
    t(DropTable12, 66.7),
  ),
  nest(
    "Snowden",
    snowden,
    "Mamooooth Mountain",
    d("Mosquisnow", NaN),
    d("Mosquisnow Card", 7140),
    t(DropTable18, 66.7),
  ),
  nest(
    "Icicle Nest",
    icicleNest,
    "Overpass of Sound",
    d("Flycicle", NaN),
    d("Flycicle Card", 7140),
    t(DropTable18, 66.7),
  ),
  nest(
    "Bee Hive",
    beeHive,
    "Jelly Cube Bridge",
    d("Worker Bee", NaN),
    d("Worker Bee Card", 20000),
    t(DropTable23, 66.7),
  ),
  nest(
    "Fairy Hovel",
    fairyHovel,
    "Shelled Shores",
    d("Fairy", NaN),
    d("Fairy Card", 50000),
    t(DropTable23, 66.7),
  ),
  nest(
    "Scarab Nest",
    scarabNest,
    "The Great Molehill",
    d("Scarab", NaN),
    d("Scarab Card", 50000),
    t(DropTable25, 66.7),
  ),
  nest(
    "Mote Hovel",
    moteHovel,
    "Mount Doomish",
    d("Dust Mote", NaN),
    d("Dust Mote Card", 50000),
    t(DropTable26, 66.7),
  ),
  nest(
    "Dream Particulate",
    dreamParticulate,
    "Equinox Valley",
    d("Dream Particulate", NaN),
  ),
  nest("Ladybug Nest", ladybugNest, "Troll Playground", d("Ladybug", NaN)),
  nest("Firefly Nest", fireflyNest, "Lightway Path", d("Firefly", NaN)),
];
