module.exports = {
  entry: [
    "./src/index.tsx",
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "dist"
  },

  devtool: "soruce-map",

  resolve: {
    extensions: ["", ".webpack.js ", ".web.js ", ".ts ", ".tsx", ".js"]
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { test: /\.css?$/, loaders: ["style", 'css', 'sass'] },
      { test: /\.(jpeg|jpg|png)?$/, loaders: 'url-loader' }
    ],

    preLoaders: [{
      test: /\.js$/,
      loader: "source-map-loader"
    }],

    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
  }
}
