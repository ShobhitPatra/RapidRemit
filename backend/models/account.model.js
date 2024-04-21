import mongoose from "mongoose";
import { User } from "./user.model.js";

const accountsSchema = mongoose.Schema({
  accountHolder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  balance: {
    type: Number,
  },
});

export const Account = mongoose.model("Account", accountsSchema);
