var fs   = require('fs');
var path = require('path');
var exec = require('child_process').execSync;
var config = require('../package.json');

var gBookURL = config.repository.gitbookUrl;
var docs = path.join(__dirname, '../docs');

if (!fs.existsSync(docs)) {
    fs.mkdirSync(docs);
}
process.chdir(docs);

if (!fs.existsSync(path.join(docs, '/.git'))) {
    exec('git init', {stdio:[0,1,2]});
}

try {
    exec('git remote add gbook ' + gBookURL, {stdio:[0,1,2]});
} catch (e) {}

exec('git pull gbook master', {stdio:[0,1,2]});
