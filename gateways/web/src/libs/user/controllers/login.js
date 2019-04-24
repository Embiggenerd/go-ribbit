const axios = require('axios');

// Receives user data on body on post request from client. Sends it on a
// post request as json to backend. Backend validates data, sends a token.
// Token is sent to client as a cookie.
module.exports = async (req, res, next) => {
  const user = req.body
  console.log("login req.body", req.body)
  try{
    const response = await axios.post("http://service-users:3002/users/login", user)
    console.log("backend login response.data", response.data)
    res.cookie('token', response.data)
    res.json(response.data)
  } catch(e) {
    console.log("login req e", e)
    next(e)
  }
}