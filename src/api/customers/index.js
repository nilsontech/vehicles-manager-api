const uuid = require('uuid/v1');
const { Router } = require('express');
const routes = new Router();

// MODEL

const customersModel = require('../../models/customers');

routes.get('/', function (req, res) {
  customersModel.find().then(resposta => {
    res.json(resposta);
  });
});

routes.post('/', function (req, res) {
  customersModel.create({
    name: req.body.name,
    street: req.body.street
  });

  res.json({ msg: 'Cliente criado' });
});

routes.put('/:id', function (req, res) {
  const id = req.params.id;

  customersModel.findOneAndUpdate({ _id: id }, {
    name: req.body.name,
    street: req.body.street
  }).then(() => {res.json({ msg: 'Cliente atualizado!' })});
});

routes.delete("/:id", function (req, res) {
  const id = req.params.id;

  customersModel.findOneAndRemove( { _id: id }).then(() => res.json({ msg: 'Cliente Deletado!' }))
});

module.exports = routes;