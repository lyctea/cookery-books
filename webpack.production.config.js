var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,  //在webpack的module部分的loaders里进行配置即可
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader:"css-loader",options: {sourceMap: true, importLoaders: 1}},
                        {loader: 'postcss-loader', options: {sourceMap: 'inline'}},
                    ]
                })
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '我的webpack实践',
            template: __dirname + "/app/index.tmpl.html"
        }),
        new ExtractTextPlugin("[name]-[hash].css"),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        extractLess
    ]
}