import express from 'express';
import asyncHandler from 'express-async-handler';
import { Category } from '../models/category';
import { Item } from '../models/item';

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.render('categories', { categories });
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const items = await Item.find({ category: req.params.id });
    res.render('itemsByCategory', { items });
  })
);

export default router;
