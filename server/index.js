// requiring vendor libraries
var express = require('express');
var path = require('path');
var bodyparser = require("body-parser");
var cookieParser = require("cookie-parser");
var redisSession = require("node-redis-session");

// requiring local functions and libraries
var configureViews = require("./views");
var configureRoutes = require("./routes");
var configureMainDatabase = require("./database/mongoDB").connect;

// initialize express
const app = express();
// seting port value inside app singleton
app.set("port", process.env.PORT || 5000);

// setting up cookies and sessions
app.use(cookieParser("cookie secret"));
app.use(redisSession());

// connection to mongodb
configureMainDatabase(app);

// using bodyparser to parse post requests
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// setting up views
configureViews(app);
// setting up routes
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
