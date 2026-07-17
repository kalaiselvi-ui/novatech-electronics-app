// components/ProductForm.tsx
import React, { useEffect, useState } from "react";
import { PackagePlus, Edit, X } from "lucide-react";
import InputField from "./InputField";
import type { ProductFormData, ProductProps } from "../types/type.ts";
import type { Category } from "../types/category.ts";

interface ProductFormProps {
  initialData?: ProductProps | null;
  categories: Category[];
  onSave: (data: ProductFormData) => void;
  onCancel: () => void;
}

export default function ProductForm({
  initialData,
  categories,
  onCancel,
  onSave,
}: ProductFormProps) {
  const isEditMode = !!initialData;

  const [images, setImages] = useState<
    {
      file: File;
      preview: string;
    }[]
  >([]);
  const [existingImages, setExistingImages] = useState<string[]>(
    initialData?.images || [],
  );

  const formatSpecs = (specs: any) => {
    return Object.entries(specs)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
  };

  const [formData, setFormData] = useState<ProductFormData>({
    name: initialData?.name || "",
    brand: initialData?.brand || "",
    category: initialData?.category?._id || categories[0]?._id || "",
    price: initialData?.price || 0,
    stock: initialData?.stock || 0,
    description: initialData?.description || "",
    specs: initialData?.specs ? formatSpecs(initialData.specs) : "",
    images: [],
  });

  useEffect(() => {
    return () => {
      images.forEach((img) => {
        URL.revokeObjectURL(img.preview);
      });
    };
  }, [images]);

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        brand: initialData.brand,
        category: initialData.category._id,
        price: initialData.price,
        stock: initialData.stock,
        description: initialData.description,
        specs: formatSpecs(initialData.specs),
        images: [],
      });

      setExistingImages(initialData.images);
    }
  }, [initialData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    const selectedFiles = Array.from(files);

    const total = existingImages.length + images.length;

    const remaining = 4 - total;

    const newImages = selectedFiles.slice(0, remaining).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);

    e.target.value = "";
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleRemoveImage = (index: number) => {
    URL.revokeObjectURL(images[index].preview);

    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveExistingImage = (index: number) => {
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const productData: ProductFormData = {
      ...formData,
      images: images.map((image) => image.file),
    };

    onSave(productData);
  };

  return (
    <form
      className="space-y-5 bg-white p-6 rounded-xl border max-w-3xl shadow-sm"
      onSubmit={handleSubmit}
    >
      {/* Form Header */}
      <div className="flex items-center gap-2 font-semibold text-gray-900 border-b pb-3">
        {isEditMode ? (
          <Edit size={20} className="text-primary" />
        ) : (
          <PackagePlus size={20} className="text-green-500" />
        )}
        <h3>{isEditMode ? "Edit Product Details" : "Add New Product"}</h3>
      </div>

      {/* Inputs Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          <InputField
            label="Product Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <InputField
            label="Brand Name"
            id="brand"
            value={formData.brand}
            name="brand"
            onChange={handleChange}
            required
          />

          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none text-sm focus:ring-2 focus:ring-primary"
            >
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Price ($)"
              id="price"
              type="number"
              name="price"
              onChange={handleChange}
              min="0"
              step="0.01"
              value={formData.price}
              required
            />
            <InputField
              label="Stock Quantity"
              id="stock"
              type="number"
              min="0"
              value={formData.stock}
              name="stock"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Dynamic Multi-Image Handling Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-medium text-gray-700 flex justify-between">
              Product Images ({images.length}/4){" "}
              <span className="text-xs text-gray-400">
                Max 4 images allowed
              </span>
            </label>

            {/* Styled Box Dropzone Container */}
            <label
              className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl transition cursor-pointer bg-gray-50/50 group ${
                images.length >= 4
                  ? "border-gray-200 bg-gray-100 cursor-not-allowed opacity-60"
                  : "border-gray-300 hover:bg-gray-50 hover:border-primary"
              }`}
            >
              <div className="flex flex-col items-center justify-center pt-4 pb-4 px-4 text-center">
                <svg
                  className={`w-8 h-8 mb-2 transition ${
                    images.length >= 4
                      ? "text-gray-300"
                      : "text-gray-400 group-hover:text-primary"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="text-xs text-gray-500 font-medium">
                  {images.length >= 4 ? (
                    <span className="text-red-500 font-semibold">
                      Upload limit reached
                    </span>
                  ) : (
                    <>
                      <span className="text-primary font-semibold">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </>
                  )}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  PNG, JPG, or WEBP up to 4 files
                </p>
              </div>

              {/* Hidden native input handler underneath */}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                disabled={images.length >= 4}
                className="hidden"
              />
            </label>

            {/* Grid Image Preview Layout */}
            {images.length > 0 && (
              <div className="grid grid-cols-4 gap-2 mt-2 border p-2 rounded-lg bg-gray-50/50">
                {existingImages.map((img, index) => (
                  <div key={img} className="relative">
                    <img
                      src={img}
                      className="h-20 w-full object-cover rounded"
                    />

                    <button
                      type="button"
                      onClick={() => handleRemoveExistingImage(index)}
                      className="absolute top-1 right-1 bg-white rounded"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image.preview} alt="" />

                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="specs"
              className="text-sm font-medium text-gray-700"
            >
              Technical Specifications
            </label>
            <textarea
              id="specs"
              rows={2}
              value={formData.specs}
              name="specs"
              onChange={handleChange}
              placeholder="e.g. RAM: 16GB, Storage: 1TB SSD..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={3}
              value={formData.description}
              name="description"
              onChange={handleChange}
              placeholder="Provide a detailed item overview..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Control Actions */}
      <div className="flex justify-end gap-3 pt-3 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className={`px-5 py-2 text-sm font-medium text-white rounded-md transition ${
            isEditMode
              ? "bg-primary hover:bg-primary/85"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isEditMode ? "Update Product" : "Publish Product"}
        </button>
      </div>
    </form>
  );
}
