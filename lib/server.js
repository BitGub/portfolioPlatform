'use strict';
var express = require('express')
  , app = express()
  , cfg = require('./../config/cfg')
  , routes  = require('json-routing')
  , mongoose = require('mongoose'); // TODO: db connnection to be moved out into models
  
mongoose.connect(cfg.db_uri); //testing purposes only. Check connection to test/dev db

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
    console.log('Successfully connected to MongoDB');
});
  
app.set("port", process.env.PORT || 3000);

app.set('view engine', 'ejs');


var routeOptions = {
    routesPath      : "./lib/routes",
    controllerPath  : "./controllers",
    policyPath      : "./lib/policy",
    cors            : false,
    displayRoute    : true,
    defaultAction   : "index"
};

app.use(express.static(__dirname + '../../public'));

routes(app, routeOptions);

module.exports = app;
