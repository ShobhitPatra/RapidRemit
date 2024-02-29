const express = require("express");
const {
  userValidatationSchema,
  signupSchema,
} = require("../validationSchemas");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const userDets = req.body;
  const success = signupSchema.safeParse(userDets);
  if (!success) {
    res.status(411).json({
      msg: "invalid input",
    });
  }

  const user = await User.findOne({
    username: userDets.username,
  });

  if (user._id) {
    res.status(411).json({
      msg: "username already exists",
    });
  }

  const newUser = await User.create(userDets);
  const token = jwt.sign({ userId: newUser._id }, SECRET_KEY);
  res.status(200).json({
    msg: "user created successfully",
    token,
  });
});

router.post("/signin", async (req, res) => {
  const userDets = req.body;
  const user = await User.findOne({
    username: userDets.username,
    password: userDets.password,
  });
  const userId = user._id;
  const token = jwt.sign({ userId, SECRET_KEY });
  if (user) {
    res.status(200).json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "invalid credentials",
    });
  }
});

module.exports = router;
