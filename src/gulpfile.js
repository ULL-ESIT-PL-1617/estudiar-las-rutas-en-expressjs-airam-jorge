var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('ejemplo1', shell.task(['node ./inicial.js']));
gulp.task('ejemplo2', shell.task(['node ./metodoAll.js']));
gulp.task('ejemplo3', shell.task(['node ./paths.js']));
gulp.task('ejemplo4', shell.task(['node ./param.js']));
gulp.task('ejemplo5', shell.task(['node ./handlers.js']));
gulp.task('ejemplo6', shell.task(['node ./responses.js']));
gulp.task('ejemplo7', shell.task(['node ./module.js']));
gulp.task('ejemplo8', shell.task(['node ./middleware.js']));
gulp.task('ejemplo9', shell.task(['node ./routerAPI.js']));
