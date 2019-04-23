const axios = require("axios")

module.exports = async (req, res, next) => {
  const token = req.cookie.token
  console.log("req.cookie.token", token)
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };
  try {
    response = await axios.get('http://service-users:3002/users/authReq', config);
    res.json(response.data);
  } catch (e) {
    console.log("authReq error", e)
    next(e);
  }
};
