var mongo  = require("mongodb");
var mongoClient = mongo.MongoClient;
var setDefaults = require("./setDefaults");

module.exports = {
  connect: function(){
    if(mongo.DB){
      return;
    }
    mongoClient.connect("mongodb://localhost:27017/myprofile", function(err, db){
      if(err!==null){
        throw err;
      }
      console.log("connected succesfully");
      mongo.DB = db;
      setDefaults(mongo);
    });
  }
}
