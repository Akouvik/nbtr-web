const path = require("path")
const webpack = require("webpack")

module.exports = {
    devServer:{
        historyApiFallback: true,
        
    },
    entry: path.resolve(__dirname, "./src/index.js")
}