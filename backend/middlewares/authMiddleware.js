const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  //   if (!authHeader || !authHeader.startsWith('Bearer ')) {
  //     return res.status(403).json({});
  // }

  // const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(403).json();
  }

  try {
    console.log(token);
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.json(error);
  }
};

module.exports = authMiddleware;
