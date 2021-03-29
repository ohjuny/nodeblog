var express = require('express');
var router = express.Router();

/* GET posts listing */
router.get('/', function(req, res, next) {
  res.send('open posts page');
  // res.render('posts', { title: 'Posts' });
});

module.exports = router;
