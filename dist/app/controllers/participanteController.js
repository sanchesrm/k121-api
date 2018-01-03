'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('mongoose');
var Participante = mongoose.model('Participante');
var ObjectId = require('mongodb').ObjectID;
var _ = require('lodash');

/**
 * Get participante
 * @returns {Participante}
 */
function get(req, res) {
  Participante.find({ '_id': ObjectId(req.params.participanteId) }).exec().then(function (participante) {
    return res.json(participante);
  }).catch(function (e) {
    return next(e);
  });
}

/**
 * Cria um novo participante
 * @property {string} req.body.nome 
 * @property {string} req.body.email
 * @returns {Participante}
 */
function create(req, res, next) {
  var participante = new Participante({
    nome: req.body.nome,
    email: req.body.email,
    amigo: ""
  });

  participante.save().then(function (savedParticipante) {
    return res.json(savedParticipante);
  }).catch(function (e) {
    return next(e);
  });
}

/**
 * Update participante
 * @property {string} req.body.nome
 * @property {string} req.body.email
 * @returns {204}
 */
function update(req, res, next) {
  var participante = req.body;

  console.log(participante);
  Participante.findOneAndUpdate({ '_id': participante._id }, participante, { upsert: true }, function (err, resp) {
    if (err) {
      next(err);
    } else {
      res.sendStatus(204);
    }
  });
}

/**
 * Get para lista de participantes.
 * @returns [{Participante}]
 */
function list(req, res, next) {
  Participante.find().exec().then(function (participantes) {
    return res.json(_.keyBy(participantes, '_id'));
  }).catch(function (e) {
    return console.log(e);
  });
}

/**
 * Delete participante.
 * @returns {participante}
 */
function remove(req, res, next) {
  var participante = ObjectId(req.params.participanteId);
  Participante.find({ '_id': participante }).remove().then(function (deletedObject) {
    return res.json(deletedObject);
  }).catch(function (e) {
    return next(e);
  });
}

exports.default = { get: get, create: create, update: update, list: list, remove: remove };
//# sourceMappingURL=participanteController.js.map
