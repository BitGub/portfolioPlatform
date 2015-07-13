'use strict;'

var app = require('./lib/server');

app.listen(app.get("port"), function(){
  console.log('server is listening on port %d and is running in: ' + process.env.NODE_ENV + " mode" , app.get("port"))
});
