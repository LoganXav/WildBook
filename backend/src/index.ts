import express from "express";
import authRoutes from "./routes/auth";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"


dotenv.config();

mongoose
  .connect(process.env.MONGODB as string)
  .then(() => {
    console.log("Wildbook connected to DB");

    const app = express();
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());

    app.use("/api/auth", authRoutes);

    app.listen(8080, () => {
      console.log("Server is working!");
    });
  })
  .catch((err) => {
    throw err;
  });
