const {
  ping,
  getUserByUsername,
  registerUser,
  // allLocations,
  // getLogin,
  // postLogin,
  // getRegister,
  // postRegister,
  // logout,
  // locationsByuser,
  // addLocation
} = require("../controllers");

// const { ensureAuthenticated, loginRedirect } = require("../helpers");

module.exports = class Routes {
  route(App) {
    App.route("/web/ping").get(ping);

    App.route("/users/getUserByUsername").post(getUserByUsername)
    App.route("/users/register").post(registerUser)


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
