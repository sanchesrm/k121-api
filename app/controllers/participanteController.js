const mongoose = require('mongoose');
const Participante = mongoose.model('Participante');
const ObjectId = require('mongodb').ObjectID;
const _ = require('lodash');

/**
 * Get participante
 * @returns {Participante}
 */
function get(req, res) {
  Participante.find({'_id': ObjectId(req.params.participanteId)}).exec()
	.then(participante => res.json(participante))
    .catch(e => next(e));
}

/**
 * Cria um novo participante
 * @property {string} req.body.nome 
 * @property {string} req.body.email
 * @returns {Participante}
 */
function create(req, res, next) {
  const participante = new Participante({
    nome: req.body.nome,
    email: req.body.email,
    amigo: ""
  });

  participante.save()
    .then(savedParticipante => res.json(savedParticipante))
    .catch(e => next(e));
}

/**
 * Update participante
 * @property {string} req.body.nome
 * @property {string} req.body.email
 * @returns {204}
 */
function update(req, res, next) {
	const participante = req.body;

	console.log(participante);
	Participante.findOneAndUpdate({'_id': participante._id}, participante, {upsert: true}, (err, resp) => {
		if (err) {
			next(err);
		} else {
			res.sendStatus(204);
		}
	})
}

/**
 * Get para lista de participantes.
 * @returns [{Participante}]
 */
function list(req, res, next) {
	Participante.find().exec()
		.then(participantes => res.json(_.keyBy(participantes, '_id')))
		.catch(e => console.log(e));
}

/**
 * Delete participante.
 * @returns {participante}
 */
function remove(req, res, next) {
  const participante = ObjectId(req.params.participanteId);
  Participante.find({'_id' : participante }).remove()
    .then(deletedObject => res.json(deletedObject))
    .catch(e => next(e));
}

export default { get, create, update, list, remove };