import { useAppDispatch, useAppSelector } from '../store';
import { useAddToCartMutation } from '../api/userApi';
import { setCarts } from '../slices/cartsSlice';
import { Order } from '../../components/types';
import { Cart } from '../../components/interfaces';

interface UseQuantityProps {
  addProductToCart: (id: number) => Promise<void>;
  updateProductQuantity: (
    id: number,
    action: 'increment' | 'decrement',
  ) => Promise<void>;
  deleteProductFromCart: (id: number) => Promise<void>;
  carts: Cart[];
}

export const useQuantity = (): UseQuantityProps => {
  const dispatch = useAppDispatch();
  const carts = useAppSelector((store) => store.carts.carts);
  const [addToCart] = useAddToCartMutation();
  const accessToken = localStorage.getItem('access');

  const handleAddToCart = async (
    updatedProducts: { id: number; quantity: number }[],
  ) => {
    try {
      const res = await addToCart({
        cartId: carts[0].id,
        products: updatedProducts,
        token: accessToken,
      }).unwrap();

      dispatch(setCarts([res]));
    } catch (error) {
      console.error('Failed to update cart:', error);
    }
  };

  const addProductToCart = async (id: number) => {
    const updatedProducts = [...carts[0].products, { id, quantity: 1 }];
    await handleAddToCart(updatedProducts);
  };

  const updateProductQuantity = async (
    id: number,
    action: 'increment' | 'decrement',
  ) => {
    const updatedProducts = carts[0].products
      .map((product: Order) => {
        if (product.id === id) {
          return {
            ...product,
            quantity:
              action === 'increment'
                ? product.quantity + 1
                : product.quantity - 1,
          };
        }
        return product;
      })
      .filter((product: Order) => product.quantity > 0);

    await handleAddToCart(updatedProducts);
  };

  const deleteProductFromCart = async (id: number) => {
    const updatedProducts = carts[0].products.filter(
      (product: Order) => product.id !== id,
    );
    await handleAddToCart(updatedProducts);
  };

  return {
    addProductToCart,
    updateProductQuantity,
    deleteProductFromCart,
    carts,
  };
};
