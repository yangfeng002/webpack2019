const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");//特殊处理
/*
* 1.devServer配置，
* 2.插件HotModuleReplacementPlugin
* 3.
* */
module.exports ={
    entry:'./src/index.js',
    mode:'development',
    devServer:{
        contentBase:path.join(__dirname+'./dist'),
        hot:true
    },
    plugins:[
      //new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title:'Hot Module Replacement'//html模板的title标签内容
        //template:'./src/index.html' //设置src下的html文件为模板
      })

    ]
}
