import mongoose, { model } from "mongoose";
import slugify from "slugify";
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true },
);

categorySchema.pre("save", async function () {
  if (this.isModified("name")) {
    let baseSlug = slugify(this.name, { lower: true, strict: true });
    const slugExist = await this.constructor.findOne({ slug: baseSlug });

    if (slugExist) {
      baseSlug = `${baseSlug}-${Date.now()}`;
    }
    this.slug = baseSlug;
  }
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
