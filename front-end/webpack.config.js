var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  mode: "development",
  entry: ["./src/index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      assets: path.resolve(__dirname, "./src/assets"),
      screen: path.resolve(__dirname, "./src/screen"),
      constants: path.resolve(__dirname, "./src/constants"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        include: path.join(__dirname, "src"),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        // test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        test: /\.css$/i,
        loader: "style-loader!css-loader",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
