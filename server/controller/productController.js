import cloudinary from "../config/cloudinary.js";
import Products from "../models/productSchema.js";
import { uploadToCloudinary } from "../utils/upload.js";

const createProduct = async (req, res) => {
  try {
    const { name, brand, category, price, stock } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "Image required" });
    }
    if (!name || !brand || !price) {
      return res
        .status(400)
        .json({ message: "All fields (name, brand, price) are required." });
    }
    const uploadPromises = req.files.map((file) =>
      uploadToCloudinary(file.buffer),
    );
    const uploadResults = await Promise.all(uploadPromises);

    const imageUrls = uploadResults.map((result) => result.secure_url);
    const product = await Products.create({
      name,
      category,
      stock,
      brand,
      price,
      images: imageUrls,
    });

    const populatedProduct = await product.populate("category", "name");

    return res.status(201).json({
      success: true,
      message: "Product Created Successfully",
      data: populatedProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, brand, category, price, stock } = req.body;
    const { id } = req.params;
    const product = await Products.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let newImages = product.images;

    if (req.files && req.files.length > 0) {
      // 1. Loop and DELETE old images from Cloudinary if they exist
      if (product.images && product.images.length > 0) {
        for (const img of product.images) {
          if (img.public_id) {
            await cloudinary.uploader.destroy(img.public_id);
          }
        }
      }

      // 2. Upload NEW images to Cloudinary
      let uploadPromises = req.files.map((file) =>
        uploadToCloudinary(file.buffer),
      );
      const uploadResults = await Promise.all(uploadPromises);

      // 3. Format the new images into objects matching your schema
      newImages = uploadResults.map((result) => ({
        url: result.secure_url,
        public_id: result.public_id,
      }));
    }

    product.name = name ?? product.name;
    product.brand = brand ?? product.brand;
    product.category = category ?? product.category;
    product.price = price ?? product.price;
    product.stock = stock ?? product.stock;
    product.images = newImages;
    await product.save();
    return res.status(200).json({
      success: true,
      message: "Product Updated successfully",
      data: product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find().populate("category", "name");
    if (!products) return res.status(404).json({ message: "No Product Found" });
    return res.status(200).json({ data: products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findOneAndDelete(id);
    if (!product) return res.status(404).json({ message: "No Product Found" });
    return res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export { createProduct, getAllProducts, deleteProduct, updateProduct };
