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
  // const userDets = req.body;
  // if (!userValidatationSchema.success) {
  //   res.status(411).json({
  //     msg: "invaid inputs",
  //   });
  // } else {
  //   if (
  //     await User.findOne({
  //       username: userDets.username,
  //     })
  //   ) {
  //     res.status(411).json({
  //       msg: "already an existing user",
  //     });
  //   } else {
  //     const token = await jwt.sign(userDets.username, SECRET_KEY);
  //     res.json({
  //       token,
  //     });
  //   }
  // }
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

module.exports = router;
