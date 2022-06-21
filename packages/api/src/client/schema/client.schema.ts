import { Schema } from 'mongoose';

export const ClientSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: Array,
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
