import express from "express";
import { balance, transfer } from "../controllers/account.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    msg: "hello from account route",
  });
});

router.post("/transfer", protectRoute, transfer);
router.get("/balance", protectRoute, balance);

export default router;
