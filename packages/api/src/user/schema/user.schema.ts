import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: 'MODERADOR',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
