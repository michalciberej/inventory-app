import { model, Schema, InferSchemaType, Types } from 'mongoose';

const schema = new Schema({
  _id: { type: Schema.ObjectId, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Types.ObjectId, ref: 'categories', required: true },
});

export type ItemType = InferSchemaType<typeof schema>;

export const Item = model('item', schema);
