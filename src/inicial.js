var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World! (GET request), try accessing / with a post method ' +
             'or /user with a put or delete method.');
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
    console.log('First example listening on port 3000!');
});
