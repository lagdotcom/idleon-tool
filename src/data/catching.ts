import beeHive from "../img/Bee_Hive.png";
import butterfly from "../img/Butterfly.png";
import butterflyBar from "../img/Butterfly_Bar.png";
import dreamParticulate from "../img/Dream_Particulate.png";
import dreamParticulate from "../img/Dream_Particulate.png";
import dustMote from "../img/Dust_Mote.png";
import fairy from "../img/Fairy.png";
import fairyHovel from "../img/Fairy_Hovel.png";
import firefly from "../img/Firefly.png";
import fly from "../img/Fly.png";
import flyNest from "../img/Fly_Nest.png";
import flycicle from "../img/Flycicle.png";
import fruitfly from "../img/Fruitfly.png";
import groceryBag from "../img/Grocery_Bag.png";
import icicleNest from "../img/Icicle_Nest.png";
import ladybug from "../img/Ladybug.png";
import mosquisnow from "../img/Mosquisnow.png";
import moteHovel from "../img/Mote_Hovel.png";
import scarab from "../img/Scarab.png";
import scarabNest from "../img/Scarab_Nest.png";
import sentientBowl from "../img/Sentient_Bowl.png";
import sentientCereal from "../img/Sentient_Cereal.png";
import snowden from "../img/Snowden.png";
import workerBee from "../img/Worker_Bee.png";
import { DropTable12 } from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop as d,
  mkTableDrop as t,
} from "./tools";

const i = getItemMaker("bugs");

export const bugs = [
  i("Fly", fly),
  i("Butterfly", butterfly),
  i("Sentient Cereal", sentientCereal),
  i("Fruitfly", fruitfly),
  i("Mosquisnow", mosquisnow),
  i("Flycicle", flycicle),
  i("Worker Bee", workerBee),
  i("Fairy", fairy),
  i("Scarab", scarab),
  i("Dust Mote", dustMote),
  i("Dream Particulate", dreamParticulate),
  i("Ladybug", ladybug),
  i("Firefly", firefly),
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
];
