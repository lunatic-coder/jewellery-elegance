export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  featured?: boolean;
  new?: boolean;
  bestseller?: boolean;
  details?: string[];
  material?: string;
  careInstructions?: string[];
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}