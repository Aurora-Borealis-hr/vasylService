var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
const request = require('supertest');
const app = require('../index')

 
describe('GET /status', () => {
  it('respond with 200 status code', (done) => {
    request(app)
      .get('/status')
      .expect(200, done);
  });
});


after('close server connection after tests', () => {
  app.close()
});
