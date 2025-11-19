const request = require('supertest');
const app = require('./app');

describe('GET /', function() {
  it('responds with Hello From DSCE', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect(/Hello From DSCE/, done);
  });
});
