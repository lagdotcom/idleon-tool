import anvil from "../img/Anvil_Statue.png";
import battleaxe from "../img/Battleaxe_Statue.png";
import beholder from "../img/Beholder_Statue.png";
import boat from "../img/Boat_Statue.png";
import box from "../img/Box_Statue.png";
import bullseye from "../img/Bullseye_Statue.png";
import cauldron from "../img/Cauldron_Statue.png";
import compost from "../img/Compost_Statue.png";
import egg from "../img/Egg_Statue.png";
import ehExPee from "../img/EhExPee_Statue.png";
import essence from "../img/Essence_Statue.png";
import expBook from "../img/Exp_Book_Statue.png";
import feasty from "../img/Feasty_Statue.png";
import health from "../img/Health_Statue.png";
import kachow from "../img/Kachow_Statue.png";
import lumberbob from "../img/Lumberbob_Statue.png";
import mining from "../img/Mining_Statue.png";
import mutton from "../img/Mutton_Statue.png";
import oceanman from "../img/Oceanman_Statue.png";
import olReliable from "../img/Ol_Reliable_Statue.png";
import pecunia from "../img/Pecunia_Statue.png";
import power from "../img/Power_Statue.png";
import seesaw from "../img/Seesaw_Statue.png";
import speed from "../img/Speed_Statue.png";
import spiral from "../img/Spiral_Statue.png";
import stealth from "../img/Stealth_Statue.png";
import thiccSkin from "../img/Thicc_Skin_Statue.png";
import twosoul from "../img/Twosoul_Statue.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("statues");

const statues = [
  i("Power Statue", power),
  i("Speed Statue", speed),
  i("Mining Statue", mining),
  i("Feasty Statue", feasty),
  i("Health Statue", health),
  i("Kachow Statue", kachow),
  i("Lumberbob Statue", lumberbob),
  i("Thicc Skin Statue", thiccSkin),
  i("Oceanman Statue", oceanman),
  i("Ol Reliable Statue", olReliable),
  i("Exp Book Statue", expBook),
  i("Anvil Statue", anvil),
  i("Cauldron Statue", cauldron),
  i("Beholder Statue", beholder),
  i("Bullseye Statue", bullseye),
  i("Box Statue", box),
  i("Twosoul Statue", twosoul),
  i("EhExPee Statue", ehExPee),
  i("Seesaw Statue", seesaw),
  i("Pecunia Statue", pecunia),
  i("Mutton Statue", mutton),
  i("Egg Statue", egg),
  i("Battleaxe Statue", battleaxe),
  i("Spiral Statue", spiral),
  i("Boat Statue", boat),
  i("Compost Statue", compost),
  i("Stealth Statue", stealth),
  i("Essence Statue", essence),
];
export default statues;
