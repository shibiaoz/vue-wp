var gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const path = require('path');
// var browserSync = require('browser-sync').create();
var WebpackDevServer = require('webpack-dev-server');
gulp.task('serve', ['copyhtml'], function () {
    console.log('serve...');
    // webpack(webpackConfig, function (err, state) {
    //     console.log('## 代码编译完成')
    //     compileCallback(err);
    // });

    console.log(webpackConfig.output.path);
    new WebpackDevServer(webpack(webpackConfig), {
        // publicPath:  webpackConfig.output.path,
         publicPath: "/dist/",
        // filename: "bundle.js",
        hot: true,
        historyApiFallback: true
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