const mongoose = require("mongoose");
const { Schema } = require("zod");

mongoose.connect(
  "mongodb+srv://shobhit9999999:manikchacha@cluster0.jznhiz5.mongodb.net/paytmClone"
);

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  password: {
    type: String,
    minLength: 6,
    required: true,
  },
  balance: {
    type: Schema.Types.ObjectId,
    ref: "Accounts",
  },
});

const accountSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  balance: {
    type: Float32Array,
  },
});

const User = mongoose.model("User", userSchema);
const Accounts = mongoose.model("Accounts", accountSchema);
module.exports = {
  User,
  Accounts,
};
