import { useMemo, useState } from "react";
import { Edit2, Trash2, Plus, Package, Image as ImageIcon } from "lucide-react";
import ProductForm from "../../components/ProductForm.tsx";
import { usePagination } from "../../hooks/usePagination.ts";
import Pagination from "../../components/Pagination.tsx";
import { shuffleArray } from "../../utils/shuffle.ts";
import { useProducts } from "../../hooks/useProducts.ts";
import type { ProductFormData, ProductProps } from "../../types/type.ts";
import { useProductMutation } from "../../hooks/useProductMutation.ts";
import toast from "react-hot-toast";
import { useCategories } from "../../hooks/useCategories.ts";
import { useAdminSearchStore } from "../../store/useAdminSearchStore.ts";

const Products = () => {
  const { data: products = [], isLoading } = useProducts();
  const { data: categories = [] } = useCategories();
  const {
    deleteProductMutation,
    createProductMutation,
    updateProductMutation,
  } = useProductMutation();

  const searchQuery = useAdminSearchStore((state) => state.searchQuery);

  const filteredProducts = products.filter((product) => {
    if (!searchQuery) return true;

    const search = searchQuery.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.category?.name.toLowerCase().includes(search)
    );
  });

  // const shuffledProducts = shuffleArray(products);
  const shuffledProducts = useMemo(
    () => shuffleArray(filteredProducts),
    [filteredProducts],
  );

  // 1. Initialize pagination hook (passing your state products array)
  const {
    currentItems: paginatedProducts,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination<ProductProps>({ data: shuffledProducts, itemsPerPage: 15 }); // Set to 10 or 15 rows per page

  // View state controllers
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductProps | null>(
    null,
  );

  const handleOpenAddForm = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  const handleSaveProduct = (data: ProductFormData) => {
    const formData = new FormData();

    const specs = Object.fromEntries(
      data.specs.split("\n").map((item) => {
        const [key, value] = item.split(":");
        return [key.trim(), value?.trim()];
      }),
    );

    formData.append("name", data.name);
    formData.append("price", data.price.toString());
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    formData.append("stock", data.stock.toString());
    formData.append("specs", JSON.stringify(specs));
    formData.append("category", data.category);
    data.images.forEach((image) => {
      formData.append("images", image);
    });

    if (editingProduct) {
      updateProductMutation.mutate(
        { id: editingProduct._id, formData },
        {
          onSuccess: () => {
            toast.success("Product Updated Successfully");
            setIsFormOpen(false);
          },
          onError: (err: any) => {
            toast.error(err.response?.data?.message || "Failed to update");
          },
        },
      );
    } else {
      createProductMutation.mutate(formData, {
        onSuccess: () => {
          toast.success("Product Created Successfully");
          setIsFormOpen(false);
        },
        onError: (err: any) => {
          toast.error(err.response?.data?.message || "Failed to create");
        },
      });
    }
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProductMutation.mutate(id, {
        onSuccess: () => {
          toast.success("Product Deleted Successfully");
        },
        onError: (err: any) => {
          toast.error(err.response?.data?.message || "Failed to delete");
        },
      });
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header Panel Actions */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Catalog Management
          </h2>
          <p className="text-xs md:text-sm text-gray-500">
            Track, update, or remove active inventory items.
          </p>
          <span className="text-textSecondary text-xs">
            Total: {products.length} Products
          </span>
        </div>
        {!isFormOpen && (
          <button
            onClick={handleOpenAddForm}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/85 text-white text-xs md:text-sm font-medium px-3.5 py-2 md:px-3 md:py-2.5 rounded-lg shadow-sm transition w-full sm:w-auto"
          >
            <Plus size={16} />
            <span>Add New Product</span>
          </button>
        )}
      </div>

      {isFormOpen ? (
        <div className="animate-in fade-in-50 duration-200">
          <ProductForm
            initialData={editingProduct}
            categories={categories}
            onSave={handleSaveProduct}
            onCancel={() => setIsFormOpen(false)}
          />
        </div>
      ) : (
        /* Inventory Management Data Table Container */
        <div className="bg-white border px-5 py-3 border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse text-sm min-w-[650px] md:min-w-full table-auto">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-semibold text-xs uppercase tracking-wider">
                  <th className="px-1 py-3 md:px-6 md:py-4 w-16">Image</th>
                  <th className="px-1 py-3 md:px-6 md:py-4 w-full">
                    Product Name
                  </th>
                  {/* Fixed: Use table-cell responsive layouts */}
                  <th className="px-1 py-3 md:px-6 md:py-4">Brand</th>
                  <th className="px-1 py-3 md:px-6 md:py-4">Category</th>
                  <th className="px-1 py-3 md:px-6 md:py-4">Price</th>
                  <th className="px-1 py-3 md:px-6 md:py-4 ">Stock</th>
                  <th className="px-1 py-3 md:px-6 md:py-4 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {paginatedProducts.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-center py-12 text-gray-400 bg-white"
                    >
                      <Package
                        className="mx-auto text-gray-300 mb-2"
                        size={36}
                      />
                      No items available in the catalog.
                    </td>
                  </tr>
                ) : (
                  paginatedProducts.map((product) => (
                    <tr
                      key={product._id}
                      className="hover:bg-gray-50/70 transition-colors"
                    >
                      {/* Thumbnail */}
                      <td className="px-1 py-3 md:px-6 md:py-4 whitespace-nowrap">
                        <div className="h-11 w-11 rounded-lg bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center shrink-0">
                          {product.images ? (
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <ImageIcon size={18} className="text-gray-400" />
                          )}
                        </div>
                      </td>

                      {/* Info Identity */}
                      <td className="px-1 py-3 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap max-w-4">
                        <div className="flex flex-col">
                          <span className="truncate ">{product.name}</span>
                        </div>
                      </td>

                      {/* Brand (Visible sm and up) */}
                      <td className="px-1 py-3 md:px-6 md:py-4 whitespace-nowrap text-gray-500">
                        {product.brand}
                      </td>

                      {/* Category (Visible md and up) */}
                      <td className="px-1 py-3 md:px-6 md:py-4 whitespace-nowrap">
                        <span className="inline-block px-2.5 py-1 text-xs text-white font-medium rounded-full bg-primary">
                          {product.category?.name}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="px-1 py-3 md:px-6 md:py-4 font-semibold text-gray-900 whitespace-nowrap">
                        ${product.price.toFixed(2)}
                      </td>

                      {/* Stock (Visible lg and up) */}
                      <td className="px-1 py-3 md:px-6 md:py-4 whitespace-nowrap">
                        <span
                          className={`font-medium ${product.stock <= 15 ? "text-orange-600" : "text-gray-600"}`}
                        >
                          {product.stock} units
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-1 py-3 md:px-6 md:py-4 text-right whitespace-nowrap">
                        <div className="flex justify-end gap-1.5">
                          <button
                            title="Edit Item Details"
                            onClick={() => {
                              (setEditingProduct(product), setIsFormOpen(true));
                            }}
                            aria-label="edit-icon"
                            className="p-1.5 text-gray-500 hover:text-primary rounded-lg hover:bg-blue-50 transition"
                          >
                            <Edit2 size={15} className="text-primary" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product._id)}
                            title="Delete Item Record"
                            className="p-1.5 text-red-600 rounded-lg hover:bg-red-50 transition"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* FIX 2: Render Pagination controls centered underneath the table card */}
          {totalPages > 1 && (
            <div className="flex justify-center pt-2">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
