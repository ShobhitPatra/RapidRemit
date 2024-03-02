const express = require("express");
const {
  userValidatationSchema,
  signupSchema,
  updateSchema,
} = require("../validationSchemas");
const { User, Accounts } = require("../db");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", authMiddleware, async (req, res) => {
  const userDets = req.body;
  const { success } = signupSchema.safeParse(userDets);
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
  const balance = Math.floor(Math.random() * 10000 + 1);
  const newUser = await User.create({
    username: userDets.username,
    password: userDets.password,
    firstname: userDets.firstname,
    lastname: userDets.lastname,
  });
  await Accounts.create({
    balance,
  });
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
  const { success } = updateSchema.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      msg: "password length not apt",
    });
  }

  await User.updateOne({
    id: req.userId,
  });

  res.status(200).json({
    msg: "updated successfully",
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
    users: filteredUsers.map((e) => {
      username: e.username;
      firstname: e.firstname;
      lastname: e.lastname;
      _id: e._id;
    }),
  });
});

module.exports = router;
