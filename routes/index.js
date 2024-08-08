var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '転ばぬ先の お守りAI(アイ)ちゃん' });
});

module.exports = router;
