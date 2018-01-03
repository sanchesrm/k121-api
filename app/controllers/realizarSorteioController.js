const mongoose = require('mongoose');
const Participante = mongoose.model('Participante');
const ObjectId = require('mongodb').ObjectID;
const _ = require('lodash');

function sortear(req, res, next) {
	Participante.find().exec()
		.then(participantes => {
			//Função que gera números randomicos em um intervalo tendo a certeza que a posição i não se repetiria no número gerado,
			//isso evita que o determinado participante não seja sorteado consigo mesmo 
		    let randomArray = [];
	    	for (let i=0; randomArray.length<participantes.length; i++) {
		    	let numeroGerado;
		    	do {
		    		numeroGerado = Math.floor(Math.random() * ( participantes.length - 0));
		    	} while (i == numeroGerado);

		    	randomArray.push(numeroGerado);
				randomArray = _.uniq(randomArray);
		    }

			const sortedParticipantes = _.map(participantes, (p, i) => {
				p.amigo = participantes[randomArray[i]]._id; 

				Participante.findOneAndUpdate({'_id': p._id}, p, {upsert: true}, (err, resp) => {
					if (err) {
						console.log(err);
					}
				})

				return p;
			});


			res.json(_.keyBy(participantes, '_id'))	
		}).catch(e => console.log(e));
}

export default { sortear };
