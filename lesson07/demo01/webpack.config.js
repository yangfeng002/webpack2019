/**
 *
 * 功能描述: 应用自定义的插件
 * @author    fy
 * @version  [版本号, 2019/12/4 8:47]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
const path = require('path');
const ConsoleLogOnBuildWebpackPlugin = require('./ConsoleLogOnBuildWebpackPlugin');
module.exprots={
   mode:'development',
   plugins:[
       new ConsoleLogOnBuildWebpackPlugin()
   ]

}
