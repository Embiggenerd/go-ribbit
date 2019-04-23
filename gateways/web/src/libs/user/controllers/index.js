const ping = require('./ping');
const getUserByUsername = require('./getUserByUsername');
const registerUser = require('./registerUser');
const authReq = require('./authReq');
const logoutUser = require('./logout');
const loginUser = require("./login")
module.exports = {
  getUserByUsername,
  ping,
  registerUser,
  authReq,
  logoutUser,
  loginUser,
};

// export const allLocations = require("./allLocations")

// export const getLogin = require("./getLogin")

// export const postLogin = require("./postLogin")

// export const getRegister = require("./getRegister")

// export const postRegister = require("./postRegister")

// export const addLocation = require("./add")

// export const logout = require("./logout")

// export const locationsByuser = require("./locationsByUser")
