import { Product } from '../../components/types';

export function calculateDiscountPrice(item: Product): number {
  return item.price - item.price * (item.discountPercentage / 100);
}
