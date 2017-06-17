'use strict'

const request = require('supertest');
const app = require('../app');

describe('GET /', function(){
  it('expects HTTP 200', function(done){
    request(app)
    .get('/')
    .expect(200, done);
  });
});