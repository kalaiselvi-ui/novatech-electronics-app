export interface OrderProduct {
  _id: string;
  name: string;
  images: string[];
  price: number;
}

export interface OrderItem {
  product: OrderProduct;
  quantity: number;
  price: number;
}

export interface OrderProps {
  _id: string;
  items: OrderItem[];
  shippingAddress: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  paymentMethod: "COD" | "CARD";
  paymentStatus: "Pending" | "Paid" | "Failed";
  totalAmount: number;
  orderStatus: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  createdAt: string;
}
