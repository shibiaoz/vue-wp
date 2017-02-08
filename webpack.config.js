const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IS_PROD = process.env.NODE_ENV == 'production';
const config = require('./config');
const apiJson = require('./assets/api.json');
var TEST_ENV = process.env.TEST_ENV || 'serve';
var plugins = [];
if (IS_PROD) {
    plugins.push(new webpack.DefinePlugin({
        'process.env': { //设置成生产环境
            NODE_ENV: 'production'
        }
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({ //压缩代码
        compress: {
            warnings: false
        }
    }));
}

// plugins.push(
//     new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
//         filename: 'index.html', //生成的html存放路径，相对于 path
//         // template: 'src/index.html'
//         template: path.resolve(__dirname+'./../src/index.html'), //html模板路径
//     })
// );

const WebpackBrowserPlugin = require('webpack-browser-plugin');

plugins.push(new WebpackBrowserPlugin({
    port: 3000
}));

var ReplaceBundleStringPlugin = require('replace-bundle-webpack-plugin');
plugins.push(new ReplaceBundleStringPlugin([{
    partten: /{{(.+Api)}}/g,
    replacement: function (match, apiName) {
        console.log(apiJson[apiName] && apiJson[apiName][TEST_ENV]);
        return apiJson[apiName] && apiJson[apiName][TEST_ENV];
    }
}]));

module.exports = {
    entry: ['./src/main.js'], //编译入口文件
    // output: {
    //     // publicPath: config.publicPath, //服务器的路径
    //     path: path.resolve(__dirname + config.publicPath), //编译到app目录
    //     filename: 'bundle.js?[hash]' //编译后的文件名
    // },
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // { test: /\.vue$/, loader: 'vue-template-compiler' },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style!css'
                    //loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: './file/[name].[ext]'
                }
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: './images/[name].[ext]'
                }
            }, {
                test: /index.html/,
                loader: 'file-loader!./dist/index.html',
            }
        ]
    },
    plugins,
    resolve: {
        // extensions: ['', '.js', '.vue'], //后缀名自动补全
        alias: {
            // vue: 'vue/dist/vue.js', //webpack打包时，需要设置别名
            // vue:'vue/dist/vue.common.js'
            'vue$': 'vue/dist/vue'
                // store: path.resolve('src/store/'), //常用工具方法
        }
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    // plugins: [
    //     new ExtractTextPlugin('./style.css')
    // ],
    // vue: {
    //     postcss: [
    //         require('autoprefixer')({
    //             browsers: ['last 100 versions']
    //         })
    //     ]
    // }
}