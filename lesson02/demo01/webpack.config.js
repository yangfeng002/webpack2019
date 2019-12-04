/**
 *
 * 功能描述:
 * @author    fy
 * @version  [版本号, 2019/10/12 9:20]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
const HtmlWebpackPlugin  = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    plugins:[
        new HtmlWebpackPlugin()
    ]
}
