import express from 'express';

import HomePageRouter from './HomePage';
import UsersRouter from './User';
import RequestRouter from './Request';
import ApplyRouter from './ApplyPage';
import RegistrationRouter from './Registration';


const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    message: 'Welcome to Twig',
  });
});

router.use('/home', HomePageRouter);
router.use('/users', UsersRouter);
router.use('/apply', ApplyRouter);
router.use('/request', RequestRouter);
router.use('/registration', RegistrationRouter);

export default router;
