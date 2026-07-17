import React, { useState, useRef } from "react";
import { Upload, X, Folder } from "lucide-react";
import InputField from "../../components/InputField.tsx";
// import { categories } from "../../data/category.ts";
import { useCategoryMutations } from "../../hooks/useCategoryMutations.ts";
import toast from "react-hot-toast";
import { useCategories } from "../../hooks/useCategories.ts";

export default function CategoriesPage() {
  // Existing Form State
  const [categoryName, setCategoryName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { createCategoryMutation, deleteCategoryMutation } =
    useCategoryMutations();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: categories = [], isLoading } = useCategories();
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
    let formData = new FormData();
    formData.append("name", categoryName);
    if (imageFile) {
      formData.append("image", imageFile);
    }
    createCategoryMutation.mutate(formData, {
      onSuccess: () => {
        toast.success("New Category Created Successfully");
        // Reset Form Fields
        setCategoryName("");
        setImageFile(null);
        setImagePreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      },
      onError: (err: any) => {
        toast.error(err.response?.data?.message || "Failed to Create");
      },
    });
  };

  const handleRemoveCategory = (id: string) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteCategoryMutation.mutate(id, {
        onSuccess: () => {
          toast.success("Category Deleted Successfully");
        },
        onError: (err: any) => {
          toast.error(err.response?.data?.message || "Failed to delete");
        },
      });
    }
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
          name="name"
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
            name="image"
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
          {isLoading ? "Loading..." : "+ Add Category"}
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
            {categories?.map((category) => (
              <div
                key={category._id}
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
                  onClick={() => handleRemoveCategory(category._id)}
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
