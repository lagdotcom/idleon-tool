/*global console*/

import { context } from "esbuild";

import getBuildConfig from "./buildConfig.mjs";
import { argv } from "process";

const mode = argv.includes("production") ? "production" : "development";
console.log(`Watching in ${mode} mode.`);

const result = await context(getBuildConfig(mode));
const serve = await result.serve({ servedir: "docs", port: 8080 });
console.log(
  `Serving: http://${serve.host === "0.0.0.0" ? "localhost" : serve.host}:${
    serve.port
  }`
);
