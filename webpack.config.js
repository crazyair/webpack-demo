const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: "webpack-demo",
      filename: "demo.js",
      exposes: {
        "./demo": "./src/index.js",
      },
    }),
  ],
};
