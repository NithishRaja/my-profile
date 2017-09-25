var apiMiddleware = require("./api");

exports.home = function(req, res){
  res.render("main");
};

exports.api = apiMiddleware;
