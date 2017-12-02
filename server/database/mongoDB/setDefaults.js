const profile = require("./../../../info/profile.json");

module.exports = function(mongo){
  var aboutCollection = mongo.DB.collection("profile");

  var query = {};

  var newProfileDocument = {
    $setOnInsert: profile
  };

  var options = {
    upsert: true,
    returnOriginal: false
  }

  // if data doesn't exist update database
  aboutCollection.findOneAndUpdate(query, newProfileDocument, options, function(err, res){
    console.log("default values set");
  });

}
