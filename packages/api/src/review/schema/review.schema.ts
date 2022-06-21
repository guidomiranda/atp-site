import { Schema } from 'mongoose';

export const ReviewSchema = new Schema({
  body: {
    type: Array,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
