import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./router/userRouter.js";
import categoryRouter from "./router/categoryRouter.js";
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json()); // To parse JSON bodies sent by the frontend
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://tnvoyage-app.vercel.app",
    ],
    credentials: true,
  }),
);
connectDB();

app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);

app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:");
  console.error(err);

  res.status(500).json({
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
