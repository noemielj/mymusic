require('../backend/models/connection') //import fichier de connection
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const weatherRouter = require('./routes/weather');
var app = express();

const cors = require('cors');
app.use(cors());
// indiquer le prefix utilisé 
let citieRouter = require('./routes/weather')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/weather", weatherRouter);
module.exports = app;
