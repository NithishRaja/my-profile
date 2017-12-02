var mongo = require("mongodb");

module.exports = function(req, res){
  // getting info from database
  var collection = mongo.DB.collection("profile");
  var albumCover = [];
  collection.findOne({}, {}, function(err, result){
    result.albumImages.forEach(function(image, index){
      if(index===0){
        albumCover = [image.images[0]];
      }else{
        albumCover.push(image.images[0]);
      }
    });
    //sending data as json
    res.json(albumCover);
  });
};
