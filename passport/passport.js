var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var user = require('../server/users/userEntity');
// Configure the local strategy for use by Passport.

passport.use(new Strategy(function(username, password, cb) {
   users.findOne({"username": username}, function(err, user)
   {
     if (err) { return cb(err); }
     if (!user) {return cb(null, false); }
     if (user.password != password) {return cb(null, false); }
     return cb(null, user);
   });
 }));

 // Configure Passport authenticated session persistence.
 passport.serializeUser(function(user, done) {
   console.log('serializeUser');
   done(null, user.id);
});

 // deserializing.
passport.deserializeUser(function(id, done) {
 console.log("deserializeUser")
 users.findById(id, function(err, user) {
   done(err, user);
 });
});
module.exports = passport;
