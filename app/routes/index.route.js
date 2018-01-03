import express from 'express';
import participanteRoute from './participanteRoute';
import sorteio from './sorteio';
import sendEmail from './enviarEmail'

const router = express.Router(); // eslint-disable-line new-cap

router.use('/enviarEmail', sendEmail);
router.use('/participante', participanteRoute);
router.use('/realizarSorteio', sorteio);

export default router;