import express from "express";
const router = express.Router();
import authRoutes from "./auth.route.js";
router.get("/", (req, res) => {
  res.json({
    msg: "hello from root",
  });
});

router.use("/auth", authRoutes);
export default router;
