const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
const { AuthMechanism } = require("mongodb");
const router = express.Router();

router.get("/balance", authMiddleware, async (res, req) => {
  const targetAccount = await Account.findOne({
    userId: req.body.userId,
  });
  const balance = targetAccount.balance;
  res.status(200).json({
    balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = mongoose.startSession();
  session.startTransaction();
  const { amount, to } = req.body;

  const account = Account.findOne({
    userId: req.userId,
  }).session(session);

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: "insufficient balance",
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    res.status(400).json({
      msg: "no such account exists",
    });
  }

  await Account.updateOne(
    {
      userId: req.userId,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  );

  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  );
  await session.commitTransaction();

  res.json({
    message: "Transfer successful",
  });
});

module.exports = router;
