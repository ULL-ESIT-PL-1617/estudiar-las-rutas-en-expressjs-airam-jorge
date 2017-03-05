var express = require('express');
var app = express();
var port = 3000;

var router = express.Router();

router.get('/', function (req, res) {
    res.send('Principal');
});

router.all('/all', function (req, res) {
    res.send('Método all ...');
});

router.param('id', function (req, res, next, id) {
  console.log('Invocado una sola vez');
  next();
});

router.get('/user/:id', function (req, res, next) {
  console.log('Este coincide');
  next();
});

router.get('/user/:id', function (req, res) {
  console.log('Y este tambien coincide');
  res.end();
});

router.route('/users/:id')
.all(function(req, res, next) {
  res.send('Método all Route ...');
  next();
});

router.use('/bar', function(req, res, next) {
  res.send('Método use ...');
  next();
});


app.use('/', router);
app.listen(port, function () {
    console.log('Ninth example listening on port ' + port);
});
