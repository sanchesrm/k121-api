import express from 'express';
import enviarEmailController from '../controllers/enviarEmailController';

const router = express.Router();

router.route('/')
  .get(enviarEmailController.sendEmail)

export default router;