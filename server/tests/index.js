var supertest = require("supertest");

var server = require("./../index.js");

describe("requests to api path", function(){
  describe("/api/about", function(){
    it("returns json content", function(done){
      supertest(server)
        .get("/api/about")
        .expect("Content-Type", /json/);
        done();
    });

    it("returns correct content", function(done){
      supertest(server)
        .get("/api/about")
        .expect(/name/);
        done();
    });
  });

  describe("/api/albumCover", function(){
    it("returns json content", function(done){
      supertest(server)
        .get("/api/albumCover")
        .expect("Content-Type", /json/);
        done();
    });

    it("returns link to images", function(done){
      supertest(server)
        .get("/api/albumCover")
        .expect(/https:/);
        done();
    });
  });

  describe("/api/albumImages", function(){
    it("returns json content", function(done){
      supertest(server)
        .get("/api/albumImages")
        .expect("Content-Type", /json/);
        done();
    });

    it("returns album object", function(done){
      supertest(server)
        .get("/api/albumImages")
        .expect(/title/);
        done();
    });
  });

  describe("/api/bio", function(){
    it("returns json content", function(done){
      supertest(server)
        .get("/api/bio")
        .expect("Content-Type", /json/);
        done();
    });

    it("returns intro and profile image", function(done){
      supertest(server)
        .get("/api/bio")
        .expect(/intro/)
        .expect(/https:/);
        done();
    });
  });

  describe("/api/blogContent", function(){
    it("returns json content", function(done){
      supertest(server)
        .get("/api/blogContent")
        .expect("Content-Type", /json/);
        done();
    });

    it("returns topic and content", function(done){
      supertest(server)
        .get("/api/blogContent")
        .expect(/topic/)
        .expect(/content/);
        done();
    });
  });

  describe("/api/contactInfo", function(){
    it("returns json content", function(done){
      supertest(server)
        .get("/api/contactInfo")
        .expect("Content-Type", /json/);
        done();
    });

    it("returns email, mobile number and location", function(done){
      supertest(server)
        .get("/api/contactInfo")
        .expect(/email/)
        .expect(/mobile/)
        .expect(/location/)
        .expect(/socialMedia/);
        done();
    });
  });

  describe("/api/featuredImage", function(){
    it("returns json content", function(done){
      supertest(server)
        .get("/api/featuredImage")
        .expect("Content-Type", /json/);
        done();
    });

    it("returns correct content", function(done){
      supertest(server)
        .get("/api/featuredImage")
        .expect(/https:/);
        done();
    });
  });
});
