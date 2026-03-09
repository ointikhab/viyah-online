const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist-webpack'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      // Vue SFC
      { test: /\.vue$/, loader: 'vue-loader' },

      // TypeScript
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/], // handle <script lang="ts">
              transpileOnly: true,
            },
          },
        ],
      },

      // CSS / Tailwind
      {
        test: /\.css$/i,
        use: [
          'vue-style-loader', // injects CSS into DOM
          {
            loader: 'css-loader', // interprets @import and url()
            options: { importLoaders: 1 },
          },
          'postcss-loader', // processes Tailwind + autoprefixer
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' }),
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './detailApp': './src/views/VenueDetails/VenueDetails.vue',
      },
      shared: {
        vue: {
          singleton: true,       // Only one Vue instance across MFEs
          eager: true,           // Load immediately
          requiredVersion: '^3.5.28',
        },
      },
    }),
  ],
  devServer: {
    port: 3001,
    historyApiFallback: true,
    hot: true,
  },
};