export interface CartItemProps {
  id: string;
  quantity: number;
}

export interface CartState {
  cart: CartItemProps[];
  addToCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
}
