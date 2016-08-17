var express = require('express');
var router = express.Router();


exports.index = function(req, res){
res.render('index', { title: 'ejs' });};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

router.get('/ambulatorial', function(req, res) {
  res.render('ambulatorial', { title: 'Atendimento Ambulatorial' });
});

router.get('/hospitalar', function(req, res) {
  res.render('hospitalar', { title: 'Atendimento Hospitalar' });
});

router.get('/acidente', function(req, res) {
  res.render('acidente', { title: 'Registro de acidente' });
});

router.get('/test', function(req, res) {
  res.render('test', { title: 'test' });
});

router.get('/template', function(req, res) {
  res.render('template', { title: 'template' });
});

router.get('/obitos', function(req, res) {
  res.render('obitos', { title: 'Obitos' });
});

router.get('/mapa', function(req, res) {
  res.render('mapa', { title: 'mapa' });
});

router.get('/usuarios', function(req, res) {
  res.render('usuarios', { title: 'usuarios' });
});

router.get('/busca/usuarios', function(req, res) {
  res.render('buscaUsuarios', { title: 'Busca Usuarios' });
});

router.get('/busca/acidente', function(req, res) {
  res.render('buscaOcorrencias', { title: 'Busca Ocorrencia' });
});

router.get('/busca', function(req, res) {
  res.render('busca', { title: 'busca' });
});


module.exports = router;

