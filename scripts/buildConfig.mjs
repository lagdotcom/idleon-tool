/*global console,process*/

import { config as loadDotEnvConfig } from "dotenv";
import { postcssModules, sassPlugin } from "esbuild-sass-plugin";

/**
 *
 * @param {string|undefined} nodeEnv NODE_ENV value
 * @returns {import('esbuild').BuildOptions}
 */
export default function getBuildConfig(nodeEnv = "development") {
  const envConfig = loadDotEnvConfig();
  const define = {
    [`process.env.APP_BUILD_VERSION`]: JSON.stringify(
      process.env.npm_package_version
    ),
    [`process.env.NODE_ENV`]: JSON.stringify(nodeEnv),
  };

  if (envConfig.parsed) {
    for (const k in envConfig.parsed)
      define[`process.env.${k}`] = JSON.stringify(process.env[k]);
    console.log(`[env] loaded ${Object.keys(define).length} values`);
  } else
    console.warn(
      `[env] failed to load, ${envConfig.error?.message ?? "unknown error"}`
    );

  return {
    entryPoints: ["src/index.tsx"],
    bundle: true,
    sourcemap: true,
    outfile: "docs/bundle.js",
    define,
    // minify: true,
    plugins: [
      sassPlugin({
        filter: /\.module\.scss$/,
        transform: postcssModules({ basedir: "./src" }),
      }),
      sassPlugin({
        filter: /\.scss$/,
      }),
    ],
    loader: {
      ".gif": "file",
      ".png": "file",
    },
  };
}
