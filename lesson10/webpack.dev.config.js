const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//特殊处理
const HtmlWebapckPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dist_dir = 'dist_dev';

module.exports={
    mode:"development",
    entry:{
      //入口配置
      index:'./src/index.js'
    },
    output:{
      //输出
        path:path.resolve(__dirname,dist_dir)

    },
    module:{
        //配置loader加载器
        rules:[
            {
                //对.css结尾的文件处理
                test:/\.css$/,
                //use:['style-loader','css-loader'] //无法提取css文件出来
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',//编译后用什么来提取css文件
                    use:'css-loader',//用什么样的loader去编译css文件，由于源文件是css文件，所以用css-loader

                })
            },
            {
                //对.css结尾的文件处理
                test:/\.less$/,
                //use:['style-loader','css-loader','less-loader']
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:['css-loader','less-loader']
                })
            },
            {
                //对.css结尾的文件处理
                test:/\.(png|jpg|svg)$/,
                use:['file-loader']
            }

        ]
    },
    plugins:[
        new CleanWebpackPlugin(),//实例化，参数为目录，每次编译会清除目录，重新建立目录
        new HtmlWebapckPlugin({
            template:'./src/index.html',
            title:'Dev Mode'
        }),
        new ExtractTextPlugin({
            filename:'style.css'
        })
    ]

}
