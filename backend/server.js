import express from "express";
import dotenv from "dotenv";
import rootRouter from "./routes/index.js";
import cors from "cors";
import { connectToMongo } from "./db/connectToMongo.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "hello from server.js",
  });
});

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectToMongo();
});
