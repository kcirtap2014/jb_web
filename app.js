var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
const port = process.env.PORT || 3000
const compression = require("compression");
const bodyParser = require('body-parser');



var indexRouter = require('./routes/index');
// var contactRouter = require('./routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public','favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

app.use('/css', express.static(__dirname + '/node_modules/w3-css/3'));
app.use('/font', express.static(__dirname + '/node_modules/font-awesome'));

//app.use('/', indexRouter);
// Default every route except the above to serve the index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/media', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/gallery.html'));
});
app.get('/users', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/users.html'));
});


// app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
