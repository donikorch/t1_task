import { Order } from './types';

export interface ComponentsProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'big';
}

export interface Cart {
  id: number;
  products: Order[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
