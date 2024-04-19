import mongoose from "mongoose";
import { Account } from "../models/account.model.js";
import { User } from "../models/user.model.js";

export const balance = async (req, res) => {
  try {
    const existingAccount = await Account.findOne({
      accountHolder: req.user._id,
    });

    if (!existingAccount) {
      res.status(400).json({
        msg: "account doesn't exist",
      });
    }
    res.status(200).json({
      balance: existingAccount.balance,
    });
  } catch (error) {
    console.log("error in balance controller : ", error.message);
    res.json({
      msg: "internal server error",
    });
  }
};

export const transfer = async (req, res) => {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { amount, toUserId } = req.body;

    const fromUserId = req.user._id;
    const fromAccount = await Account.findOne({
      accountHolder: fromUserId,
    }).session(session);

    if (!fromAccount || fromAccount.balance < amount) {
      await session.abortTransaction();
      res.status(400).json({
        msg: "insufficient balance",
      });
    }

    const toAccount = await Account.findOne({ accountHolder: to }).session(
      session
    );

    if (!fromAccount) {
      await session.abortTransaction();
      res.status(400).json({
        msg: "recievers account not found",
      });
    }

    await Account.updateOne(
      { accountHolder: fromUserId },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      {
        accountHolder: toUserId,
      },
      { $inc: { balance: amount } }
    ).session(session);
    await session.commitTransaction();
    res.status(200).json({
      message: "Transfer successful",
    });
  } catch (error) {
    console.log("error in transfer controller : ", error.message);
  }
};
