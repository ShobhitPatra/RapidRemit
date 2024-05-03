import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { filterUsers, getUsers } from "../controllers/user.controller.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    msg: "hello from user route",
  });
});
router.get("/bulk", protectRoute, getUsers);
router.get("/filter", protectRoute, filterUsers);

export default router;
