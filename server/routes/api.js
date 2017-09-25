var middleware = require("./../middleware");

module.exports = function(app){

  app.route("/api/about")
    .get(middleware.api.about);

  app.route("/api/albumCover")
    .get(middleware.api.albumCover);

  app.route("/api/albumImages")
    .get(middleware.api.albumImages);

  app.route("/api/bio")
    .get(middleware.api.bio);

  app.route("/api/blogContent")
    .get(middleware.api.blogContent);

  app.route("/api/contactInfo")
    .get(middleware.api.contactInfo);

  app.route("/api/featuredImage")
    .get(middleware.api.featuredImage);

}
