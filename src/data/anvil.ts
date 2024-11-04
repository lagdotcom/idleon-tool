import boringBrick from "../img/Boring_Brick.png";
import chainLink from "../img/Chain_Link.png";
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

const i = getItemMaker("production");

const productionItems = [
  i("Thread", thread),
  i("Trusty Nails", trustyNails),
  i("Boring Brick", boringBrick),
  i("Chain Link", chainLink),
  i("Leather Hide", leatherHide),
  i("Pinion Spur", pinionSpur),
  i("Lugi Bracket", lugiBracket),
  i("Purple Screw", purpleScrew),
  i("Thingymabob", thingymabob),
  i("Tangled Cords", tangledCords),
  i("PVC Pipe", pvcPipe),
];
export default productionItems;
