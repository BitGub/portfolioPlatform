'use strict;'

var app = require('./lib/server');

app.listen(3000, function(){
  console.log('server is listening on port %d', 3000)
});
