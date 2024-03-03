const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
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

// router.post("/transfer",(req,res)=>{
//   const session  = mongoose.startSession()

// })

module.exports = router;
