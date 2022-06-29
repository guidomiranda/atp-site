import { Schema } from 'mongoose';

export const FilterSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  line: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  dia_ext: {
    type: String,
  },
  height: {
    type: String,
  },
  dia_int: {
    type: String,
  },
  thread: {
    type: String,
  },
  val_anti_ret: {
    type: String,
  },
  val_ali: {
    type: String,
  },
  model: {
    type: String,
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
