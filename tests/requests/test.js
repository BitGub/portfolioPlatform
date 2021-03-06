require('../config');
var request = require('supertest');
var app = require('../../app');


describe('Requests Root path', function(){
  
  it('Returns a 200 status code', function(done){
    
  request(app)
    .get('/')
    .expect(200, done)
    });
    
    it('Returns a HTML format', function(done) {

      request(app)
        .get('/')
        .expect('Content-Type', /html/, done)
    });
    
});
