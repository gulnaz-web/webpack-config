import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build";

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  paths: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  },
  mode,
  isDev,
  port: 3000,
});

export default config;
