/**
 *
 * 功能描述: 自定义的插件--js文件
 * @author    fy
 * @version  [版本号, 2019/12/4 8:53]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
        });
    }
}
module.exports = ConsoleLogOnBuildWebpackPlugin;
