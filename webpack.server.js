const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/server.js",

  target: "node",

  externals: [nodeExternals()],

  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // use: ["style-loader", "css-loader"]
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
