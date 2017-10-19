var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('signin/login', { title: 'Express' });
});

router.post('/index', function(req, res, next) {
      res.render('signin/index', { 
        title: 'Welcome to KEA Events', 
        subTxT: 'Find All the event that are happening at KEA', 
        subTxT2: 'Trending right now - join the newsletter for more updates!'
      });
  });

module.exports = router;
