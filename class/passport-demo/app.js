var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('./models/user'); 
const acl = require('express-acl');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// the app.use functions are executed every time a request is sent, 
// so the serialization must be stated before the pipeline starts
// use sessions
app.use(session({
  secret: "these are not the droids you're looking for",
}))

// Initialize Passport and connect it into the Express pipeline
app.use(passport.initialize());
// Connect Passport to the session
app.use(passport.session());

// mongoose
mongoose.connect('mongodb://localhost/express-mongo-passport', (err) => {
  if (err) {
    console.log('Error connecting to database', err);
  } else {
    console.log('Connected to database!');
  }
});

acl.config({
  filename: 'acl.yml',
  defaultRole: 'guest'
})

app.use(acl.authorize)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
