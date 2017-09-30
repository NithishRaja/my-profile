var expressLayouts = require("express-ejs-layouts");

module.exports = function(app){
  // setting directory to get views from
  app.set("views", __dirname);
  // setting ejs as view engine
  app.set("view engine", "ejs");
  // setting up express-ejs-layouts
  app.set("layout extractScripts", true);
  app.set("layout extractStyles", true);
  app.use(expressLayouts);

}
