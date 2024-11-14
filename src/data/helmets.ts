import _3rdAnniversaryIceCreamTopper from "../img/3rd_Anniversary_Ice_Cream_Topper.png";
import acornTopper from "../img/Acorn_Topper.png";
import adornmentOfTheHighPriest from "../img/Adornment_of_the_High_Priest.png";
import alienHeadband from "../img/Alien_Headband.png";
import amarokHelmet from "../img/Amarok_Helmet.png";
import appleLaunchHat from "../img/Apple_Launch_Hat.png";
import baseballHat from "../img/Baseball_Hat.png";
import bigPrettyBow from "../img/Big_Pretty_Bow.png";
import boredBeanie from "../img/Bored_Beanie.png";
import bunnyEars from "../img/Bunny_Ears.png";
import chizoarHelmet from "../img/Chizoar_Helmet.png";
import conquistadorPlume from "../img/Conquistador_Plume.png";
import copperHelmet from "../img/Copper_Helmet.png";
import cowboGalloneer from "../img/Cowbo_Galloneer.png";
import crownOfTheGods from "../img/Crown_of_the_Gods.png";
import dementiaHelmet from "../img/Dementia_Helmet.png";
import diabolicalHeadcase from "../img/Diabolical_Headcase.png";
import efauntHelmet from "../img/Efaunt_Helmet.png";
import farmerBrim from "../img/Farmer_Brim.png";
import funnyHat from "../img/Funny_Hat.png";
import goldHelmet from "../img/Gold_Helmet.png";
import grandmaDisguise from "../img/Grandma_Disguise.png";
import greenHeadband from "../img/Green_Headband.png";
import greyBeret from "../img/Grey_Beret.png";
import honkerHat from "../img/Honker_Hat.png";
import iceGuardHelmet from "../img/Ice_Guard_Helmet.png";
import ironHelmet from "../img/Iron_Helmet.png";
import jar from "../img/Jar.png";
import leatherCap from "../img/Leather_Cap.png";
import lustreVeil from "../img/Lustre_Veil.png";
import magmaCoreHeaddress from "../img/Magma_Core_Headdress.png";
import marbiglassHeaddress from "../img/Marbiglass_Headdress.png";
import markOfMember from "../img/Mark_of_Member.png";
import meteorhead from "../img/Meteorhead.png";
import militiaHelm from "../img/Militia_Helm.png";
import murmilloHelm from "../img/Murmillo_Helm.png";
import nugetCakeFedora from "../img/Nuget_Cake_Fedora.png";
import paperBoat from "../img/Paper_Boat.png";
import birthdayHat from "../img/Party_Hat.png";
import pinkHeadband from "../img/Pink_Headband.png";
import platinumHelmet from "../img/Platinum_Helmet.png";
import propellerCap from "../img/Propeller_Cap.png";
import purpleTupacband from "../img/Purple_Tupacband.png";
import realCivilEngineerHelmet from "../img/Real_Civil_Engineer_Helmet.png";
import redHeadband from "../img/Red_Headband.png";
import royalTurban from "../img/Royal_Turban.png";
import santaHat from "../img/Santa_Hat.png";
import shinyBoredBeanie from "../img/Shiny_Bored_Beanie.png";
import skulledHelmetOfTheDivine from "../img/Skulled_Helmet_of_the_Divine.png";
import sleekCoif from "../img/Sleek_Coif.png";
import steamCap from "../img/Steam_Cap.png";
import stumpProp from "../img/Stump_Prop.png";
import summerShell from "../img/Summer_Shell.png";
import theCrowPerch from "../img/The_Crow_Perch.png";
import thiefHood from "../img/Thief_Hood.png";
import thinVeilOfTheTroll from "../img/Thin_Veil_of_The_Troll.png";
import topHat from "../img/Top_Hat.png";
import trafficCone from "../img/Traffic_Cone.png";
import vikingCap from "../img/Viking_Cap.png";
import voidImperiumHelmet from "../img/Void_Imperium_Helmet.png";
import whiteHeadband from "../img/White_Headband.png";
import witchHat from "../img/Witch_Hat.png";
import yellowHeadband from "../img/Yellow_Headband.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("helmets");

const helmets = [
  i("Grey Beret", greyBeret),
  i("Traffic Cone", trafficCone),
  i("Propeller Cap", propellerCap),
  i("Baseball Hat", baseballHat),
  i("Farmer Brim", farmerBrim),
  i("Leather Cap", leatherCap),
  i("Copper Helmet", copperHelmet, "EquipmentHats17"),
  i("Militia Helm", militiaHelm, "EquipmentHats20"),
  i("Thief Hood", thiefHood, "EquipmentHats3"),
  i("Top Hat", topHat),
  i("Birthday Hat", birthdayHat),
  i("Iron Helmet", ironHelmet, "EquipmentHats18"),
  i("Amarok Helmet", amarokHelmet),
  i("Gold Helmet", goldHelmet),
  i("Platinum Helmet", platinumHelmet),
  i("Viking Cap", vikingCap),
  i("Sleek Coif", sleekCoif),
  i("Witch Hat", witchHat),
  i("Efaunt Helmet", efauntHelmet),
  i("Dementia Helmet", dementiaHelmet),
  i("Void Imperium Helmet", voidImperiumHelmet),
  i("Mark of Member", markOfMember),
  i("Murmillo Helm", murmilloHelm),
  i("Conquistador Plume", conquistadorPlume),
  i("Adornment of the High Priest", adornmentOfTheHighPriest),
  i("Chizoar Helmet", chizoarHelmet),
  i("Lustre Veil", lustreVeil),
  i("Diabolical Headcase", diabolicalHeadcase),
  i("Thin Veil of The Troll", thinVeilOfTheTroll),
  i("Magma Core Headdress", magmaCoreHeaddress),
  i("Skulled Helmet of the Divine", skulledHelmetOfTheDivine),
  i("Marbiglass Headdress", marbiglassHeaddress),
  i("Crown of the Gods", crownOfTheGods),
  i("White Headband", whiteHeadband),
  i("Green Headband", greenHeadband),
  i("Red Headband", redHeadband),
  i("Purple Tupacband", purpleTupacband),
  i("Yellow Headband", yellowHeadband, "EquipmentHats9"),
  i("Pink Headband", pinkHeadband),
  i("Stump Prop", stumpProp, "EquipmentHats4Choppin"),
  i("Bored Beanie", boredBeanie),
  i("Shiny Bored Beanie", shinyBoredBeanie),
  i("Alien Headband", alienHeadband),
  i("Grandma Disguise", grandmaDisguise),
  i("Paper Boat", paperBoat),
  i("Cowbo Galloneer", cowboGalloneer),
  i("Jar", jar),
  i("Royal Turban", royalTurban),
  i("Acorn Topper", acornTopper),
  i("Nuget Cake Fedora", nugetCakeFedora),
  i("Honker Hat", honkerHat),
  i("Real Civil Engineer Helmet", realCivilEngineerHelmet),
  i("The Crow Perch", theCrowPerch),

  i("Ice Guard Helmet", iceGuardHelmet),
  i("Big Pretty Bow", bigPrettyBow),
  i("Bunny Ears", bunnyEars),
  i("Summer Shell", summerShell),
  i("Santa Hat", santaHat),
  i("3rd Anniversary Ice Cream Topper", _3rdAnniversaryIceCreamTopper),
  i("Steam Cap", steamCap),
  i("Apple Launch Hat", appleLaunchHat),
  i("Funny Hat", funnyHat),
  i("Meteorhead", meteorhead),
];
export default helmets;
