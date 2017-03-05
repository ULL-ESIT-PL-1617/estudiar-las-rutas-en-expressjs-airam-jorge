var fs   = require('fs');
var path = require('path');
var exec = require('child_process').execSync;
var config = require('../package.json');

var gBookURL = config.repository.gitbookUrl;
var docs = path.join(__dirname, '../docs');
var ghPagesDir = path.join(__dirname, '/..gh-pages');

if (!fs.existsSync(ghPagesDir)) {
    fs.mkdirSync(ghPagesDir);
}

if (fs.existsSync(docs)) {
    process.chdir(docs);
    exec('gitbook build . ../gh-pages', {stdio: [0,1,2]});
}