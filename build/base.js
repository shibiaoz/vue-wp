var gulp = require('gulp');
var del = require('del');
const config = require('../config');
gulp.task('set-serve-node-env', function () {
    console.log('set-serve-node-env....');
    return process.env.NODE_ENV = 'development';
});
gulp.task('set-prod-node-env', function () {
    return process.env.NODE_ENV = 'production';
});

gulp.task('set-test-node-env', function () {
    return process.env.TEST_ENV = 'test';
});

gulp.task('set-serve-node-env', function () {
    return process.env.TEST_ENV = 'serve';
});

/**
 * 清除dist目录文件
 */
gulp.task('clean', function () {
    del.sync([config.dist]);
});


gulp.task('copyhtml', function () {
     gulp.src('./src/index.html')
        .pipe(gulp.dest('dist/'));
});