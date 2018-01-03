const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticipanteSchema = new Schema({
  nome: String,
  email: String,
  amigo: String
}, {
    versionKey: false
});

export default mongoose.model('Participante', ParticipanteSchema);