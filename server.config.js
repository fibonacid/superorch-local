//
//  This webpack config is used to build only the server script
//

const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/server/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.bundle.js"
  },
  plugins: [new NodemonPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
