var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e, docs) {
    res.render('users', {
      'users': docs
    });
  });
});

router.get('/signup', function(req, res) {
  res.render('signup');
})

router.post('/signup', function(req, res) {
  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var username = req.body.username;
  var email = req.body.email;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
      "username" : username,
      "email" : email
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
      }
      else {
          // And forward to success page
          res.redirect('/users');
      }
  });
});

router.post('/delete', function(req, res) {
  console.log('delete was clicked');
  // // Set our internal DB variable
  // var db = req.db;

  // // Get our form values. These rely on the "name" attributes
  // var username = req.body.username;
  // var email = req.body.email;

  // // Set our collection
  // var collection = db.get('usercollection');

  // // Submit to the DB
  // collection.delete({
  //     "username" : username,
  //     "email" : email
  // }, function (err, doc) {
  //     if (err) {
  //         // If it failed, return error
  //         res.send("There was a problem adding the information to the database.");
  //     }
  //     else {
  //         // And forward to success page
  //         res.redirect('/users');
  //     }
  // });
});

module.exports = router;
