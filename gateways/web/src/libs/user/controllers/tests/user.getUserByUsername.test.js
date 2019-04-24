const chai = require('chai');
const request = require('supertest');
const session = require('supertest-session');
const expect = chai.expect;

const App = require('../../../../../App');

describe('user: controller: getUserByUsername ', function() {
  
  describe('POST /users/getUserByUsername', () => {
    const username = 'igor';
    it('should return id and username', async function() {
      this.timeout(2000);
      try {
        await request(App)
          .post('/users/getUserByUsername')
          .send({ username })
          .set('Content-Type', 'application/json')
          .expect(200)
          .expect(res => {
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('username', 'igor');
          });
      } catch (e) {
        console.log(e)
      }
    });
  });
});
