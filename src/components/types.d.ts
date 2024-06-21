export type Product = {
  id: number;
  title: string;
  rating: number;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  description: string;
  sku: string;
  thumbnail: string;
  images: string[];
};

export type Order = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};
