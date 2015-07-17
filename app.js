'use strict';
var express = require('express')
  , app = express()
  , routes  = require('json-routing')
  , server
  // , models = require('./models'); 
  
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

// models.sequelize.sync().then(function () {
  server = app.listen(app.get("port"), function(){
    console.log('server is listening on port %d and is running in: ' + process.env.NODE_ENV + " mode" , app.get("port"))
  });
// });


module.exports = app;