const axios = require("axios")

module.exports = async (req, res, next) => {
  const user = req.body
  console.log(user)
  let response
  try {
    response = await axios.post("http://service-users:3002/users/getUserByUsername", user)
    // res.json(response.data)
  } catch(e){
    next(e)
  }
  console.log(response)
}