//
//  This webpack config is used to build only the server script
//

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "build/static/js"),
    filename: "server.[chunkhash:8].js"
  },
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
