import { stripe } from "../services/stripe.js";
import Products from "../models/productSchema.js";

export const createPaymentIntent = async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    let total = 0;
    for (const item of items) {
      const product = await Products.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      total += product.price * item.quantity;
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create payment intent" });
  }
};
