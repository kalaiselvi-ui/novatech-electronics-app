import type { RefObject } from "react";

export type SlideData = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryBtn: string;
  secondaryBtn: string;
  bgColor: string;
};

export interface CategoryProps {
  name: string;
  slug: string;
  image: string;
}

export interface ProductProps {
  id: string;
  slug?: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  rating?: number;
  stock: number;
  description?: string;
  specs?: Record<string, string>;
  isFeatured?: boolean;
}

export type PaginationUIProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export interface PaginationProps<T> {
  data: T[];
  itemsPerPage: number;
}
export interface SliderArrowProps {
  direction: "left" | "right";
  containerRef: RefObject<HTMLDivElement | null>;
  scrollAmount?: number;
}
