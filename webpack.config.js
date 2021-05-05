const path = require("path");
const webpack = require("webpack");

module.exports = {
      entry: path.resolve(__dirname,"./src/index.js"),
      mode:"development",
      output: {
            path: path.resolve(__dirname,"dist"),
            publicPath: "/dist/",
            filename: "bundle.js"
      },
      module:{
            rules: [
                  {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: ["babel-loader"]
                  }
            ]
      },
      resolve: {
            extensions: ["*",".js",".jsx"]
      },
      plugins: [new webpack.HotModuleReplacementPlugin()],
      devServer: {
            contentBase: path.resolve(__dirname,"dist"),
            port:3000,
            hot:true
      }
};