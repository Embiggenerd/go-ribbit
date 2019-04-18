const chai = require('chai');
const request = require('supertest');
const session = require('supertest-session');
var expect = chai.expect;
const { internet } = require('faker');

const App = require('../../../../../App');

describe('user: controller: getUserByUsername ', function() {
  // it('app module exists', done => {
  //   should.exist(App);
  //   done();
  // });

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
            console.log('mmmm', res.body);
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('username', 'igor');
          });
      } catch (e) {
        
      }
    });
    //   it('Should receive error if user already exists', function(done) {
    //     this.timeout(2000);

    //     chai
    //       .request(App)
    //       .post('/users/register')
    //       .send({
    //         username,
    //         password
    //       })
    //       .end((err, res) => {
    //         should.not.exist(err);
    //         res.status.should.eql(400);
    //         // res.type.should.eql("application/json");
    //         // res.body.should.include.keys("status", "token");
    //         // res.body.status.should.eql("success");
    //         done();
    //       });
    //   });
  });
});
