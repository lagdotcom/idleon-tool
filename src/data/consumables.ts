import _1HRTimeCandy from "../img/1_HR_Time_Candy.png";
import _2HRTimeCandy from "../img/2_HR_Time_Candy.png";
import _4HRTimeCandy from "../img/4_HR_Time_Candy.png";
import _12HRTimeCandy from "../img/12_HR_Time_Candy.png";
import _24HRTimeCandy from "../img/24_HR_Time_Candy.png";
import _72HRTimeCandy from "../img/72_HR_Time_Candy.png";
import cosmicTimeCandy from "../img/Cosmic_Time_Candy.png";
import largeExperienceBalloon from "../img/Large_Experience_Balloon.png";
import mediumExperienceBalloon from "../img/Medium_Experience_Balloon.png";
import smallExperienceBalloon from "../img/Small_Experience_Balloon.png";
import spookyTimeCandy from "../img/Spooky_Time_Candy.png";
import steamyTimeCandy from "../img/Steamy_Time_Candy.png";
import { getItemMaker } from "./tools";

const candy = getItemMaker("time candy");
const balloon = getItemMaker("exp balloons");

export const timeCandy = [
  candy("1 HR Time Candy", _1HRTimeCandy),
  candy("2 HR Time Candy", _2HRTimeCandy),
  candy("4 HR Time Candy", _4HRTimeCandy),
  candy("12 HR Time Candy", _12HRTimeCandy),
  candy("24 HR Time Candy", _24HRTimeCandy),
  candy("72 HR Time Candy", _72HRTimeCandy),
  candy("Steamy Time Candy", steamyTimeCandy),
  candy("Spooky Time Candy", spookyTimeCandy),
  candy("Cosmic Time Candy", cosmicTimeCandy),
];

export const expBalloons = [
  balloon("Small Experience Balloon", smallExperienceBalloon),
  balloon("Medium Experience Balloon", mediumExperienceBalloon),
  balloon("Large Experience Balloon", largeExperienceBalloon),
];
