const db = require('../db');

const customers = db.model('customers', {
  name: String,
  cpf: String,
  cep: Number,
  street: String,
  number: String,
  adjunct: String,
  neighborhood: String,
  city: String,
  state: String,
  obs: String,
  created: { type: Date, default: Date.now }
});

module.exports = customers;