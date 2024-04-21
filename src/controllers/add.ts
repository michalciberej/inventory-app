import express from 'express';
import asyncHandler from 'express-async-handler';
import { Item, ItemType } from '../models/item';
import { ObjectId } from 'mongodb';
import { Category } from '../models/category';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const categories = await Category.find({});

    res.render('add', { categories });
  })
);

router.post(
  '/',
  body('title', 'Title must not be empty.')
    .notEmpty()
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('price', 'Price must be positive number.').notEmpty().isInt({ min: 1 }),
  body('description', 'Description must not be empty.')
    .notEmpty()
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('category', 'Category is not in the database').notEmpty(),
  asyncHandler(async (req, res) => {
    const { title, price, category, description } = req.body;
    const err = validationResult(req);

    const newItem: ItemType = {
      _id: new ObjectId(),
      title,
      price,
      description,
      category,
    };

    if (!err.isEmpty()) {
      const categories = await Category.find({});
      console.log(err.array());
      res.render('add', {
        categories,
        err: err.array({ onlyFirstError: true }),
      });
    } else {
      Item.create(newItem);
      res.redirect('/items');
    }
  })
);

export default router;
