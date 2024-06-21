import { calculateDiscountPrice } from '../utils/calculateDiscountPrice';
import { Product } from '../../components/types';

const mockProduct: Product = {
  id: 1,
  title: 'Product',
  rating: 4.5,
  price: 100,
  discountPercentage: 20,
  stock: 0,
  brand: 'Brand',
  category: 'Category',
  description: 'Description',
  sku: '0000',
  thumbnail: 'Thumbnail',
  images: ['1', '2', '3'],
};

describe('Функция calculateDiscountPrice:', () => {
  it('Рассчитывает правильную цену со скидкой?', () => {
    const discountPrice = calculateDiscountPrice(mockProduct);
    const expectedPrice =
      mockProduct.price -
      (mockProduct.price * mockProduct.discountPercentage) / 100;

    expect(discountPrice).toBe(expectedPrice);
  });

  it('Возвращает ту же цену, если процент скидки равен 0?', () => {
    const productWithNoDiscount: Product = {
      ...mockProduct,
      discountPercentage: 0,
    };
    const discountPrice = calculateDiscountPrice(productWithNoDiscount);

    expect(discountPrice).toBe(productWithNoDiscount.price);
  });

  it('Корректно обрабатывает десятичные проценты скидки?', () => {
    const productWithDecimalDiscount: Product = {
      ...mockProduct,
      discountPercentage: 15.5,
    };
    const discountPrice = calculateDiscountPrice(productWithDecimalDiscount);
    const expectedPrice =
      productWithDecimalDiscount.price -
      (productWithDecimalDiscount.price * 15.5) / 100;

    expect(discountPrice).toBe(expectedPrice);
  });

  it('Правильно рассчитывает большие проценты скидок?', () => {
    const productWithLargeDiscount: Product = {
      ...mockProduct,
      discountPercentage: 80,
    };
    const discountPrice = calculateDiscountPrice(productWithLargeDiscount);
    const expectedPrice =
      productWithLargeDiscount.price -
      (productWithLargeDiscount.price * 80) / 100;

    expect(discountPrice).toBe(expectedPrice);
  });

  it('Округляет цену со скидкой до двух знаков после запятой?', () => {
    const productWithRounding: Product = {
      ...mockProduct,
      price: 99.99,
      discountPercentage: 25,
    };
    const discountPrice = calculateDiscountPrice(productWithRounding);

    expect(discountPrice).toBeCloseTo(74.99);
  });
});
