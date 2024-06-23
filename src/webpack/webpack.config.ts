import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration, container, LibraryOptions } from "webpack";
import * as webpackDevServer from "webpack-dev-server";
import { CommonConfig } from "./types";

const createWebpackConfig = ({
  port,
  ...moduleFederationOptions
}: CommonConfig): Configuration => ({
  entry: "./src/index",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new container.ModuleFederationPlugin(moduleFederationOptions),
  ],
  devServer: {
    port,
    watchFiles: "./dist",
  },
});

export default createWebpackConfig;
