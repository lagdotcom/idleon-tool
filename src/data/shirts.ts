import amarokBodyplate from "../img/Amarok_Bodyplate.png";
import blackTee from "../img/Black_Tee.png";
import blueTee from "../img/Blue_Tee.png";
import chizoarBodyplate from "../img/Chizoar_Bodyplate.png";
import copperPlatebody from "../img/Copper_Platebody.png";
import damascusPlates from "../img/Damascus_Plates.png";
import dementiaBody from "../img/Dementia_Body.png";
import diabolicalAbdomen from "../img/Diabolical_Abdomen.png";
import efauntRibcage from "../img/Efaunt_Ribcage.png";
import elegantineRobes from "../img/Elegantine_Robes.png";
import evergreenWraps from "../img/Evergreen_Wraps.png";
import feralLeathering from "../img/Feral_Leathering.png";
import furShirt from "../img/Fur_Shirt.png";
import furledRobes from "../img/Furled_Robes.png";
import goldPlatebody from "../img/Gold_Platebody.png";
import greenTee from "../img/Green_Tee.png";
import hideShirt from "../img/Hide_Shirt.png";
import ironPlatebody from "../img/Iron_Platebody.png";
import lustreChestplate from "../img/Lustre_Chestplate.png";
import magmaCoreWavemaille from "../img/Magma_Core_Wavemaille.png";
import marbiglassTunic from "../img/Marbiglass_Tunic.png";
import mCRTshirt from "../img/MCR_Tshirt.png";
import memberHoodie from "../img/Member_Hoodie.png";
import orangeTee from "../img/Orange_Tee.png";
import planktop from "../img/Planktop.png";
import platinumPlatbody from "../img/Platinum_Platbody.png";
import purpleTee from "../img/Purple_Tee.png";
import robeOfTheGods from "../img/Robe_of_the_Gods.png";
import serratedChestOfTheDivine from "../img/Serrated_Chest_of_the_Divine.png";
import sporeTee from "../img/Spore_Tee.png";
import studdedHide from "../img/Studded_Hide.png";
import tatteredCloth from "../img/Tattered_Cloth.png";
import trollishGarb from "../img/Trollish_Garb.png";
import voidImperiumPlatebody from "../img/Void_Imperium_Platebody.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("shirts");

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
  i("Void Imperium Platebody", voidImperiumPlatebody),
  i("Damascus Plates", damascusPlates),
  i("Evergreen Wraps", evergreenWraps),
  i("Elegantine Robes", elegantineRobes),
  i("Chizoar Bodyplate", chizoarBodyplate),
  i("Lustre Chestplate", lustreChestplate),
  i("Diabolical Abdomen", diabolicalAbdomen),
  i("Trollish Garb", trollishGarb),
  i("Magma Core Wavemaille", magmaCoreWavemaille),
  i("Serrated Chest of the Divine", serratedChestOfTheDivine),
  i("Marbiglass Tunic", marbiglassTunic),
  i("Robe of the Gods", robeOfTheGods),
];
export default shirts;
