const chai = require('chai');
const request = require('supertest');
const session = require('supertest-session');
const expect = chai.expect;
const { internet } = require('faker');
const axios = require('axios');
const App = require('../../../../../App');

describe('user: controller: authReq ', function() {
  it('app module exists', () => {
    expect(App).to.exist;
  });

  describe('GET /users/authReq', () => {
    const username = internet.userName();
    const password = internet.password();
    let token;

    it('First, register a new user', async () => {
      await request(App)
        .post('/users/register')
        .send({ username, password })
        .set('Content-Type', 'application/json')
        .expect(200)
        .expect(res => {
          expect(res.body).to.have.property('token');
          expect(res.body.token).to.be.a('string');
          token = res.body;
        });
    });

    it('Then, use the token to authorize a request', async () => {
      const config = {
        headers: {
          Authorization: 'Bearer ' + token.token
        }
      };
      try {
        response = await axios.get(
          'http://service-users:3002/users/authReq',
          config
        );
        expect(response.data.username).to.equal(username);
      } catch (e) {
        expect(e).not.to.exist
      }
    });
    it('Make sure no headers give you 401', async () => {
      try {
        response = await axios.get('http://service-users:3002/users/authReq');
        expect(response).to.not.exist
      } catch (e) {
        expect(e.response.data).to.deep.equal({
          error: 'Authorization failed',
          message: 'Please login',
          code: 401
        });
      }
    });
    it('Make sure wrong headers give you 401 with appropriate error message', async () => {
      const config = {
        headers: {
          Authorization: 'Bearer ' + 'blah blah'
        }
      };
      try {
        response = await axios.get('http://service-users:3002/users/authReq', config);
        expect(response).to.not.exist
      } catch (e) {
        expect(e).to.exist
        expect(e.response.data).to.deep.equal({
          error: 'Invalid token',
          message: 'Invalid token',
          code: 401
        });
      }
    });
  });
});
