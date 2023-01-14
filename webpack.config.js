// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: false,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};

// export const mode = "development";
// export const entry = "./src/index.js";
// export const output = {
//   path: _resolve(__dirname, "public"),
//   filename: "main.js",
// };
// export const target = "web";
// export const devServer = {
//   port: "3000",
//   static: ["./public"],
//   open: false,
//   hot: true,
//   liveReload: true,
// };
// export const resolve = {
//   extensions: [".js", ".jsx", ".json"],
// };
// export const module = {
//   rules: [
//     {
//       test: /\.(js|jsx)$/,
//       exclude: /node_modules/,
//       use: "babel-loader",
//     },
//   ],
// };
