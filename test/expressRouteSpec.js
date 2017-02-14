const should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080/Restaurant");

describe.only("Testing  POST route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .post("/add")
       .send({ name: "alpha" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         (res.text).should.equal("alpha", "Enter only alphabets");
         done();
       });

 });
});

describe.only("Testing DELETE route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .delete("/delete")
       .send({ id: "101" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         (res.text).should.equal("delete 101", "id is not present");
         done();
       });

 });
});

describe.only("Testing UPDATE route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .put("/update")
       .send({ food: "aaa" })
       .expect(200)
       .end(function(err,res){
        should.not.exist(err);
        (res.text).should.equal("food is aaa","not updated");
         done();
       });

 });
});

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .get("/message")
        .expect(200)
        .end(function(err,res){
          if (err) {
                throw err;
          }
          res.text.should.equal("Hello from message",res.text, "response text is not matching with test string!");
          done();
        });
  });

  });
