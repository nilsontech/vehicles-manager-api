const db = require('../db');

const customers = db.model('customers', {
  name: String,
  street: String,
  created: { type: Date, default: Date.now }
});

module.exports = customers;