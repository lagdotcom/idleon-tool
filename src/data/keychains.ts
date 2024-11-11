import eightBallChain from "../img/8_Ball_Chain.png";
import nineBallChain from "../img/9_Ball_Chain.png";
import balloonDogChain from "../img/Balloon_Dog_Chain.png";
import bobGoldPickleChain from "../img/BobGoldPickle_Chain.png";
import cactusChain from "../img/Cactus_Chain.png";
import diamondHonkerChain from "../img/Diamond_Honker_Chain.png";
import dumbphoneChain from "../img/Dumbphone_Chain.png";
import eyeOweEssChain from "../img/Eye_Owe_Ess_Chain.png";
import frozenTartChain from "../img/Frozen_Tart_Chain.png";
import gildedKeyChain from "../img/Gilded_Key_Chain.png";
import hornChain from "../img/Horn_Chain.png";
import keyToDesertChain from "../img/Key_to_Desert_Chain.png";
import keyToMountainsChain from "../img/Key_to_Mountains_Chain.png";
import keyToPurgatoryChain from "../img/Key_to_Purgatory_Chain.png";
import leafyChain from "../img/Leafy_Chain.png";
import mmmDonutChain from "../img/Mmm_Donut_Chain.png";
import negative7Chain from "../img/Negative_7_Chain.png";
import piggyChain from "../img/Piggy_Chain.png";
import pincerHandChain from "../img/Pincer_Hand_Chain.png";
import redSneakerChain from "../img/Red_Sneaker_Chain.png";
import relicChain from "../img/Relic_Chain.png";
import rusticKeyChain from "../img/Rustic_Key_Chain.png";
import simpleKeyChain from "../img/Simple_Key_Chain.png";
import spiritlordHornChain from "../img/Spiritlord_Horn_Chain.png";
import starBlobulyteGalaxyChain from "../img/Star_Blobulyte_Galaxy_Chain.png";
import sushiChain from "../img/Sushi_Chain.png";
import tacoChain from "../img/Taco_Chain.png";
import timeCandyChain from "../img/Time_Candy_Chain.png";
import wartoothChain from "../img/Wartooth_Chain.png";
import whatamelonChain from "../img/Whatamelon_Chain.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("keychains");
export const keychains = [
  i("Simple Key Chain", simpleKeyChain),
  i("Leafy Chain", leafyChain),
  i("Red Sneaker Chain", redSneakerChain),
  i("Wartooth Chain", wartoothChain),
  i("8 Ball Chain", eightBallChain),
  i("Piggy Chain", piggyChain),
  i("Dumbphone Chain", dumbphoneChain),
  i("Horn Chain", hornChain),
  i("Rustic Key Chain", rusticKeyChain),
  i("Taco Chain", tacoChain),
  i("Cactus Chain", cactusChain),
  i("Relic Chain", relicChain),
  i("Balloon Dog Chain", balloonDogChain),
  i("Frozen Tart Chain", frozenTartChain),
  i("Whatamelon Chain", whatamelonChain),
  i("9 Ball Chain", nineBallChain),
  i("Pincer Hand Chain", pincerHandChain),
  i("Gilded Key Chain", gildedKeyChain),
  i("Sushi Chain", sushiChain),
  i("Time Candy Chain", timeCandyChain),
  i("Star Blobulyte Galaxy Chain", starBlobulyteGalaxyChain),
  i("Mmm Donut Chain", mmmDonutChain),
  i("Negative 7 Chain", negative7Chain),
  i("Diamond Honker Chain", diamondHonkerChain),
  i("BobGoldPickle Chain", bobGoldPickleChain),
  i("Eye Owe Ess Chain", eyeOweEssChain),
  i("Key to Desert Chain", keyToDesertChain),
  i("Key to Mountains Chain", keyToMountainsChain),
  i("Key to Purgatory Chain", keyToPurgatoryChain),
  i("Spiritlord Horn Chain", spiritlordHornChain),
];
