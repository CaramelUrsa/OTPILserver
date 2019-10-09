var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('GET request to the homepage')
});

var players = require('../players')

router.use('/players', players)

module.exports = router;
