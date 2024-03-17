const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => {
  console.log("env:", env);
  console.log("env.production:", env.production);

  return {
    mode: "development",
    devtool: "eval-source-map",
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      hot: true,
      compress: true,
      port: 9000,
      allowedHosts: ["https://ik.imagekit.io/"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "./public"),
            to: path.resolve(__dirname, "dist/public"),
          },
        ],
      }),
    ]
    .concat(
      !env.production
        ? []
        : [
            new MiniCssExtractPlugin({
              filename: "styles.css",
            }),
          ]
    ),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(s(a|c)ss)$/,
          use: [
            !env.production ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: "file-loader",
          options: {
            outputPath: path.resolve(__dirname, "dist/public"),
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
          use: {
            loader: "url-loader",
          },
        },
      ],
    },

    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },

    resolve: {
      extensions: ["*", ".js"],
    },
  };
};
