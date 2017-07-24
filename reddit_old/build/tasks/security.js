var gulp = require('gulp');
var gulpConfig = require('./../gulp-config');
var gulpNSP = require('gulp-nsp');
 
//To check your package.json
gulp.task('check-vulnerabilities', function (cb) {
    gulpNSP({package: gulpConfig.packageJSON}, cb);
});