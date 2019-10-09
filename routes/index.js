import express from 'express';

import HomePageRouter from './HomePage';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    message: 'Welcome to Twig',
  });
});

router.use('/home', HomePageRouter);

export default router;
