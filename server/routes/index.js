var middleware = require("./../middleware");
var configureApiRoutes = require("./api");

module.exports = function(app){
  // setting up api routes
  configureApiRoutes(app);

  // setting up normal routes
  app.route("/")
    .get(middleware.home);

  app.route("/gallery")
    .get(function(req, res){
      res.redirect("/");
    });

  app.route("/blog")
    .get(function(req, res){
      res.redirect("/");
    });

  app.route("/gallery/:albumId")
    .get(function(req, res){
      res.redirect("/");
    });
}
