const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const Routes = require('./src/libs/user/routes');

class App {
  constructor() {
    this.routes = new Routes();

    this.express = express();
    this.configureHeaders();
    this.configureLogger();
    this.configureParsers();
    this.configureSession();
    this.mountRoutes();
    // this.setup404();
    this.setupErrors();
  }

  configureHeaders() {
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });
  }

  configureLogger() {
    if (process.env.NODE_ENV !== 'test') {
      this.express.use(logger('dev'));
    }
  }

  mountRoutes() {
    this.routes.route(this.express);
  }

  configureParsers() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cookieParser());
  }

  configureSession() {
    this.express.use(
      session({
        secret: process.env.SECRET_KEY || 'changeme',
        resave: false,
        saveUninitialized: true
      })
    );
  }

  // setup404(){
  //   this.express.use(
  //     (err, req, res, next) => {
  //       console.log("webSetup404Error")
  //       const err = new Error("Not Found");
  //       err.statusCode = 404;
  //       err.detail = err.toString();
  //       next(err);
  //     }
  //   );
  // }

  setupErrors() {
    this.express.use((err, req, res, next) => {
      res.status(err.response.data.code).json(err.response.data);

      // const detail =
      //   typeof err.error === "undefined" ? err.detail : err.error.detail;
      // const status = err.statusCode || 500;
      // const message = {
      //   status,
      //   detail: detail
      // };
      // res.status(status).json(message)
      // return res.status(status).json(message);
    });
  }
}

module.exports = new App().express;
