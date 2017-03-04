var express = require('express');
var app = express();
var port = 3000;

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

app.get('/', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello !');
})

app.listen(port, function () {
    console.log('Fifth example listening on port 3000!');
});
