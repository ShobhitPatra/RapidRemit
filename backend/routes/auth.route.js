import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    msg: "hello from auth route",
  });
});

export default router;
