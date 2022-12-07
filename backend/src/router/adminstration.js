const routes = require('express').Router();

const AdministracaoController = require('../controller/AdministracaoController');


routes.post('/demoapi/1.0/nodehot/', AdministracaoController.nodehot);


module.exports = routes;
