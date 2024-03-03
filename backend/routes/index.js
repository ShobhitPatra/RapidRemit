const express = require("express");
const router = express.Router();
const userRoute = require("./user");
const accountRouter = require("./account");

router.use("/user", userRoute);
router.use("/account", accountRouter);
module.exports = router;
