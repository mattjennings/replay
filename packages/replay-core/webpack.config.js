const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader?configFile=tsconfig.json",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "replay-core.min.js",
    path: path.resolve(__dirname, "umd"),
    library: "replay",
    libraryTarget: "umd",
  },
};
