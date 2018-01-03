'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var mongoose = require('mongoose');
var Participante = mongoose.model('Participante');
var ObjectId = require('mongodb').ObjectID;
var _ = require('lodash');

function sortear(req, res, next) {
	Participante.find().exec().then(function (participantes) {
		//Função que gera números randomicos em um intervalo tendo a certeza que a posição i não se repetiria no número gerado,
		//isso evita que o determinado participante não seja sorteado consigo mesmo 
		var randomArray = [];
		for (var i = 0; randomArray.length < participantes.length; i++) {
			var numeroGerado = void 0;
			do {
				numeroGerado = Math.floor(Math.random() * (participantes.length - 0));
			} while (i == numeroGerado);

			randomArray.push(numeroGerado);
			randomArray = _.uniq(randomArray);
		}

		var sortedParticipantes = _.map(participantes, function (p, i) {
			p.amigo = participantes[randomArray[i]]._id;

			Participante.findOneAndUpdate({ '_id': p._id }, p, { upsert: true }, function (err, resp) {
				if (err) {
					console.log(err);
				}
			});

			return p;
		});

		res.json(_.keyBy(participantes, '_id'));
	}).catch(function (e) {
		return console.log(e);
	});
}

exports.default = { sortear: sortear };
//# sourceMappingURL=realizarSorteioController.js.map
