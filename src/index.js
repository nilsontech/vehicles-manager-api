const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// DECLARANDO A ROTA
// app.get('/', function (req, res) {
//   res.json({name: "Adriana"});
// });

// IMPORTANDO MÓDULOS DA API
const customers = require('./api/customers');
const vehicles = require('./api/vehicles')

// DEFININDO ROTAS DA API
app.use('/customers', customers);
app.use('/vehicles', vehicles);

// RODANDO O APP
app.listen(3000, function () {
  console.log('Estou rodando na porta 3000!');
});