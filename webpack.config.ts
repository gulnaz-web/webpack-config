import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[contenthash].[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],
};

export default config;
