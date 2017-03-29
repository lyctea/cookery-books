var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    devtool: 'eval-source-map', //找到出错了的地方对应的源代码的位置
    entry: __dirname + "/app/main.js", //唯一的入口文件
    output: {
        path: __dirname + "/build", //打包后文件存放的路径
        filename: "[name]-[hash].js",  //打包后输出文件的文件名
    },
    resolve: {
        extensions: ['.js', '.jsx', 'css','.json','less']
    },
    module: {   //在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
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
                        {loader: 'postcss-loader', options: {sourceMap: 'inline'}}
                    ]
                })
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                devServer: {
                    contentBase: "./public", //本地服务器所加载的页面所在的目录
                    colors: true,
                    historyApiFallback: true, //不跳转
                    inline: true //实时刷新
                }
            }
        }),
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"  //new 一个这个插件的实例，并传入相关的参数
        }),
        new ExtractTextPlugin("[name]-[hash].css")
    ],

}