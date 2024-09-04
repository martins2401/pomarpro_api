var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');

var arvoreRouter = require('./routes/arvore.route');
var colheitaRouter = require('./routes/colheita.route');
var movimentoRouter = require('./routes/movimento.route');
var pomarRourer = require('./routes/pomar.route');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuario.route');
var materialRourer = require('./routes/material.route');
var produtoRourer = require('./routes/produto.route')


var cors = require('cors');

dotenv.config();
var app = express();
//configuração do CORS
app.use(cors({origin:['http://localhost:4200','http://127.0.0.1:4200']}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/material', materialRourer);
app.use('/', indexRouter);
app.use('/colheita',colheitaRouter)
app.use('/movimento',movimentoRouter)
app.use('/usuario', usersRouter);
app.use('/produto', produtoRourer);
app.use('/pomar', pomarRourer);
app.use('/arvore',arvoreRouter)
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
