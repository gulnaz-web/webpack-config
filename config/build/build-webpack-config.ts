import { buildDevServer } from "./build-dev-server";
import { buildLoaders } from "./build-loaders";
import { buildPlagins } from "./build-plagins";
import { buildResolvers } from "./build-resolvers";
import { BuildOptions } from "./types";

export const buildWebpackConfig = (options: BuildOptions) => {
  return {
    entry: options.paths.entry,
    mode: options.mode,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: "inline-source-map",
    devServer: buildDevServer(options),
    plugins: buildPlagins(options.paths),
    output: {
      filename: "[contenthash].[name].js",
      path: options.paths.build,
      clean: true,
    },
  };
};
