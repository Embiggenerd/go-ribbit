const axios = require('axios');

// Token is passed from client to gateway via cookie. Gateway passes token
// to backend via authorization header on get. Backend validates, sends an error or
// user info back to gateway via json. If user lacks required cookie, we directly
// send back an appropriate error message with 401 code
module.exports = async (req, res, next) => {
  console.log('req.header(Authentication)', req.header('Authentication'));
  // const token =
  //   typeof req.cookies.token !== 'undefined' ? req.cookies.token : null;

  const token = req.header('Authentication')
  // token = null
  console.log('hhhh', token)

  if (token === 'null') {
    console.log('token null yo')
    next({
      response: {
        data: {
          code: 401,
          message: 'Please login',
          error: 'Required authentication header not present'
        }
      }
    });
    return;
  }

  console.log('req.cookie.token', token);
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };
  try {
    response = await axios.get(
      'http://service-users:3002/users/authReq',
      config
    );
    res.json(response.data);
  } catch (e) {
    // console.log("authReq error", e.Error)
    next(e);
  }
};
