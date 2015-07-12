'use strict';
var express = require('express')
  , app = express()
  , routes  = require('json-routing');
  
app.set("port", process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '../../public'));

var routeOptions = {
    routesPath      : "./lib/routes",
    controllerPath  : "./controllers",
    policyPath      : "./lib/policy",
    cors            : false,
    displayRoute    : true,
    defaultAction   : "index"
};
 

routes(app, routeOptions);

module.exports = app;
