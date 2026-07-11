import express from "express";
import {
  addToCart,
  updateCartQuantity,
  removeItemFromCart,
  clearCart,
  getCart,
} from "../controller/cartController.js";

const cartRouter = express.Router();

// Get logged-in user's cart
cartRouter.get("/get", getCart);

// Add product to cart
cartRouter.post("/addToCart/:id", addToCart);

// Update quantity (increment/decrement)
cartRouter.patch("/updateCart/:id", updateCartQuantity);

// Remove a product from cart
cartRouter.delete("/removeItem/:id", removeItemFromCart);

// Clear entire cart
cartRouter.delete("/clearCart", clearCart);

export default cartRouter;
