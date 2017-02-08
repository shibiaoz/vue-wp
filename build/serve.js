var gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const path = require('path');
const exec = require('child_process').exec;
// var browserSync = require('browser-sync').create();
var WebpackDevServer = require('webpack-dev-server');
gulp.task('serve', ['copyhtml'], function () {
    console.log('serve...');
    // webpack(webpackConfig, function (err, state) {
    //     console.log('## 代码编译完成')
    //     compileCallback(err);
    // });
    exec('anywhere -d ./assets -p 8000', function (code, stdout, stderr) {
        console.log('=============');
        console.log('Exit code:', code);
    });

    console.log(webpackConfig.output.path);
    new WebpackDevServer(webpack(webpackConfig), {
        // publicPath:  webpackConfig.output.path,
        publicPath: "/dist/",
        // filename: "bundle.js",
        hot: true,
        historyApiFallback: true,
        proxy: {
            "/data/*": {
                target: "http://127.0.0.1:8000/",
                ignorePath: false,
                changeOrigin: false,
                secure: false
            }
        }
    }).listen(3000, 'localhost', function (err, result) {
        if (err) {
            return console.log(err);
        }
    });

});

function compileCallback(err) {
    if (err) {
        console.log(err);
    }
    console.log('compileCallback...');
    // browserSync.init({
    //     server: {
    //         baseDir: ["./dist/"]
    //     }
    // });


    gulp.watch("./src/**", function () {
        // browserSync.reload();
        // webpack(webpackConfig, function (err, state) {
        //     console.log('## 代码编译完成')
        //     browserSync.reload();
        // });

    });
}
gulp.task('default', ['set-serve-node-env', 'clean', 'serve'], function () {
    console.log('default.....');
});