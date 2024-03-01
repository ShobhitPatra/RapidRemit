const express = require("express");
const {
  userValidatationSchema,
  signupSchema,
} = require("../validationSchemas");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", authMiddleware, async (req, res) => {
  const userDets = req.body;
  const parsedUser = signupSchema.safeParse(userDets);
  if (!parsedUser.success) {
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

router.put("/", authMiddleware, async (req, res) => {
  const updatedDets = req.body;
  const password = updatedDets.password;
  const firstName = updatedDets.firstName;
  const lastName = updatedDets.lastName;

  const parsedResult = signupSchema.safeParse(updatedDets);

  if (parsedResult.success) {
    await User.updateOne({
      firstName,
      lastName,
      password,
    });
    res.status(200).json({
      msg: "user details updated",
    });
  } else {
    res.status(411).json({
      msg: "password too small",
    });
  }
});

module.exports = router;
