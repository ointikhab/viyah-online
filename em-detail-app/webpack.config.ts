const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",

  devServer: {
    port: 3001,
  },

  entry: "./src/main.js",

  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".js", ".vue"],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),

    new ModuleFederationPlugin({
      name: "venueApp",

      filename: "remoteEntry.js",

      exposes: {
        "./VenueList": "./src/components/VenueList.vue",
      },

      shared: {
        vue: { singleton: true },
        "vue-router": { singleton: true },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};