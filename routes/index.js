import express from 'express';

import HomePageRouter from './HomePage';
import UsersRouter from './User';
import RequestRouter from  './Request';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    message: 'Welcome to Twig',
  });
});

router.use('/home', HomePageRouter);
router.use('/users', UsersRouter);
router.use('/request', RequestRouter);

export default router;
