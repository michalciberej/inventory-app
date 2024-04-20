import { model, Schema, InferSchemaType } from 'mongoose';

const schema = new Schema({
  id: Schema.ObjectId,
  title: String,
  description: String,
  price: String,
  category: Schema.ObjectId,
});

export type ItemType = InferSchemaType<typeof schema>;

export const Item = model('item', schema);
