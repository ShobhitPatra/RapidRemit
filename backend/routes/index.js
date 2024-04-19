import express from "express";
const router = express.Router();
import authRoutes from "./auth.route.js ";
import accountRoutes from "./account.route.js";
import userRoutes from "./user.route.js";

router.get("/", (req, res) => {
  res.json({
    msg: "hello from root",
  });
});

router.use("/auth", authRoutes);
router.use("/account", accountRoutes);
router.use("/user", userRoutes);

export default router;
