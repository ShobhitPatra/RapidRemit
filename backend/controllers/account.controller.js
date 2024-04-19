import { Account } from "../models/account.model.js";

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

export const transfer = (req, res) => {};
