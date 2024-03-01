const { jwt } = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

const authMiddleware = (res, req, next) => {
  const authHeader = req.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).json({});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    next();
  } catch (error) {
    res.status(403).json({
      error,
    });
  }
};

module.exports = {
  authMiddleware,
};
