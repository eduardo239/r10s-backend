const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const challengeRouter = require('./routes/challenge');
const userChallengeRouter = require('./routes/userChallenge');

const app = express();

mongoose.Promise = global.Promise;

mongoose
  .connect(
    `mongodb+srv://r10s-admin:KYt8GEfYAEDmb5k4@cluster0.a8wg0.gcp.mongodb.net/r10s?retryWrites=true&w=majority`
  )
  .then(() => console.info('connection successful'))
  .catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', userRouter);
app.use('/api/challenges', challengeRouter);
app.use('/api/user-challenges', userChallengeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
