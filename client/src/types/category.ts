export interface Category {
  _id: string;
  name: string;
  image: string;
  slug?: string;
}

// export type CategoryState = {
//   categories: Category[];
//   isAuthenticated: boolean;

//   setCategories: (categories: Category[]) => void;
//   fetchCategories: () => void;
//   createCategory: (formData: FormData) => Promise<void>;
//   updateCategory: (formData: FormData, id: string) => Promise<void>;
//   deleteCategory: (id: string) => Promise<void>;
// };
