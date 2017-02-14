const should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080/restaurant");

describe("Testing calculator POST route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .post("/add")
       .send({ "restaurantName":"keerthi","address":"xyz","mobNum":"1234567890" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         // (res.text).should.be.equal("invalid","Expected value not matching with response1");
         (res.text).should.be.equal("valid","Expected value not matching with response");
         done();
       });
 });
 // it("should handle and send the computed info 1", function(done){
 //   url
 //       .post("/add")
 //       .send({ "name":"","id":"123" })
 //       .expect(200)
 //       .end(function(err,res){
 //         should.not.exist(err);
 //         (res.text).should.be.equal("invalid","Expected value not matching with response");
 //         done();
 //       });
 // });
});
