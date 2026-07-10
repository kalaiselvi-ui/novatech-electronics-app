import React, { useState, useRef } from "react";
import { Upload, X, Folder } from "lucide-react";
import InputField from "../../components/InputField.tsx";
import { categories } from "../../data/category.ts";

export default function CategoriesPage() {
  // Existing Form State
  const [categoryName, setCategoryName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      console.log(imageFile);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // 2. Handle adding the new category to your list
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryName.trim()) return;

    // const newCategory: CategoryItem = {
    //   id: Date.now().toString(),
    //   name: categoryName,
    //   image: imagePreview, // Save the image preview URL locally for now
    // };

    // setCategories([...categories, newCategory]);

    // Reset Form Fields
    setCategoryName("");
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemoveCategory = (slug: string) => {
    // setCategories(categories.filter((cat) => cat.id !== id));
    console.log(slug);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {/* LEFT: Create Category Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-xl border bg-white p-6 shadow-sm"
      >
        <div className="flex items-center gap-2 font-semibold text-gray-900">
          <Folder size={20} className="text-yellow-500 fill-yellow-500" />
          <h3>Create Category</h3>
        </div>

        <InputField
          label="Category Name"
          id="categoryName"
          placeholder="e.g., Audio Devices"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">
            Category Thumbnail
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
              className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 py-6 text-gray-500 transition hover:border-primary hover:bg-blue-50/30"
            >
              <Upload size={20} className="text-gray-400" />
              <span className="text-xs font-medium">Click to upload image</span>
            </button>
          ) : (
            <div className="relative h-32 w-full overflow-hidden rounded-lg border bg-gray-50 flex items-center justify-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="h-full w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => {
                  setImageFile(null);
                  setImagePreview(null);
                }}
                className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow"
              >
                <X size={14} />
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-2.5 font-medium text-white transition hover:bg-primary/85 text-sm"
        >
          + Add Category
        </button>
      </form>

      {/* RIGHT: Live Categories List Grid */}
      <div className="lg:col-span-2 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">
          Active Categories ({categories.length})
        </h3>

        {categories.length === 0 ? (
          <div className="text-center py-12 border border-dashed rounded-xl text-gray-400 bg-white">
            No categories created yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((category) => (
              <div
                key={category.slug}
                className="flex items-center justify-between p-4 bg-white border rounded-xl shadow-sm group hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Thumbnail display */}
                  <div className="h-12 w-12 rounded-lg bg-gray-50 border overflow-hidden flex items-center justify-center shrink-0">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Folder size={20} className="text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {category.name}
                    </h4>
                    <p className="text-xs text-gray-500">ID: {category.slug}</p>
                  </div>
                </div>

                {/* Delete category item button */}
                <button
                  type="button"
                  onClick={() => handleRemoveCategory(category.slug)}
                  className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
