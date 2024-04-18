import mongoose from "mongoose";
import { string } from "zod";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minLength: true,
  },
  pasword: {
    minLength: 8,
    required: true,
  },
});

export const User = mongoose.model("user", userSchema);
