var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();


app.set('port', (process.env.PORT || 8080));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
     console.log('Request Type:', req.method);
     next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id == 0) next('route');
  // otherwise pass control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
   // render a regular page
     res.render('regular.ejs', { usuario: req.params.id});
});

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('special.ejs', { usuario: req.params.id});
});

// mount the router on the app
app.use('/', router);
var server = app.listen(app.get('port'), function() {

  var host = server.address().address
  var port = server.address().port

  console.log('Eighth example listening on port ' + app.get('port'));
})
