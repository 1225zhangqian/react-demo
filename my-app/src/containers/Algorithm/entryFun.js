const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const getCSSModuleLocalIdent = require('../.storybook/getCSSModuleLocalIdent');
const { version, name, description } = require("../package.json");
const LOGO = `

  SFX

  
`
const ScssModuleRegex = /\.module\.scss$/;

function hasIndexJs(dir) {
  let dirs = [];
  try {
    dirs = fs.readdirSync(dir);
  } catch (e) {
    dirs = null;
  }
  return dirs && (dirs.includes('index.js') || dirs.includes('index.jsx'));
}
const getPath = function (entryDir) {
  let dirs = fs.readdirSync(entryDir);

  const result = {};
  dirs = dirs.filter(dir => {
    return hasIndexJs(path.resolve(entryDir, dir));
  }).forEach(dir => {
    result[dir] = path.resolve(entryDir, dir);
  });
  return result;
}
const basicEntry = getPath('components/Basic')
const businessEntry = getPath('components/Business')
const config = {
  mode: "production",
  entry: {
    ...basicEntry, ...businessEntry,
    ...{ [name]: ["./components/index.js"] }
  },

  //umd module packege
  output: {
    library: name,
    libraryTarget: "umd",
    umdNamedDefine: true,
    // path: path.join(process.cwd(), "dist"),
    filename: "[name].min.js",
    chunkFilename: '[name].bundle.js',
  },
  //react  react-dom do not package
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    "react-router-dom": {
      root: "react-router-dom",
      commonjs2: "react-router-dom",
      commonjs: "react-router-dom",
      amd: "react-router-dom"
    },
    "react-cropper": {
      root: "react-cropper",
      commonjs2: "react-cropper",
      commonjs: "react-cropper",
      amd: "react-cropper"
    },
    reactstrap: {
      root: "reactstrap",
      commonjs2: "reactstrap",
      commonjs: "reactstrap",
      amd: "reactstrap"
    },
    bootstrap: {
      root: "bootstrap",
      commonjs2: "bootstrap",
      commonjs: "bootstrap",
      amd: "bootstrap"
    },
    lodash: {
      root: "lodash",
      commonjs2: "lodash",
      commonjs: "lodash",
      amd: "lodash"
    },
    axios: {
      root: "axios",
      commonjs2: "axios",
      commonjs: "axios",
      amd: "axios"
    },
    "@sfx/icons": {
      root: "@sfx/icons",
      commonjs2: "@sfx/icons",
      commonjs: "@sfx/icons",
      amd: "@sfx/icons"
    },
    "echarts": {
      root: "echarts",
      commonjs2: "echarts",
      commonjs: "echarts",
      amd: "echarts"
    },
    "echarts-for-react": {
      root: "echarts-for-react",
      commonjs2: "echarts-for-react",
      commonjs: "echarts-for-react",
      amd: "echarts-for-react"
    },
    "react-dates": {
      root: "react-dates",
      commonjs2: "react-dates",
      commonjs: "react-dates",
      amd: "react-dates"
    },
    root: 'moment',
    commonjs2: 'moment',
    commonjs: 'moment',
    amd: 'moment'
  },
  resolve: {
    enforceExtension: false,
    extensions: [".js", ".jsx", ".json", ".scss", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: "/node_modules/",
        include: [path.resolve("components")]
      },
      {
        test: /\.(sc|c)ss$/,
        exclude: ScssModuleRegex,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'

        ],
      },
      {
        test: ScssModuleRegex,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: {
                getLocalIdent: (loaderContext, localIdentName, localName, options) => {
                  return localName === 'sfx-react-ui-theme' ?
                    localName :
                    getCSSModuleLocalIdent(loaderContext, localIdentName, localName, options);
                }
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              javascriptEnabled: true,
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|cur|ico|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1000,
              name: "images/[name][hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: false
          },
        }
      }),
      new OptimizeCSSAssetsPlugin({
        // express css   ExtractTextPlugin 
        // cssProcessor: require("cssnano"),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      })
    ],
    noEmitOnErrors: true,
  },
  plugins: [
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].min.css"
    }),
    // version info
    new webpack.BannerPlugin(` \n ${name} v${version} \n ${description} \n ${LOGO}\n`),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      __DEBUG__: false,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};

module.exports = config;