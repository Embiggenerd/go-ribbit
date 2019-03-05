const axios = require("axios")

module.exports = async (req, res, next) => {
  const user = req.body
  try {
    const response = await axios.post("http://service-users:3002/users/getUserByUsername", user)
    res.json(response.data)
  } catch(e){
    next(e)
  }
}