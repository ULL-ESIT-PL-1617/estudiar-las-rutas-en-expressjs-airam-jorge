var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

var birds = require('./birds');
app.use('/birds', birds);

app.get('/', function (req, res) {
    res.send('Try accesing /birds');
});

app.listen(port, function () {
    console.log('Seventh example listening on port 3000!');
});
