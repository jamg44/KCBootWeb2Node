var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const segundoActual = (new Date()).getSeconds();

  res.render('index', {
    title: 'NodeAPI',
    parrafo: '<p> EJS lo proteje</p>',
    sinEscapar: '<p>sin escapar</p>',
    tiempo: {
      segundo: segundoActual,
      estado: segundoActual % 2 === 0
    },
    users: [{name: 'Smith'}, {name: 'Brown'}, {name: 'Jones'}]
  });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  console.log('req.params', req.params);
  res.send('ok');
});

router.get('/ruta/:id([0-9]+)/piso/:piso(A|B|C)', function(req, res, next) {
  console.log('req.params por ruta', req.params);
  res.send('ruta funciona')
});

router.get('/en/querystring', function(req, res, next) {
  console.log('req.query', req.query);
  res.send('ok recibido');
});

router.post('/unpost', function(req, res, next) {
  console.log('req.body', req.body);
  res.send('body recibido');
});

module.exports = router;
