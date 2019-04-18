const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const should = chai.should();
const { internet } = require('faker');

const App = require('../../../../../App');

describe('user: controller: registerUser ', function() {
  it('app module exists', done => {
    should.exist(App);
    done();
  });

  describe('POST /users/register', () => {
    const username = internet.userName();
    const password = internet.password();
    it('should register a new user', function(done) {
      this.timeout(2000);
      chai
        .request(App)
        .post('/users/register')
        .send({
          username,
          password
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.should.include.keys('token');
          console.log("fff",res.body.token)
          done();
        });
    });
    it('Should receive error if user already exists', function(done) {
      this.timeout(2000);

      chai
        .request(App)
        .post('/users/register')
        .send({
          username,
          password
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(400);
          // res.type.should.eql("application/json");
          // res.body.should.include.keys("status", "token");
          // res.body.status.should.eql("success");
          done();
        });
    });
  });
});
