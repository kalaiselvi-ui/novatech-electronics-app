import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import type { CartState } from "../types/cart.type.ts";
import toast from "react-hot-toast";

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (productId) =>
          set((state) => {
            const existingItem = state.cart.find(
              (item) => item.productId === productId,
            );
            if (existingItem) {
              return {
                cart: state.cart.map((item) =>
                  item.productId === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
                ),
              };
            }
            toast.success("Added to cart! ✨"); // Toast for Add
            return {
              cart: [...state.cart, { productId: productId, quantity: 1 }],
            };
          }),
        incrementQuantity: (productId) =>
          set((state) => ({
            cart: state.cart.map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ), // <-- The .map() parenthesis closes down here!
          })),
        decrementQuantity: (productId) =>
          set((state) => ({
            cart: state.cart.map((item) =>
              item.productId === productId
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item,
            ), // <-- The .map() parenthesis closes down here!
          })),
        removeFromCart: (productId) =>
          set((state) => {
            toast.error("Item removed from cart 🗑️"); // Toast for Delete
            return {
              cart: state.cart.filter((item) => item.productId !== productId),
            };
          }),
        clearCart: () => {
          set({ cart: [] });
        },
      }),
      {
        name: "novaCart-cart", // 2. Unique storage key name in localStorage
      },
    ),
    {
      name: "NovaCart Store", // 👈 This forces the DevTools instance to register with this name
      enabled: true, // 👈 Explicitly forces the brproductIdge to turn on
    },
  ),
);
