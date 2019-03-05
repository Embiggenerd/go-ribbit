const axios = require("axios")

module.exports = async (req, res, next) => {
  const user = req.body

  console.log("gwbody", user, typeof user)
  try {
    const response = await axios.post("http://service-users:3002/users/getUserByUsername", user)
    console.log("gwayRes", response)
    res.json(response.data)
  } catch(e){
    console.log("erzz", e)
    next(e)
  }
  

  
}