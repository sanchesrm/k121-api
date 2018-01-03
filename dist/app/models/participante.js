'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParticipanteSchema = new Schema({
  nome: String,
  email: String,
  amigo: String
}, {
  versionKey: false
});

exports.default = mongoose.model('Participante', ParticipanteSchema);
//# sourceMappingURL=participante.js.map
