'use strict';

var gulp = require('gulp');
var spawn = require('child_process').spawn;

var node;

gulp.task('server', ['clean', 'tslint', 'check-vulnerabilities', 'transpile'], function() {
    if (node) {
        node.kill();
    }
    node = spawn('node', ['src/app.js'], {stdio: 'inherit'});
    node.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
    
    gulp.watch(['src/**/*.ts'], ['server'], { ignoreInitial: false})
    .on('error', function() {
        gulp.log('Error during compliation');
    });
});