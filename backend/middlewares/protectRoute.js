import jwt from "jsonwebtoken";

export const protectRoute = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(400).json({
        msg: "token not received",
      });
      return;
    }

    if (!token.startsWith("Bearer")) {
      res.status(400).json({
        msg: "token does not starts with Bearer",
      });
      return;
    }

    const decoded = jwt.verify({ token }, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      res.status(400).json({
        msg: "token verification failed",
      });
      return;
    }

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
