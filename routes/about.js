var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('about/index', { title: 'Express' });
});

module.exports = router;
