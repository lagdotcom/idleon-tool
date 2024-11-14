import boringBrick from "../img/Boring_Brick.png";
import chainLink from "../img/Chain_Link.png";
import cueTape from "../img/Cue_Tape.png";
import denseWater from "../img/Dense_Water.png";
import distilledWater from "../img/Distilled_Water.png";
import leatherHide from "../img/Leather_Hide.png";
import lugiBracket from "../img/Lugi_Bracket.png";
import pinionSpur from "../img/Pinion_Spur.png";
import purpleScrew from "../img/Purple_Screw.png";
import pvcPipe from "../img/PVC_Pipe.png";
import tangledCords from "../img/Tangled_Cords.png";
import thingymabob from "../img/Thingymabob.png";
import thread from "../img/Thread.png";
import trustyNails from "../img/Trusty_Nails.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("materials");

export const materials = [
  i("Cue Tape", cueTape),

  i("Thread", thread, "CraftMat1"),
  i("Trusty Nails", trustyNails, "CraftMat5"),
  i("Boring Brick", boringBrick, "CraftMat6"),
  i("Chain Link", chainLink, "CraftMat7"),
  i("Leather Hide", leatherHide, "CraftMat9"),
  i("Pinion Spur", pinionSpur),
  i("Lugi Bracket", lugiBracket),
  i("Purple Screw", purpleScrew),
  i("Thingymabob", thingymabob),
  i("Tangled Cords", tangledCords),
  i("PVC Pipe", pvcPipe),

  i("Distilled Water", distilledWater, "PureWater"),
  i("Dense Water", denseWater),
];

export const materialProduction = [
  "Thread",
  "Trusty Nails",
  "Boring Brick",
  "Chain Link",
  "Leather Hide",
  "Pinion Spur",
  "Lugi Bracket",
  "Purple Screw",
  "Thingymabob",
  "Tangled Cords",
  "PVC Pipe",

  "Distilled Water",
  "Dense Water",
];
