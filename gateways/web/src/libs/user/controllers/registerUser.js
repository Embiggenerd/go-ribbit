const axios = require("axios")

/**
 * shape of user: json{
 * Username: string,
 * Password: string
 * }
 */

module.exports = async (req, res, next) => {
  const user = req.body
  console.log(user)
  let response
  try {
    response = await axios.post("http://service-users:3002/users/register", user)
    res.json(response.data)
  } catch(e){
    next(e)
  }
}