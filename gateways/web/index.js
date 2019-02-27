// import * as app from "./App";
const app = require("./App")

class Server {
  //  port = ""

  constructor() {
    this.port = process.env.PORT || "3001";
    this.listen()
  }

  listen() {
    
    app.listen(this.port, () => {
      console.log(`gateway-web listening on port ${this.port}`)
    })
  }
}

// export default new Server()
module.exports = new Server()