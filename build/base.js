var gulp = require('gulp');
var del = require('del');
const config = require('../config');
gulp.task('set-serve-node-env', function () {
    console.log('set-serve-node-env....');
    return process.env.NODE_ENV = 'development';
});
gulp.task('set-prod-node-env', function () {
     process.env.NODE_ENV = 'production';
     console.log('process.env.NODE_ENV=> ' + process.env.NODE_ENV)
     return;
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
    del(['./dist/*']).then((res)=>{
        console.log(JSON.stringify(res));
    });
});


gulp.task('copyhtml', function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('dist/'));
});