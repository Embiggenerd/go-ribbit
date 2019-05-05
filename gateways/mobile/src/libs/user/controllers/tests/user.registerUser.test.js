const chai = require('chai');
const request = require('supertest');
const expect = chai.expect;
const { internet } = require('faker');

const App = require('../../../../../App');

describe('user: controller: registerUser ', function() {
  it('app module exists', () => {
    expect(App).to.exist;
  });

  describe('POST /users/register', () => {
    const username = internet.userName();
    const password = internet.password();
    
    it('Should register a new user', async () => {
      await request(App)
        .post('/users/register')
        .send({ username, password })
        .set('Content-Type', 'application/json')
        .expect(200)
        .expect(res => {
          expect(res.body).to.have.property('token');
          expect(res.body.token).to.be.a('string');
        });
    });
    
    it('Should receive error if user already exists', async () => {
      await request(App)
        .post('/users/register')
        .send({ username, password })
        .set('Content-Type', 'application/json')
        .expect(400)
        .expect(res => {
          expect(res.body).to.deep.equal({
            error: 'Username unavailable',
            message: 'Username taken',
            code: 400
          });
        });
    });
  });
});
