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
    App.route("/mobile/ping").get(ping);
    App.route("/users/authReq").get(authReq)
    App.route("/users/getUserByUsername").post(getUserByUsername)
    App.route("/users/register").post(registerUser)
    App.route("/users/logout").get(logoutUser)
    App.route("/users/login").post(loginUser)


    // App.route("/").get(ensureAuthenticated, allLocations);

    // App.route("/login").get(loginRedirect, getLogin);

    // App.route("/login").post(loginRedirect, postLogin);

    // App.route("/register").get(loginRedirect, getRegister)

    // App.route("/register").post(postRegister)

    // App.route("/logout").get(ensureAuthenticated, logout)

    // App.route("/add").post(ensureAuthenticated, addLocation)

    // App.route("/user").get(ensureAuthenticated, locationsByuser)
  }
}
