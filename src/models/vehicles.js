const db = require('../db');

const vehicles = db.model('vehicles', {
  model: String,
  brand: String,
  created: { type: Date, default: Date.now }
});

module.exports = vehicles;