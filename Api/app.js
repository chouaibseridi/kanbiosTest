// dependencies
var express = require('express');
var cors = require ('cors');
var bodyParser = require('body-parser');
var app = express();

global.__basedir = __dirname + "/..";

//routes
const employeeRoute = require('./routes/employeeRoute');
const userRouter = require('./routes/userRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/', employeeRoute);
app.use('/', userRouter);

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = app;