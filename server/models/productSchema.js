import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    brand: {
      type: String,
      required: true,
    },
    // This connects each product to a specific Category document
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Must exactly match your Category model name
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    ratings: {
      type: Number,
      default: 0, // Starts at 0 stars
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be more than 5"],
      // Automatically rounds ratings to 1 decimal place (e.g., 4.3456 -> 4.3)
      set: (val) => Math.round(val * 10) / 10,
    },
    numOfReviews: {
      type: Number,
      default: 0, // Starts with 0 reviews
    },
    images: [
      {
        url: { type: String, required: true },
        public_id: { type: String, required: true }, // Array of Cloudinary URL strings
      },
    ],
  },
  { timestamps: true },
);

// Reuse your slick auto-slug generation logic here too!
productSchema.pre("save", async function () {
  if (this.isModified("name")) {
    const slugify = (await import("slugify")).default; // dynamically imported if needed, or import at top
    let baseSlug = slugify(this.name, { lower: true, strict: true });

    let slugExists = await this.constructor.findOne({ slug: baseSlug });
    if (slugExists) {
      baseSlug = `${baseSlug}-${Date.now()}`;
    }
    this.slug = baseSlug;
  }
});

const Products = mongoose.model("Product", productSchema);
export default Products;
