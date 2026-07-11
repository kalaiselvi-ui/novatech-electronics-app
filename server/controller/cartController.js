import Cart from "../models/cartSchema.js";
import cartSchema from "../models/cartSchema.js";

// 1. Add item to cart (or increase quantity if already present)
export const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id: productId } = req.params._id;
    const { quantity } = Number(req.body.quantity);

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      await Cart.create({
        userId,
        items: [{ productId, quantity }],
      });
      return res
        .status(200)
        .json({ message: "Product added to a new cart successfully", cart });
    }
    // Step 3: If the cart EXISTS, check if the product is already inside the items array
    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId,
    );

    if (itemIndex > -1) {
      // Product exists! Increment the existing quantity
      cart.items[itemIndex].quantity += quantity;
    } else {
      // Product does not exist! Push the new item into the items array
      cart.items.push({ productId, quantity });
    }

    // Step 4: Save the updated document back to MongoDB
    await cart.save();

    return res.status(200).json({ message: "Cart updated successfully", cart });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// 2. Update quantity (handles both stepping up and stepping down)
export const updateCartQuantity = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id: productId } = req.params;
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const { quantity } = req.body;

    const productIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId,
    );

    if (productIndex === -1) {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }

    // If quantity is 0 or less, remove the product
    if (quantity <= 0) {
      cart.items.splice(productIndex, 1);
    } else {
      // Otherwise update to the new quantity
      cart.items[productIndex].quantity = quantity;
    }

    await cart.save();

    return res.status(200).json({
      message: "Cart updated successfully",
      cart,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// 3. Remove a single product from the cart
export const removeItemFromCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id: productId } = req.params;
    const cart = await Cart.findOneAndUpdate(
      { userId },
      {
        $pull: {
          items: { productId },
        },
      },
      { new: true },
    );
    if (!cart) {
      return res.status(400).json({ message: "Not found", cart });
    }
    return res.status(200).json({ message: "item deleted from cart", cart });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// 4. Empty the entire cart (usually after a successful checkout)
export const clearCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOneAndUpdate(
      {
        userId,
      },
      { $set: { item: [] } },
      { new: true },
    );
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    return res.status(200).json({ message: "Cart cleared successfully", cart });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// 5. Fetch the user's cart details
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate(
      "items.productId",
    );
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty", items: [] });
    }
    return res.status(200).json({ cart });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
