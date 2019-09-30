const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use('*');

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

const PORT = process.env.PORT || 3000;

// RODANDO O APP
app.listen(PORT, function () {
  console.log('Estou rodando na porta ${PORT}!');
});