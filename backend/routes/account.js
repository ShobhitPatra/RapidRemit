const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { Accounts } = require("../db");
const router = express.Router();

router.get("/balance", authMiddleware, async (res, req) => {
  const targetAccount = await Accounts.findOne({
    userId: req.body.userId,
  });
  const balance = targetAccount.balance;
  res.status(200).json({
    balance,
  });
});

module.exports = {
  router,
};
