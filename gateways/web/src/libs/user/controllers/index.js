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