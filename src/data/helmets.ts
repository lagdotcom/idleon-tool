import amarokHelmet from "../img/Amarok_Helmet.png";
import baseballHat from "../img/Baseball_Hat.png";
import boredBeanie from "../img/Bored_Beanie.png";
import copperHelmet from "../img/Copper_Helmet.png";
import dementiaHelmet from "../img/Dementia_Helmet.png";
import efauntHelmet from "../img/Efaunt_Helmet.png";
import farmerBrim from "../img/Farmer_Brim.png";
import goldHelmet from "../img/Gold_Helmet.png";
import greenHeadband from "../img/Green_Headband.png";
import greyBeret from "../img/Grey_Beret.png";
import ironHelmet from "../img/Iron_Helmet.png";
import leatherCap from "../img/Leather_Cap.png";
import militiaHelm from "../img/Militia_Helm.png";
import birthdayHat from "../img/Party_Hat.png";
import pinkHeadband from "../img/Pink_Headband.png";
import platinumHelmet from "../img/Platinum_Helmet.png";
import propellerCap from "../img/Propeller_Cap.png";
import purpleTupacband from "../img/Purple_Tupacband.png";
import redHeadband from "../img/Red_Headband.png";
import sleekCoif from "../img/Sleek_Coif.png";
import stumpProp from "../img/Stump_Prop.png";
import thiefHood from "../img/Thief_Hood.png";
import topHat from "../img/Top_Hat.png";
import trafficCone from "../img/Traffic_Cone.png";
import vikingCap from "../img/Viking_Cap.png";
import whiteHeadband from "../img/White_Headband.png";
import witchHat from "../img/Witch_Hat.png";
import yellowHeadband from "../img/Yellow_Headband.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("helmet");

const helmets = [
  i("Grey Beret", greyBeret),
  i("Traffic Cone", trafficCone),
  i("Propeller Cap", propellerCap),
  i("Baseball Hat", baseballHat),
  i("Farmer Brim", farmerBrim),
  i("Leather Cap", leatherCap),
  i("Copper Helmet", copperHelmet),
  i("Militia Helm", militiaHelm),
  i("Thief Hood", thiefHood),
  i("Top Hat", topHat),
  i("Birthday Hat", birthdayHat),
  i("Iron Helmet", ironHelmet),
  i("Amarok Helmet", amarokHelmet),
  i("Gold Helmet", goldHelmet),
  i("Platinum Helmet", platinumHelmet),
  i("Viking Cap", vikingCap),
  i("Sleek Coif", sleekCoif),
  i("Witch Hat", witchHat),
  i("Efaunt Helmet", efauntHelmet),
  i("Dementia Helmet", dementiaHelmet),

  i("White Headband", whiteHeadband),
  i("Green Headband", greenHeadband),
  i("Red Headband", redHeadband),
  i("Purple Tupacband", purpleTupacband),
  i("Yellow Headband", yellowHeadband),
  i("Pink Headband", pinkHeadband),
  i("Stump Prop", stumpProp),
  i("Bored Beanie", boredBeanie),
];
export default helmets;
