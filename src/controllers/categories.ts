import express from 'express';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get(
  '/',
  asyncHandler((req, res, next) => {
    res.render('categories');
  })
);

export default router;
