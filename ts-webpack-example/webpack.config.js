//nodejs 中的模块帮助拼接路径
const path = require('path');
//引入HTMLWebpackPlugin插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')

//webpack中所有信息都应该写在module.exports中
module.exports = {
    //指定入口文件
    entry: "./src/index.ts",
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后文件文件名
        filename: "bundle.js",
        environment: {
            arrowFunction: false
        }
    },
    mode: "production",
    //指定webpack打包时使用的模块
    module: {
        //指定加载规则
        rules: [
            {
                //test 指定的是规则生效的文件
                test: /\.ts$/,
                //用ts-loader处理这些文件,从后往前执行
                use: [
                    //配置babel
                    {
                        loader: "babel-loader",

                        //设置babel
                        options: {
                            //设置预定义环境
                            presets: [[
                                //指定环境插件
                                "@babel/preset-env",
                                //配置信息
                                {
                                    //兼容的目标浏览器
                                    "targets": {
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    //corejs 版本
                                    "corejs": "3",
                                    //使用corejs的方式 "usage" 表示按需加载
                                    "useBuiltIns": "usage"

                                }
                            ]]
                        }
                    },
                    {
                        loader: "ts-loader",
                    }
                ],

            }
        ]
    },
    //配置插件
    plugins: [
        new HTMLWebpackPlugin({
            title: "My title",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    // 用来配置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
};

