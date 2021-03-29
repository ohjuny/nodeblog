var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e, docs) {
    res.render('users', {
      'title': 'Node Blog',
      'users': docs
    });
  });
});

module.exports = router;
