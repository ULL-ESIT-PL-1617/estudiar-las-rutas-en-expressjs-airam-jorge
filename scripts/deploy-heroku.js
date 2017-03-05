var path = require('path');
var exec = require('child_process').execSync;

console.log("Deploying on Heroku.");
console.log('Be sure you used "heroku login" first and added the remote tagged as heroku. Continue ?');
var answer = require('cli-interact').getYesNo('Continue');

if (answer) {
    exec('git push heroku master');
}
