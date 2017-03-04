var gulp = require('gulp');
var shell = require('gulp-shell');
var task = require('shell-task');

gulp.task('x', function () {
    return gulp.src('').pipe(shell.task([
        'echo hola',
        'echo adios'
    ]));
});
