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
        .expect('Content-Type', /html/, done)
    });
    
});

describe("Returns session path", function(){
  
  it('Returns a 200 status code', function(done){
    request(app)
      .get('/sessions')
      .expect(200, done)
  });
  
  it('Returns HTML format', function(done){
    request(app)
      .get('/sessions')
      .expect('Content-Type', /html/, done)
  });
  
  it('Returns the login view', function(done){
    request(app)
      .get('/sessions')
      .expect(/sign in/i, done)
  });
});
