'use strict';

const _ = require('lodash')
const $q = require('q')
const mongoose = require('mongoose');
const Participante = mongoose.model('Participante');
const nodemailer = require("nodemailer");

function sendEmail (req, res, next) {
    let smtpTransport = nodemailer.createTransport({
       service: "Gmail",
       auth: {
           user: "amigosecretok121@gmail.com",
           pass: "amigo_k121"
       }
    });

    Participante.find().exec()
        .then(participantes => {
            participantes = _.keyBy(participantes, '_id');
            _.forEach(participantes, participante => {
    
                smtpTransport.sendMail({
                    from: 'frontEndRemoto@k121-kenoby.com',
                    to: participantes[participante.amigo].email,
                    subject: 'K121 Amigo - Secreto Kenoby',
                    text: `
                        Olá ${participante.nome},

                        Já sorteamos o nosso amigo secreto e o seu é:

                        ${participantes[participante.amigo].nome}

                        Não esquece de comprar um presente bem bacana.
                    `
                }, function(error, response) {  //callback
                    if(error) {
                        res.status(500).send('Erro');
                    } else {
                        res.status(200).send('Sucesso');
                    }
                });
            })
        });
}

export default { sendEmail };
