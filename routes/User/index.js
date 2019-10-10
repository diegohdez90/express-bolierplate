import express from 'express';
import { UserController } from '../../controller/User';

const router = express.Router();

router.post('/', UserController.post);
router.get('/', UserController.get);

export default router;
