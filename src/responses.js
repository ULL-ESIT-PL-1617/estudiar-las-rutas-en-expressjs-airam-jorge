var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/download', function (req, res) {
    res.download(path.join(__dirname, '/public/cat.jpg'));
});

app.get('/catImage', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/cat.jpg'));
});

app.get('/json', function (req, res) {
    res.json({ user: "cat", age: 5});
});

app.get('/redirect', function (req, res) {
    console.log('Redirected !');
    res.redirect('/');
});

app.get('/', function (req, res) {
    res.render('index.ejs', {title: "Responses examples"});
});

app.listen(port, function () {
    console.log('Sixth example listening on port 3000!');
});
