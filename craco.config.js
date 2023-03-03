const path = require("path");
const CracoLessPlugin = require("craco-less");
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");
module.exports = {
  // ...
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
    plugins: {
      add: [
        new WindiCSSWebpackPlugin({
          virtualModulePath: "src",
        }),
      ],
    },
  },
};
