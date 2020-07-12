const {
  ping,
  getUserByUsername,
  registerUser,
  authReq,
  logoutUser,
  loginUser,
} = require("../controllers");

// const { ensureAuthenticated, loginRedirect } = require("../helpers");

module.exports = class Routes {
  route(App) {
    App.route("/web/ping").get(ping);
    App.route("/users/authReq").get(authReq)
    App.route("/users/getUserByUsername").post(getUserByUsername)
    App.route("/users/register").post(registerUser)
    App.route("/users/logout").get(logoutUser)
    App.route("/users/login").post(loginUser)
  }
}
