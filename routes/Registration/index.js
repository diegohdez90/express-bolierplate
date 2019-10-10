import express from 'express';
import { RegistrationController } from '../../controller/RegistrationController';

const router = express.Router();

router.post('/', RegistrationController.signUp);

export default router;
