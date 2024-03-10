const express = require("express");
const signupSchema = require("../validation/signupSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db");
const JWT_SECRET = require("../config");
const updateSchema = require("../validation/updateSchema");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
module.exports = router;

router.post("/signup", async (req, res) => {
  const { username, firstname, lastname, password } = req.body;
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    res.status(400).json({
      msg: "invalid inputs",
    });
  }
  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    res.status(400).json({
      msg: "username already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    firstname,
    lastname,
    password: hashedPassword,
  });
  const initialBalance = Math.random() * 10000 + 1;
  const newAccount = await Account.create({
    userId: newUser._id,
    balance: initialBalance,
  });
  const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);

  res.status(200).json({
    msg: "new user successfully registed",
    token,
    newUser,
    balance: newAccount.balance,
  });
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateSchema.safeParse(req.body);
  const { firstname, lastname, password } = req.body;
  if (!success) {
    res.status(400).json({
      msg: "invalid input ",
    });
  }

  const updatedUser = {};

  if (firstname) {
    updatedUser.firstname = firstname;
  }
  if (lastname) {
    updatedUser.lastname = lastname;
  }
  if (password) {
    updatedUser.password = password;
  }
  await User.updateOne(
    {
      _id: req.userId,
    },
    {
      $set: {
        firstname: updatedUser.firstname,
        lastname: updatedUser.lastname,
        password: updatedUser.password,
      },
    }
  );

  res.status(200).json({
    msg: "user credentials updated",
    updaetdTo: updatedUser,
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const filteredUsers = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
        },
      },
      {
        lastname: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: filteredUsers.map((user) => ({
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      _id: user._id,
    })),
  });
});
