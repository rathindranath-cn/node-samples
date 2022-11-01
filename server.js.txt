// global imports
const express = require("express");
const swaggerUI = require("swagger-ui-express");
// local imports
const config = require("./config/config");
const swaggerApp = require("./swagger.json");

// pre routes
const app = express();
require("./config/express")(app);

// configure swagger file
const options = {
  apis: ['./app/routes/*.js', './app/routes/frontend/*.js'],
};
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerApp, options));

// template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/app/views");

// Set port, start the app
app.listen(config.port, () => {
  console.log(
    `${config.appName} ${config.environment} server is running on port!! ${config.port}`
  );
});
