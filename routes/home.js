var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Welcome to KEA', subTxT: 'Sign in to see KEA Events' });
});

module.exports = router;
