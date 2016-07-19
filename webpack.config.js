path = require('path');
module.exports = {
  context: __dirname + "/front/src",
  entry: {
    jsx: "./index.jsx",
    css: "./main.css",
    html: "./index.html"
  },
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    }
},
  module: {
    preLoaders: [
        //Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"}
    ],
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
