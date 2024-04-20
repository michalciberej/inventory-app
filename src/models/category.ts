import { model, Schema, InferSchemaType } from 'mongoose';

const schema = new Schema({
  id: Schema.ObjectId,
  title: String,
  items: [Schema.ObjectId],
});

export type CategoryType = InferSchemaType<typeof schema>;

export const Category = model('category', schema);
