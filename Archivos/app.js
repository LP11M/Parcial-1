var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cargar archivo de rutas
var project_routes = require('./routes/project');

//rutas
app.use('/api', project_routes);


//Exportar
module.exports =app;