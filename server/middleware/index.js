var apiMiddleware = require("./api");

// exporting middleware used for home page
exports.home = function(req, res){
  res.render("main");
};

// exporting middleware used in api routes
exports.api = apiMiddleware;
