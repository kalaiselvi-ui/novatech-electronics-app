import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // Each user should only have ONE cart document
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Reference to your Product schema
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity cannot be less than 1."],
          default: 1,
        },
      },
    ],
  },
  { timestamps: true },
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
