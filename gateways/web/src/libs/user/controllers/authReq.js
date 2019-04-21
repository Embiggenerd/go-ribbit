const axios = require("axios")

module.exports = async (req, res, next) => {
  try {
    response = await axios.get('http://service-users:3002/users/authReq');
    res.json(response.data);
  } catch (e) {
    console.log("authReq error", e)
    next(e);
  }
};
