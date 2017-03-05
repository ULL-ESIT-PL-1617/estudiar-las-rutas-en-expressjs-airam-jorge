var express = require('express')
var app = express();
var path = require('path');
var config = require('./package.json');

app.set('port', (process.env.PORT || config.appPort || 80));

// view engine setup
app.set('views', path.join(__dirname, '/gh-pages'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/gh-pages')));

app.get('/', function (req, res) {
  res.render('index');
})

var server = app.listen(app.set('port'), function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)
})
