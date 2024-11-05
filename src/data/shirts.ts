import amarokBodyplate from "../img/Amarok_Bodyplate.png";
import blackTee from "../img/Black_Tee.png";
import blueTee from "../img/Blue_Tee.png";
import copperPlatebody from "../img/Copper_Platebody.png";
import dementiaBody from "../img/Dementia_Body.png";
import efauntRibcage from "../img/Efaunt_Ribcage.png";
import feralLeathering from "../img/Feral_Leathering.png";
import furShirt from "../img/Fur_Shirt.png";
import furledRobes from "../img/Furled_Robes.png";
import goldPlatebody from "../img/Gold_Platebody.png";
import greenTee from "../img/Green_Tee.png";
import hideShirt from "../img/Hide_Shirt.png";
import ironPlatebody from "../img/Iron_Platebody.png";
import mCRTshirt from "../img/MCR_Tshirt.png";
import memberHoodie from "../img/Member_Hoodie.png";
import orangeTee from "../img/Orange_Tee.png";
import planktop from "../img/Planktop.png";
import platinumPlatbody from "../img/Platinum_Platbody.png";
import purpleTee from "../img/Purple_Tee.png";
import sporeTee from "../img/Spore_Tee.png";
import studdedHide from "../img/Studded_Hide.png";
import tatteredCloth from "../img/Tattered_Cloth.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("shirt");

const shirts = [
  i("Spore Tee", sporeTee),
  i("Black Tee", blackTee),
  i("Orange Tee", orangeTee),
  i("Green Tee", greenTee),
  i("Purple Tee", purpleTee),
  i("Blue Tee", blueTee),
  i("Copper Platebody", copperPlatebody),
  i("Planktop", planktop),
  i("Iron Platebody", ironPlatebody),
  i("Hide Shirt", hideShirt),
  i("Tattered Cloth", tatteredCloth),
  i("Fur Shirt", furShirt),
  i("MCR Tshirt", mCRTshirt),
  i("Amarok Bodyplate", amarokBodyplate),
  i("Gold Platebody", goldPlatebody),
  i("Studded Hide", studdedHide),
  i("Feral Leathering", feralLeathering),
  i("Furled Robes", furledRobes),
  i("Platinum Platbody", platinumPlatbody),
  i("Dementia Body", dementiaBody),
  i("Member Hoodie", memberHoodie),
  i("Efaunt Ribcage", efauntRibcage),
];
export default shirts;
