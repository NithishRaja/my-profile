var middleware = require("./../middleware");
var configureApiRoutes = require("./api");

module.exports = function(app){

  configureApiRoutes(app);

  app.route("/")
    .get(middleware.home);

}
