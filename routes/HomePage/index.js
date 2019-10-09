import express from 'express';
import HomePageController from '../../controller/HomePage';

const router = express.Router();

router.get('/', HomePageController.get);

export default router;
