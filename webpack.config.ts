import webpack from "webpack";
import path from "path";
import { buildWebpackConfig, type BuildEnv } from "./config/build";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    paths: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      build: path.resolve(__dirname, "dist"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
    mode,
    isDev,
    port: env.port || 3000,
  });

  return config;
};
