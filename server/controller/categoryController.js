import Category from "../models/categorySchema.js";
import { uploadToCloudinary } from "../utils/upload.js";

const createCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;
    if (!name) return res.status(400).json({ message: "Name field required" });
    if (!req.file)
      return res.status(400).json({ message: "Image field required" });
    const result = await uploadToCloudinary(req.file.buffer);

    const category = await Category.create({
      name,
      slug,
      image: result.secure_url,
    });
    return res.status(201).json({
      success: true,
      message: "New Category Created Successfully",
      data: category,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findById(id);
    if (!category)
      return res.status(400).json({ message: "Category not found" });
    let newImage = category.image;

    if (req.file) {
      let uploaded = await uploadToCloudinary(req.file.buffer);
      if (!uploaded || !uploaded.secure_url) {
        return res.status(500).json({ message: "Upload failed" });
      }
      if (category.public_id) {
        await cloudinary.uploader.destroy(category.public_id);
      }
      newImage = uploaded.secure_url;
      category.public_id = uploaded.public_id;
    }

    category.name = name ?? category.name;
    category.image = newImage ?? null;
    await category.save();
    return res
      .status(200)
      .json({ success: true, message: "Updated Successfully", data: category });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    console.log(categories);
    return res.status(200).json({ success: true, data: categories });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(400).json({ message: "No Category Found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Deleted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export { createCategory, updateCategory, getAllCategory, deleteCategory };
