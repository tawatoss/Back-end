const bodyParser = require("body-parser");
const express = require("express");



const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const rotaUsuarios = require('./routes/rotaUsuario');

app.use('/usuario',rotaUsuarios);

module.exports = app;

