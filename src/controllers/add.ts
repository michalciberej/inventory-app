import express from 'express';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('add');
});

router.post(
  '/',
  asyncHandler((req, res, next) => {
    res.redirect('/items');
  })
);

export default router;
