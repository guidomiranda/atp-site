import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  capacity: {
    type: String,
    require: true,
  },
  cca10: {
    type: String,
    require: true,
  },
  polarity: {
    type: String,
    require: true,
  },
  large: {
    type: String,
    require: true,
  },
  width: {
    type: String,
    require: true,
  },
  height: {
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
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});
