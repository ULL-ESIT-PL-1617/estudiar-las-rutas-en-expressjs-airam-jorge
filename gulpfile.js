var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('updateGitbook', shell.task([
    'cd docs',
    'git init',
    'git add .',
    'git commit -m "First commit"',
    'git remote add gitbook https://git.gitbook.com/ediolot/routas-expressjs.git',
    'git pull gitbook master'
]));
