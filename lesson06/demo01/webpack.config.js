const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html文件的插件
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');//拆分成
const ExtractTextPlugin = require("extract-text-webpack-plugin");//拆分style的

module.exports={
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'[name]_[hash:6].js',
        path:path.resolve(__dirname+"/dist")
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
            },
            {
                test:/\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','less-loader']
                })

            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("css/styles.css")
    ]
}
