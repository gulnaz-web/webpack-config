import { buildLoaders } from "./build-loaders";
import { buildPlagins } from "./build-plagins";
import { buildResolvers } from "./build-resolvers";
import { buildOptions } from "./types";

export const buildWebpackConfig = (options: buildOptions) => {
  return {
    entry: options.paths.entry,
    mode: options.mode,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[contenthash].[name].js",
      path: options.paths.build,
      clean: true,
    },
    plugins: buildPlagins(options.paths),
  };
};
