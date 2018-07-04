const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var flash = require('express-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var expressValidator = require('express-validator');
const dotenv = require('dotenv');
// var passport = require('passport');

// Load environment variables from .env file
dotenv.load();

// Routers
let rider = require('./routes/rider');
let driver = require('./routes/driver');
// let driver = require('./routes/driver');

// require('./src/mongoControllers/passport');
// require('./src/mysqlControllers/passport');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, './views/pages'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, './public', '/images/favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(function(req, res, next) {
//     res.locals.user = req.user;
//     next();
// });

app.use(express.static(path.join(__dirname, './public')));

// app.use('/rider', rider);
app.use('/', rider);
app.use('/driver', driver);
// app.get('/', function(req, res) {
//     // console.log("hello", __dirname + '/views/pages/abra.html');
//     // res.render(__dirname + '/views/pages/abra.html');
//     res.render('pipo');
//   });

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    res.render('404', {
        'message': 'Page not found'
    });
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 520);
    console.log("error", err)
    // res.render('error');
});

module.exports = app;