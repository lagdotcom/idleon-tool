import amarok from "../img/Amarok_Card.png";
import babaYaga from "../img/Baba_Yaga_Card.png";
import babyBoa from "../img/Baby_Boa_Card.png";
import boop from "../img/Boop_Card.png";
import boredBean from "../img/Bored_Bean_Card.png";
import carrotman from "../img/Carrotman_Card.png";
import crystalCarrot from "../img/Crystal_Carrot_Card.png";
import drDefecaus from "../img/Dr_Defecaus_Card.png";
import frog from "../img/Frog_Card.png";
import gigafrog from "../img/Gigafrog_Card.png";
import glublin from "../img/Glublin_Card.png";
import greenMushroom from "../img/Green_Mushroom_Card.png";
import nutto from "../img/Nutto_Card.png";
import poop from "../img/Poop_Card.png";
import rat from "../img/Rat_Card.png";
import redMushroom from "../img/Red_Mushroom_Card.png";
import slime from "../img/Slime_Card.png";
import walkingStick from "../img/Walking_Stick_Card.png";
import wodeBoard from "../img/Wode_Board_Card.png";
import woodMushroom from "../img/Wood_Mushroom_Card.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("card");

const cards = [
  i("Green Mushroom Card", greenMushroom),
  i("Red Mushroom Card", redMushroom),
  i("Frog Card", frog),
  i("Bored Bean Card", boredBean),
  i("Slime Card", slime),
  i("Baby Boa Card", babyBoa),
  i("Carrotman Card", carrotman),
  i("Glublin Card", glublin),
  i("Wode Board Card", wodeBoard),
  i("Gigafrog Card", gigafrog),
  i("Poop Card", poop),
  i("Rat Card", rat),
  i("Boop Card", boop),
  i("Walking Stick Card", walkingStick),
  i("Nutto Card", nutto),
  i("Wood Mushroom Card", woodMushroom),
  i("Crystal Carrot Card", crystalCarrot),

  i("Baba Yaga Card", babaYaga),
  i("Dr Defecaus Card", drDefecaus),
  i("Amarok Card", amarok),
];
export default cards;
