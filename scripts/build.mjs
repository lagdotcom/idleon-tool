/*global console*/

import { build } from "esbuild";

import getBuildConfig from "./buildConfig.mjs";

const result = await build(getBuildConfig("production"));

if (result.errors.length) {
  console.log("--- ERRORS ---");
  for (const err of result.errors) console.log(err);
}

if (result.warnings.length) {
  console.log("--- WARNINGS ---");
  for (const warn of result.warnings) console.log(warn);
}

if (result.metafile) {
  console.log("--- BUILD SUCCESSFUL ---");
  console.log(`INPUTS: ${Object.keys(result.metafile.inputs).join(", ")}`);
  console.log(`OUTPUTS: ${Object.keys(result.metafile.outputs).join(", ")}`);
}
