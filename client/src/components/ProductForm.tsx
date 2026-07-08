// components/ProductForm.tsx
import React, { useState, useRef, useEffect } from "react";
import { Upload, X, PackagePlus, Edit } from "lucide-react";
import InputField from "./InputField";

export type ProductType = {
  id?: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  image: File | string | null;
};

interface ProductFormProps {
  initialData?: ProductType; // Optional: If provided, we are in EDIT mode
  categories: string[]; // Passed down from your dashboard state/API
  onSave: (data: FormData) => void;
  onCancel: () => void;
}

export default function ProductForm({
  initialData,
  categories,
  onSave,
  onCancel,
}: ProductFormProps) {
  const isEditMode = !!initialData;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize form state
  const [formData, setFormData] = useState<Omit<ProductType, "image">>({
    name: initialData?.name || "",
    description: initialData?.description || "",
    category: initialData?.category || categories[0] || "",
    price: initialData?.price || 0,
    stock: initialData?.stock || 0,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    typeof initialData?.image === "string" ? initialData.image : null,
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "price" || id === "stock" ? Number(value) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Bundle everything into FormData for multipart server uploads (images)
    const submissionData = new FormData();
    if (initialData?.id) submissionData.append("id", initialData.id);
    submissionData.append("name", formData.name);
    submissionData.append("description", formData.description);
    submissionData.append("category", formData.category);
    submissionData.append("price", formData.price.toString());
    submissionData.append("stock", formData.stock.toString());

    if (imageFile) {
      submissionData.append("image", imageFile);
    }

    onSave(submissionData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white p-6 rounded-xl border max-w-3xl shadow-sm"
    >
      <div className="flex items-center gap-2 font-semibold text-gray-900 border-b pb-3">
        {isEditMode ? (
          <Edit size={20} className="text-primary" />
        ) : (
          <PackagePlus size={20} className="text-green-500" />
        )}
        <h3>{isEditMode ? "Edit Product Details" : "Add New Product"}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column: Product Info */}
        <div className="space-y-4">
          <InputField
            label="Product Name"
            id="name"
            value={formData.name}
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
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none text-sm focus:ring-2 focus:ring-primary"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Price ($)"
              id="price"
              type="number"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <InputField
              label="Stock Quantity"
              id="stock"
              type="number"
              min="0"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Right Column: Image Media & Details */}
        <div className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {!imagePreview ? (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-gray-300 h-[142px] text-gray-500 transition hover:border-primary hover:bg-blue-50/30"
              >
                <Upload size={24} className="text-gray-400" />
                <span className="text-xs font-medium">
                  Upload high-res product photo
                </span>
              </button>
            ) : (
              <div className="relative h-[142px] w-full overflow-hidden rounded-lg border bg-gray-50 flex items-center justify-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-full w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow"
                >
                  <X size={14} />
                </button>
              </div>
            )}
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
