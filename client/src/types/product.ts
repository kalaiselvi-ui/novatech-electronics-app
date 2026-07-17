export interface ProductProps {
  _id: string;
  slug?: string;
  name: string;
  brand: string;
  category: {
    _id: string;
    name: string;
  };
  price: number;
  images: string[];
  ratings?: number;
  stock: number;
  description?: string;
  specs?: Record<string, any>;
  isFeatured?: boolean;
}
