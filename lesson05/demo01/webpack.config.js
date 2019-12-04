/**
 *
 * 功能描述:
 * @author    fy
 * @version  [版本号, 2019/10/16 8:35]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
const path = require('path');
module.exports = {
    mode:'development',
    //entry:'./src/index.js',//单一入口文件
    entry:{
       index:'./src/index.js',
       home:'./src/home.js',
       register:'./src/register.js',
       detail:'./src/detail.js'
    },
    output:{
       //filename:'bundle.js'
        filename:'[name].[hash:6].js',
        path:path.resolve(__dirname+'/release'),
        publicPath: 'http://cdn.example.com/assets/[hash]/'
    }

}
