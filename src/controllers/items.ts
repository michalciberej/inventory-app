import express from 'express';
import asyncHandler from 'express-async-handler';
import { Item } from '../models/item';

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const items = await Item.find({});
    res.render('items', { items });
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    try {
      const item = await Item.findById({ _id: req.params.id });
      res.render('itemById', { item });
    } catch (err) {
      console.log(err);
      res.redirect('/items'); //! CHANGE FOR NOTFOUND PAGE
    }
  })
);

router.post(
  '/:id',
  asyncHandler(async (req, res) => {
    await Item.deleteOne({ _id: req.params.id });
    res.redirect('/items');
  })
);

export default router;
