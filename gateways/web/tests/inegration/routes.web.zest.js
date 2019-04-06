import App from "../../App";

describe("GET /ping", function() {
  it("responds to ping with pong", function(done) {
    request(App)
      .get("/user")
      .end(function(err, res) {
        if (err) return done(err);
        assert(response.body, "pong");
        done();
      });
  });
});
