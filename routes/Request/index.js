import express from 'express';
import { RequestController } from '../../controller/Request';

const router = express.Router();

router.post('/', RequestController.post);

export default router;
