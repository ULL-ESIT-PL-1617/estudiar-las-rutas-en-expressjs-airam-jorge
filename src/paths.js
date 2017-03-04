var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
    res.send('Try accessing:'            +
             '<ul>'                      +
             '<li> /dragonfly </li>'     +
             '<li> /butterfly </li>'     +
             '<li> /butterflytest </li>' +
             '<li> /dogs </li>'          +
             '<li> /dog </li>'           +
             '</ul>');
});

app.get('/dogs?', function(req, res) {
    res.send(' Accessing /dogs or /dog');
});

app.get(/.*fly$/, function(req, res) {
    res.send(' Accessing /<i>something</i>fly');
});

app.listen(port, function () {
    console.log('Third example listening on port 3000!');
});
