// 引入一個Node.js模塊，協助我們拼接路徑
const path = require('path');
// 引入html plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入 clean webpack plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack中所有的設定都應該寫在module.exports當中
module.exports = {
    // 指定入口
    entry: './src/index.ts',

    // 指定打包文件所在目錄
    output: {
        // 指定打包文件的目錄
        path: path.resolve(__dirname,'dist'),
        // 打包後文件的文件
        filename: "bundle.js",
        // 告訴webpack不要使用箭頭函數
        environment: {
            arrowFunction: true,
            const: true
        }
    },

    // 指定webpack打包時要使用模塊
    module: {
        // 指定加載規則 // 順序有差別要再去讀書
        rules:[
            {
                // test 指定的事規則生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 設定babel
                    {
                        // 指定加載器
                        loader: 'babel-loader',
                        // 設置babel
                        options: {
                            // 設定預定義的環境
                            presets: [
                                [
                                    // 指定環境的插件
                                    '@babel/preset-env',
                                    // 設定選項
                                    {
                                        // 要兼容的目標瀏覽器
                                        targets:{
                                            'chrome': '88',
                                            'ie': '11'
                                        },
                                        // 指定corejs的版本
                                        'corejs': '3',
                                        //使用corejs的方式 'usage' 表示案需求加載
                                        'useBuiltIns': 'usage'
                                    }
                                ]
                            ]
                        }

                    },
                    'ts-loader'
                ],
                // 要排除的文件 //再補充
                exclude: /node_modules/
            },
            // 設置scss 檔案的處理
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // 引入postcss
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions:{
                            plugins:[
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers: 'last 2 versions'
                                    }
                                ]
                            ]
                        }
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
                ],
            }
        ]
    },

    // 設定weboack plugin
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: '自定義Title'
            template: './src/index.html'
        }),
    ],

    // 用來設置引用模塊 //需補充要讀書
    resolve:{
        extensions: ['.ts','.js']
    }
}