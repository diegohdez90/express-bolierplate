import express from 'express';
import { RequestController } from '../../controller/Request';

const router = express.Router();

router.post('/', RequestController.post);
router.get('/', RequestController.get);

export default router;
