import { create } from "zustand";

interface AdminSearchState {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  clearSearch: () => void;
}

export const useAdminSearchStore = create<AdminSearchState>((set) => ({
  searchQuery: "",

  setSearchQuery: (value) =>
    set({
      searchQuery: value,
    }),

  clearSearch: () =>
    set({
      searchQuery: "",
    }),
}));
