var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
    res.send('Try accessing:'                       +
             '<ul>'                                 +
             '<li> /flights/Madrid-Barcelona </li>' +
             '<li> /users/123/books/456 </li>'      +
             '</ul>');
});

app.get('/flights/:from-:to', function (req, res) {
    res.send('Flight from ' + req.params.from + ' to ' + req.params.to);
});

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send('Book user id: ' + req.params.userId + '<br>Book id: ' + req.params.bookId);
});

app.listen(port, function () {
    console.log('Fourth example listening on port 3000!');
});
