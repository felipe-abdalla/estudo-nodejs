var express = require('express')
var router = express.Router()
const fn = require('../funcoes')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Felipe' });
});

router.get('/teste', function(req, res, next) {
  fn.resultado(req, res)
});

router.get('/leandro', function(req, res, next) {
  res.render('index', { title: 'Leandro' });
});

module.exports = router;
