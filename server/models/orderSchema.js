// Example structural draft for your future order schema
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: { type: Object, required: true },
    paymentStatus: { type: String, default: "Pending" }, // 'Paid', 'Failed'
    paymentIntentId: { type: String }, // To track gateway transactions
    totalAmount: { type: Number, required: true },
  },
  { timestamps: true },
);
