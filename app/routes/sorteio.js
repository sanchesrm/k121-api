import express from 'express';
import realizarSorteioController from '../controllers/realizarSorteioController';

const router = express.Router();

router.route('/')
  .get(realizarSorteioController.sortear)

export default router;