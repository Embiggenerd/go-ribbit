const axios = require('axios');

/**
 * shape of user: json{
 * Username: string,
 * Password: string
 * }
 */

 // Registration details passed from client to gateway via post req. Gateway sends
 // data via post to backend. Backend replies with a token via post, and token is
 // given to client as cookie.
module.exports = async (req, res, next) => {
  const user = req.body;
  const config = { httpOnly: true, expires: new Date(Date.now() + 900000) };
  console.log(user);
  let response;
  try {
    response = await axios.post(
      'http://service-users:3002/users/register',
      user,
    );
    console.log("register response.data", response.data)
    res.cookie('token', response.data, config);
    res.json(response.data);
  } catch (e) {
    console.log("register response.data e", e)

    next(e);
  }
};
