var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const productsRoutes = require('./routes/products'); // routes ajoutées
const recallsRoutes = require('./routes/recalls');
var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRoutes); // ajout routes
app.use('/recalls', recallsRoutes);
module.exports = app;
