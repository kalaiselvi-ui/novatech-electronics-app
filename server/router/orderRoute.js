import express from "express";
import { createOrder, getMyOrders } from "../controller/orderController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const orderRouter = express.Router();

orderRouter.post("/orders", authMiddleware, createOrder);
orderRouter.get("/my-orders", authMiddleware, getMyOrders);

export default orderRouter;
