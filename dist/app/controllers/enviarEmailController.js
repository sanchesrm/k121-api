'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _ = require('lodash');
var $q = require('q');
var mongoose = require('mongoose');
var Participante = mongoose.model('Participante');
var nodemailer = require("nodemailer");

function sendEmail(req, res, next) {
    var smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "amigosecretok121@gmail.com",
            pass: "amigo_k121"
        }
    });

    Participante.find().exec().then(function (participantes) {
        participantes = _.keyBy(participantes, '_id');
        _.forEach(participantes, function (participante) {

            smtpTransport.sendMail({
                from: 'frontEndRemoto@k121-kenoby.com',
                to: participantes[participante.amigo].email,
                subject: 'K121 Amigo - Secreto Kenoby',
                text: '\n                        Ol\xE1 ' + participante.nome + ',\n\n                        J\xE1 sorteamos o nosso amigo secreto e o seu \xE9:\n\n                        ' + participantes[participante.amigo].nome + '\n\n                        N\xE3o esquece de comprar um presente bem bacana.\n                    '
            }, function (error, response) {
                //callback
                if (error) {
                    res.status(500).send('Erro');
                } else {
                    res.status(200).send('Sucesso');
                }
            });
        });
    });
}

exports.default = { sendEmail: sendEmail };
//# sourceMappingURL=enviarEmailController.js.map
