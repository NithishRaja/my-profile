var mongo = require("mongodb");

module.exports = function(req, res){
  // getting info from database
  var collection = mongo.DB.collection("profile");
  collection.findOne({}, {}, function(err, result){
    //sending data as json
    res.json(result.featuredImage);
  });
};
