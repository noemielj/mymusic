var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// enregistrement des nouveaux prefixes 
let moderatorRouter = require('./routes/moderator');
let adminRouter = require('./routes/admin');

var indexRouter = require('./routes/index');

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// indiquer le prefixe utilisé
app.use('/moderator', moderatorRouter);
app.use('./admin', adminRouter);

module.exports = app;
