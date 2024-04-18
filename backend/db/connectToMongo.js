import mongoose from "mongoose";

export const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("successfully connected to db");
  } catch (error) {
    console.log("connection to db failed ", error.message);
  }
};
