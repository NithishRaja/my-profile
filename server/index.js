var express = require('express');
var path = require('path');
var bodyparser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");

var configureViews = require("./views");
var configureRoutes = require("./routes");
var configureMainDatabase = require("./database/mongoDB");
var configureSessionDatabase = require("./database/redis");
var setDefaults = require("./database/mongoDB/setDefaults");

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(cookieParser("cookie secret"));
app.use(session(configureSessionDatabase(session)));

configureMainDatabase(app);

setDefaults();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

configureViews(app);

configureRoutes(app);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

if(exports.main === module){
  app.listen(app.get("port"), function(err){
    if(err) return console.log(err);
    console.log("Server is running on port %d, press Ctrl+C to close", app.get("port"));
  });
}else{
  module.exports = app;
}
