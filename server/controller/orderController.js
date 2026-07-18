import Products from "../models/productSchema.js";
import Order from "../models/orderSchema.js";

export const createOrder = async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      paymentMethod,
      paymentStatus,
      paymentIntentId,
      totalAmount,
    } = req.body;

    const orderItems = [];
    let total = 0;
    for (const item of items) {
      const product = await Products.findById(item.productId);
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      total += product.price * item.quantity;

      orderItems.push({
        product: product._id,
        quantity: item.quantity,
        price: product.price,
      });
    }

    const order = await Order.create({
      user: req.user.user,
      items: orderItems,
      shippingAddress,
      paymentMethod,
      paymentStatus,
      paymentIntentId,
      totalAmount: total,
    });

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.log("ORDER ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.user,
    })
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
};
