var express = require('express');
var app = express();
var port = 3000;

app.all('/', function (req, res, next) {
    console.log('Method all used ...');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World! (GET request)');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

app.listen(port, function () {
    console.log('Second example listening on port 3000!');
});
