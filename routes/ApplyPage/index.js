import express from 'express';
import ApplyController from '../../controller/ApplyPage';

const router = express.Router();

router.get('/', ApplyController.get);

export default router;
