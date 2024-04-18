import express from "express";
import { signup, login } from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    msg: "hello from auth route",
  });
});
router.post("/signup", signup);
router.post("/login", login);

export default router;
