// pages/AdminProductsPage.tsx
import { useState } from "react";
import { Edit2, Trash2, Plus, Package, Image as ImageIcon } from "lucide-react";
import ProductForm, {
  type ProductType,
} from "../../components/ProductForm.tsx";
import { productList } from "../../data/product.ts";
import { usePagination } from "../../hooks/usePagination.ts";
import Pagination from "../../components/Pagination.tsx";
import { shuffleArray } from "../../utils/shuffle.ts";
import { categories } from "../../data/category.ts";

// 1. Extend or define our inventory items type
interface ProductItem extends Omit<ProductType, "image"> {
  id: string;
  brand: string;
  image: string | null; // Production URL or preview local string
}

const Products = () => {
  const [shuffledProducts] = useState(() => shuffleArray(productList));

  // 1. Initialize pagination hook (passing your state products array)
  const {
    currentItems: paginatedProducts,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination({ data: shuffledProducts, itemsPerPage: 15 }); // Set to 10 or 15 rows per page

  // 2. Initialize product inventory list state with mock records
  const [products, setProducts] = useState<ProductItem[]>([
    {
      id: "PROD-001",
      name: "Nova Buds Pro",
      brand: "NovaTech",
      description: "Premium spatial acoustic filters with ANC.",
      category: "Audio Devices",
      price: 149.99,
      stock: 45,
      image: null,
    },
    {
      id: "PROD-002",
      name: "AlphaBook 14",
      brand: "NovaTech",
      description: "M3 optimized lightweight developer workhorse.",
      category: "Laptops",
      price: 1299.0,
      stock: 12,
      image: null,
    },
  ]);

  // View state controllers
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductType | undefined>(
    undefined,
  );

  const handleOpenAddForm = () => {
    setEditingProduct(undefined);
    setIsFormOpen(true);
  };

  // const handleOpenEditForm = (product: ProductItem) => {
  //   setEditingProduct({
  //     id: product.id,
  //     name: product.name,
  //     description: product.description,
  //     category: product.category,
  //     price: product.price,
  //     stock: product.stock,
  //     image: product.image,
  //   });
  //   setIsFormOpen(true);
  // };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleSaveProduct = (formData: FormData) => {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const price = Number(formData.get("price"));
    const stock = Number(formData.get("stock"));
    const fileImage = formData.get("image") as File | null;

    let localImageString: string | null = null;
    if (fileImage) {
      localImageString = URL.createObjectURL(fileImage);
    }

    if (id) {
      setProducts(
        products.map((p) =>
          p.id === id
            ? {
                ...p,
                name,
                description,
                category,
                price,
                stock,
                image: localImageString || p.image,
              }
            : p,
        ),
      );
    } else {
      const newProduct: ProductItem = {
        id: `PROD-${Math.floor(100 + Math.random() * 900)}`,
        name,
        brand: "NovaTech",
        description,
        category,
        price,
        stock,
        image: localImageString,
      };
      setProducts([...products, newProduct]);
    }

    setIsFormOpen(false);
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
            categories={categories.map((c) => c.name)}
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
                      key={product.id}
                      className="hover:bg-gray-50/70 transition-colors"
                    >
                      {/* Thumbnail */}
                      <td className="px-1 py-3 md:px-6 md:py-4 whitespace-nowrap">
                        <div className="h-11 w-11 rounded-lg bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center shrink-0">
                          {product.imageUrls ? (
                            <img
                              src={product.imageUrls[0]}
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
                          <span className="text-xs text-gray-400 font-normal">
                            {product.id}
                          </span>
                        </div>
                      </td>

                      {/* Brand (Visible sm and up) */}
                      <td className="px-1 py-3 md:px-6 md:py-4 whitespace-nowrap text-gray-500">
                        {product.brand}
                      </td>

                      {/* Category (Visible md and up) */}
                      <td className="px-1 py-3 md:px-6 md:py-4 whitespace-nowrap">
                        <span className="inline-block px-2.5 py-1 text-xs text-white font-medium rounded-full bg-primary">
                          {product.category}
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
                            className="p-1.5 text-gray-500 hover:text-primary rounded-lg hover:bg-blue-50 transition"
                          >
                            <Edit2 size={15} className="text-primary" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
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
