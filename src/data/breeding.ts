import bolsteredDNASplicer from "../img/Bolstered_DNA_Splicer.png";
import doubleBarreledDNASplicer from "../img/Double_Barreled_DNA_Splicer.png";
import ergonomicDNASplicer from "../img/Ergonomic_DNA_Splicer.png";
import sappyDNASplicer from "../img/Sappy_DNA_Splicer.png";
import { getItemMaker } from "./tools";

const splicer = getItemMaker("dna splicers");
export const dnaSplicers = [
  splicer("Sappy DNA Splicer", sappyDNASplicer),
  splicer("Bolstered DNA Splicer", bolsteredDNASplicer),
  splicer("Double Barreled DNA Splicer", doubleBarreledDNASplicer),
  splicer("Ergonomic DNA Splicer", ergonomicDNASplicer),
];
