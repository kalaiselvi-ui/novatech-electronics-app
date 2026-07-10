import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../controller/categoryController.js";
import { isAdmin } from "../controller/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import upload from "../config/multer.js";

const categoryRouter = express.Router();

categoryRouter.post(
  "/create",
  authMiddleware,
  isAdmin,
  upload.single("image"),
  createCategory,
);

categoryRouter.put(
  "/update/:id",
  authMiddleware,
  isAdmin,
  upload.single("image"),
  updateCategory,
);

categoryRouter.delete("/delete/:id", authMiddleware, isAdmin, deleteCategory);

categoryRouter.get("/all", getAllCategory);

export default categoryRouter;
