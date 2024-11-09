import butterfly from "../img/Butterfly.png";
import dreamParticulate from "../img/Dream_Particulate.png";
import dustMote from "../img/Dust_Mote.png";
import fairy from "../img/Fairy.png";
import firefly from "../img/Firefly.png";
import fly from "../img/Fly.png";
import flycicle from "../img/Flycicle.png";
import fruitfly from "../img/Fruitfly.png";
import ladybug from "../img/Ladybug.png";
import mosquisnow from "../img/Mosquisnow.png";
import scarab from "../img/Scarab.png";
import sentientCereal from "../img/Sentient_Cereal.png";
import workerBee from "../img/Worker_Bee.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("bugs");

const bugs = [
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
export default bugs;
