import express from "express";
import { isAdmin } from "../controller/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import upload from "../config/multer.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controller/productController.js";

const productRouter = express.Router();

productRouter.post(
  "/create",
  authMiddleware,
  isAdmin,
  upload.array("images", 4),
  createProduct,
);

productRouter.put(
  "/update/:id",
  authMiddleware,
  isAdmin,
  upload.array("images", 4),
  updateProduct,
);

productRouter.delete("/delete/:id", authMiddleware, isAdmin, deleteProduct);

productRouter.get("/all", getAllProducts);

export default productRouter;
