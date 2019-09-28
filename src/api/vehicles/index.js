const uuid = require('uuid/v1');
const { Router } = require('express');
const routes = new Router();

const vehiclesModel = require('../../models/vehicles');

routes.get("/", function (req, res) {
  vehiclesModel.find().then(resposta => {
    res.json(resposta);
  });
});

routes.post("/", function (req, res) {
  vehiclesModel.create({
    model: req.body.model,
    brand: req.body.brand
  });

  res.json({ msg: 'Veículo criado' });
});

routes.put("/:id", function (req, res) {
  const id = req.params.id;

  vehiclesModel.findOneAndUpdate({ _id: id }, {
    model: req.body.model,
    brand: req.body.brand
  }).then(() => { res.json({ msg: 'Veículo atualizado!' }) });
});

routes.delete("/:id", function (req, res) {
  const id = req.params.id;

  vehiclesModel.findOneAndRemove({ _id: id }).then(() => res.json({ msg: 'Veículo Deletado!' }))
});

module.exports = routes;