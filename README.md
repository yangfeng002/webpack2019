# webapck2019项目深入学习
推荐安装方式（npm install --registry=https://registry.npm.taobao.org）

 ## 20191011
 
 1.局部安装webpack wepack cli
  
 ```bash
    npm install webpack webpack-cli --save-dev
    
```
     
 2.wepack打包命令
  ```bash
   手动打包--切换到指定的目录
   webpack index.js --mode development
 
   安装完脚手架打包
    webpack
  
```
  
## 20191012

1.初始化package.json,简练方式
  ```bash
  npm init -y    
 ```
   
   
2.本地依赖安装webpack和webpack-cli  
 ```bash
 npm install -D webpack webpack-cli
 
 ``` 
  
  
3.打包命令
  ```bash
   npm run build   
   
  ```
 

4.新建webpack.config.js文件，该文件导出一个配置（自动打包生成html文件）
  安装htmlWebpackPlugin插件
  ```bash
   npm install --save-dev html-webpack-plugin
   
  
  ```
  如何配置参见webpack官网 --https://webpack.js.org/plugins/html-webpack-plugin/#root
  

## 20191014
 
  1.了解webpack的内部构造（参见官网） ---https://webpack.js.org/configuration/   
     
  
  2.核心概念（参见官网）  --https://webpack.docschina.org/concepts/ 
    
   2.1 入口（entry）
    什么是单一入口文件？ 
     webpack.config.js 
     //单一文件
   ```javascript
     module.exports = {
          entry:'./src/index.js',
          mode:'development'
      }
   ```
  
   多个入口文件怎么办？
   
   ```javascript
   module.exports = {
          mode:'development',
          entry:{
              register:'./src/register.js',
              home:'./src/home.js',
              detail:'./src/detail.js'
          }
       }
```
   
## 20191016

  1.核心概念之output（出口文件）
   1.1  简单的配置
   ```javascript
     module.exports = {
           mode:'development',
           entry:'./src/index.js',//单一入口文件
           output:{
              filename:'bundle.js'
           }
       
         }
 ```
   1.2 配置多入口的输出,每次生成不同的js文件
 ```javascript
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
```

## 20191017
 
  核心概念之loader
 
  1. 安装css-loader和style-loader
  
  ```bash
 
   npm install --save-dev css-loader
   npm install --save-dev ts-loader
   npm install --save-dev html-webpack-plugin
   
  ```
  webpack.config.js配置如下：
  ```javascript
   const path = require("path");
     const HtmlWebpackPlugin = require('html-webpack-plugin');
     
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
                     test:/.css$/,
                     use:['style-loader','css-loader']  // 注意：loader写法比较特殊，优先使用的放在后面，后面使用的放在前面
                 }
             ]
         },
         plugins:[
             new HtmlWebpackPlugin()
         ]
     }

```
  
  2. 安装less-loader 和less

  ```bash
   npm install --save-dev less 或者 npm install -D less
   npm install -D less-loader
  
   ```
  webpack.config.js 配置如下
  ```javascript
   const path = require("path");
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
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
                   use:['style-loader','css-loader']
               },
               {
                   test:/\.less$/,
                   use:['style-loader','css-loader','less-loader']
               }
           ]
       },
       plugins:[
           new HtmlWebpackPlugin({
               template: './src/index.html'
           })
       ]
   }

```
  3.拆分style样式到文件
  ```bash
   npm install --save-dev mini-css-extract-plugin
   或者
   npm install --save-dev extract-text-webpack-plugin
   npm install -d extract-text-webpack-plugin @4.0.0
   npm install --save-dev extract-text-webpack-plugin@next
   
   默认的版本是3.0，不兼容，直接安装4.0版本
  ```
  ```javascript
   

```
  
 
## 20191204 自定义插件
   ConsoleLogOnBuildWebpackPlugin.js
   
   const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
   
   class ConsoleLogOnBuildWebpackPlugin {
       apply(compiler) {
           compiler.hooks.run.tap(pluginName, compilation => {
               console.log("webpack 构建过程开始！");
           });
       }
   }


    

  
