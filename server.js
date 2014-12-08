// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var port     = process.env.PORT || 8080; // set our port

var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_app32092219:uk8uac8sgnpqbbk8nii45lhdus@ds061370.mongolab.com:61370/heroku_app32092219'); // connect to our database
var Bear     = require('./app/models/bear');

var routes = require('./app/routes/index');

var app = express();

// configure app
app.use(morgan('dev')); /// log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





// REGISTER OUR ROUTES -------------------------------
app.use('/', routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
