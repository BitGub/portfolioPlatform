'use strict';

var env = process.env.NODE_ENV || 'development'
  , cfg = require('./environments/' + env);
  
module.exports = cfg;