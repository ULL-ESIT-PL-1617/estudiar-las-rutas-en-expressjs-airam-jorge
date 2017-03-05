var express = require('express')
var app = express();
var path = require('path');
var config = require('./package.json');

var port = config.appPort;

// view engine setup
app.set('views', path.join(__dirname, '/gh-pages'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '/gh-pages')));

app.get('/', function (req, res) {
  res.render('index');
})

var server = app.listen(port, function() {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
