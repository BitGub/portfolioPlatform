var request = require('supertest');
var app = require('./lib/server');


describe('Requests Root path', function(){
  
  it('Returns a 200 status code', function(done){
    
  request(app)
    .get('/')
    .expect(200, done)
    });
    
    it('Returns a HTML format', function(done) {

      request(app)
        .get('/')
        .expect('Content-Type', /html/, done);
    });
    
  });