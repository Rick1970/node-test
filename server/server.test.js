const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  it('should return Hello World! response', (done) => {
    request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    .end(done);
  });

  it('should return user object name Rick', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Rick',
        age: 46
      });
    })
    .end(done);
  });
});
