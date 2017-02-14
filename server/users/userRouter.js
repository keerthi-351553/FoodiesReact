'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const userModel = require('./userEntity').userModel;
const connectFlash = require('connect-flash');

router.post('/add', function(req, res) {
    logger.debug('Received request' + JSON.stringify(req.body));
    if (req.body) {
        let user = new userModel(req.body);
        user.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({message: 'User saved successfully'});
            }
        });
    }
})
router.delete('/delete/:id', function(req, res) {
    logger.debug('Received request' + JSON.stringify(req.body));
    if (req.params.id) {
        let id = req.params.id;
        userModel.findByIdAndRemove(id, function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({message: 'User deleted successfully'});
            }
        });
    }
})
router.patch('/update/:id', function(req, res) {
    logger.debug('Received request' + JSON.stringify(req.body));
    if (req.params.id) {
        let id = req.params.id;
        userModel.findByIdAndUpdate(id, {
            $set: {
                userName: req.body.userName
            }
        }, {
            new: true
        }, function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({message: 'User updated successfully'});
            }
        });
    }
})
// Get details of all users in the system
router.get('/', function(req, res) {
    userModel.find({}, function(allusers, err) {
        if (err) {
            res.send(err);
        } else {
            res.json(allusers);
        }
    });
})
router.post('/login',
 passport.authenticate('local', {
 failureFlash: 'Invalid Username and Password',
 successFlash: "Welcome to Movie App"}
),
function(req, res) {
  console.log('aaa');
   res.json({responseText:'authenticated'});
}
);

router.get('/logout', function(req, res){
console.log('Session deleted');
req.session.destroy();
res.send({redirect: '/'});
});

module.exports = router;
