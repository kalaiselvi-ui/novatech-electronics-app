import { create } from "zustand";
import type { FilterState } from "../types/type.ts";

const defaultState = {
  selectedCategories: [],
  maxPrice: 2000,
  minRating: 0,
  includeOutOfStock: true,
  searchQuery: "",
  sortBy: "price-high",
};

export const useFilterStore = create<FilterState>((set) => ({
  ...defaultState,

  setFilters: (partial) =>
    set((state) => ({
      ...state,
      ...partial,
    })),
  resetFilters: () => set(defaultState),
}));
