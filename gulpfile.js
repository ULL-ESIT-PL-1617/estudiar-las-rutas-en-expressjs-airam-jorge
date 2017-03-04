var gulp = require('gulp');
var shell = require('gulp-shell');
var task = require('shell-task');

gulp.task('default', ['build', 'deploy', 'serve']);

gulp.task('build', shell.task(['npm run build']));

gulp.task('deploy', shell.task(['npm run deploy']));
gulp.task('x', shell.task(["echo hola"]));
gulp.task('serve',  function() {
  return gulp.src('').pipe(shell(['node hello.js']));
});
