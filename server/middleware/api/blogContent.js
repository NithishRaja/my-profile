var mongo = require("mongodb");

module.exports = function(req, res){
  var collection = mongo.DB.collection("profile");
  collection.findOne({}, {}, function(err, result){
    res.json(result.blogContent);
  });
};
