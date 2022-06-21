import { Schema } from 'mongoose';

export const ReviewSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
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
