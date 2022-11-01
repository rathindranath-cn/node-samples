// global imports
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require("multer");
// local imports
const config = require("./config.js");
const userUploadHandler = require("../app/controllers/upload");

// exports modules
module.exports = (app) => {
  app.use(cors())
  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ["'self'", 'code.jquery.com'],
          'style-src': ["'self'", "'unsafe-inline'", 'netdna.bootstrapcdn.com'],
          'img-src': ["'self'", 'data:', 'img.shields.io'],
          'frame-src': ["'self'", 'ghbtns.com']
        }
      }
    })
  );

  app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
  app.use(bodyParser.json({ limit: '500mb' }));
  app.use(express.static('./public'));

  // configure app root path
  app.all("/", function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", ""); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header(
      "Access-Control-Allow-Headers",
      "Content-type,Accept,X-Access-Token,X-Key,Authorization,Client-Key"
    );

    if (req.method === "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
  });

  // file upload routes
  const upload = multer();
  app.use("/upload", userUploadHandler);
  app.use(upload.array());

  // simple route
  app.get("/", (req, res) => {
    res.json({ message: `Welcome to ${config.appName} api` });
  });

  require('../app/routes')(app);
  return app;
};
