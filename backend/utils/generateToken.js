import jwt from "jsonwebtoken";
export const generateToken = (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
      expiresIn: "10d",
    });
    return token;
  } catch (error) {
    console.log("error in token generation : ", error.message);
  }
};
