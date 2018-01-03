import express from 'express';
import participanteController from '../controllers/participanteController';

const router = express.Router();

router.route('/')
  .get(participanteController.list)
  .post(participanteController.create);

router.route('/:participanteId')
  .get(participanteController.get)
  .put(participanteController.update)
  .delete(participanteController.remove);

export default router;