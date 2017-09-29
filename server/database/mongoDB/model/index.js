var mongoose = require("mongoose");
var schema = require("./schema");

var profileModel = mongoose.model("profile", schema.profile);

module.exports = {
  profile: profileModel
};
