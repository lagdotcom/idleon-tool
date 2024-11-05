import cloudsoundFollower from "../img/Cloudsound_Follower.png";
import timeThingy from "../img/Time_Thingy.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("quest item");

const questItems = [
  i("Cloudsound Follower", cloudsoundFollower),
  i("Time Thingy", timeThingy),
];
export default questItems;
