import Acorn from "../img/Acorn.png";
import amarokSlab from "../img/Amarok_Slab.png";
import beanSlices from "../img/Bean_Slices.png";
import bonemeal from "../img/Bonemeal.png";
import bullfrogHorn from "../img/Bullfrog_Horn.png";
import carrotCube from "../img/Carrot_Cube.png";
import cornKernels from "../img/Corn_Kernels.png";
import frogLeg from "../img/Frog_Leg.png";
import glublinEar from "../img/Glublin_Ear.png";
import goldenPlop from "../img/Golden_Plop.png";
import plank from "../img/Plank.png";
import ratsTail from "../img/Rats_Tail.png";
import redSporeCap from "../img/Red_Spore_Cap.png";
import slimeSludge from "../img/Slime_Sludge.png";
import snakeSkin from "../img/Snake_Skin.png";
import sporeCap from "../img/Spore_Cap.png";
import stick from "../img/Stick.png";
import woodularCircle from "../img/Woodular_Circle.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("monster drop");

const monsterDrops = [
  i("Spore Cap", sporeCap),
  i("Frog Leg", frogLeg),
  i("Bean Slices", beanSlices),
  i("Red Spore Cap", redSporeCap),
  i("Slime Sludge", slimeSludge),
  i("Snake Skin", snakeSkin),
  i("Carrot Cube", carrotCube),
  i("Glublin Ear", glublinEar),
  i("Plank", plank),
  i("Bullfrog Horn", bullfrogHorn),
  i("Corn Kernels", cornKernels),
  i("Golden Plop", goldenPlop),
  i("Rats Tail", ratsTail),
  i("Bonemeal", bonemeal),
  i("Stick", stick),
  i("Woodular Circle", woodularCircle),
  i("Acorn", Acorn),
  i("Amarok Slab", amarokSlab),
];
export default monsterDrops;
