path = require('path');
module.exports = {
  context: __dirname + "/front/src",
  entry: {
    jsx: "./index.jsx",
    css: "./main.css",
    html: "./index.html",
    mp4: './test.mp4'
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
      { test: /\.html$/, loaders: ["html?attrs[]=video:src","file?name=[name].[ext]"] },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.mp4$/, loader: 'url?limit=10000&mimetype=video/mp4' },
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
