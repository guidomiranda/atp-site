import { Schema } from 'mongoose';

export const BannerSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: Array,
  },
  image: {
    type: String,
  },
  bg: {
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
