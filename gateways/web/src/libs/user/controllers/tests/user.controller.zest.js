const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP);
const should = chai.should();

const App = require('../../../../../App')

describe("user: controller: ", function(){
  it("app module exists", (done) => {
    should.exist(App);
    done()
  });

  describe("GET /does/not/exist", function(){
    it("should throw an error", function(done) {
      chai.request(App)
      .get('/does/not/exist')
      .end((err, res) => {
        // console.log(err)
        res.status.should.equal(404);
        res.type.should.equal('application/json')
        done();
      })
    })
  })

})
