var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    nome: 'Felipe',
    idade: 29,
    profissao: 'Programador'
  });
});

module.exports = router;
