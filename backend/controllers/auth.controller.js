import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { loginSchema, signupSchema } from "../zod/schemas.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { username, firstname, lastname, password } = req.body;
    const { success } = signupSchema.safeParse(req.body);
    if (!success) {
      res.status(400).json({
        msg: "invalid inputs",
      });
    }

    const existingUser = await User.findOne({
      username,
    });

    if (existingUser) {
      res.status(400).json({
        msg: "username already exists ",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      firstname,
      lastname,
      password: hashedPassword,
    });

    const userId = newUser._id;
    const token = generateToken(userId);
    res.status(200).json({
      msg: "user added successfully",
      user: newUser,
      token,
    });
  } catch (error) {
    console.log("error in signup controller : ", error.message);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { success } = loginSchema.safeParse(req.body);
    if (!success) {
      res.status(400).json({
        msg: "invalid inputs",
      });
    }
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({
        msg: "username does not exist",
      });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      res.status(400).json({
        msg: "passwords does not match",
      });
    }
    const token = generateToken(user._id);
    res.status(200).json({
      msg: "user logged in successfully",
      user,
      token,
    });
  } catch (error) {
    console.log("error in login controller : ", error.message);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

export const logout = (req, res) => {
  try {
    req.headers.authorization = "";
    res.status(200).json({
      msg: "user logged out successfully",
    });
  } catch (error) {
    console.log("error in logout controller : ", error.message);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
