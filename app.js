'use strict;'

var app = require('./lib/server');

app.listen(app.get("port"), function(){
  console.log('server is listening on port %d', app.get("port"))
});
