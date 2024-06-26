import { User } from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUser = req.user;
    const allUsers = await User.find({ _id: { $ne: loggedInUser._id } });

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in getUsers controlller : ", error.message);
    res.status(400).json({
      msg: "internal server error",
    });
  }
};

export const filterUsers = async (req, res) => {
  try {
    const filter = req.query.filter || " ";

    const filteredUsers = await User.find({
      $or: [
        {
          firstname: {
            $regex: filter,
          },
        },
        {
          lastname: {
            $regex: filter,
          },
        },
      ],
    });

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error in filterUsers controller :", error.message);
    res.status(400).json({
      msg: "internal server error ",
    });
  }
};
