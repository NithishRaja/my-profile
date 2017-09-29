var mongoose = require("mongoose");

var profileSchema = mongoose.Schema({
  about: {
    name: {
      first: String,
      middle: String,
      last: String
    },
    age: Number,
    sex: String,
    birth: {
      year: Number,
      month: String,
      date: Number,
      day: Number
    },
    languages: [String]
  },
  contactInfo: {
    email: [String],
    mobile: [Number],
    socialMedia: [[String]],
    location: {
      lattitude: Number,
      longitude: Number,
      address: String
    }
  },
  bio: {
    intro: String,
    image: String
  },
  featuredImage: String,
  albumCover: [String],
  albumImages: [
    {
      id:Number,
      title: String,
      images: [String]
    },
  ],
  blogContent: [
    {
      id: Number,
      topic: String,
      content: [
        {
          heading: String,
          paragraph: String
        }
      ]
    }
  ]
});

module.exports = {
  profile: profileSchema
};
