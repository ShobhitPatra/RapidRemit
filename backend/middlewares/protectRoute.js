import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

export const protectRoute = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(400).json({
        msg: "token not received",
      });
      return;
    }

    if (!authHeader.startsWith("Bearer")) {
      res.status(400).json({
        msg: "token does not starts with Bearer",
      });
      return;
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify({ token }, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      res.status(400).json({
        msg: "token verification failed",
      });
      return;
    }
    const user = await User.findById(decoded._id);
    if (!user) {
      res.status(400).json({
        msg: "user not found",
      });
    }
    req.user = user;
    res.status(200).json({
      msg: "token verified successfully",
    });
    next();
  } catch (error) {
    console.log("error in protectRoute middleware : ", error.message);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
