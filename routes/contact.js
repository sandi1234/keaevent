var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('contact/index', { title: 'Contact KEA', subTxT: 'Get in touch with KEA at:' });
});

module.exports = router;
