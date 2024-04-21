import { model, Schema, InferSchemaType, Types } from 'mongoose';

const schema = new Schema({
  _id: {type: Schema.ObjectId, required: true},
  title: {type: String, required: true},
});

export type CategoryType = InferSchemaType<typeof schema>;

export const Category = model('category', schema);
