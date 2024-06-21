import React from 'react';
import styles from './card.module.css';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { Order, Product } from '../../types';
import { Cart } from '../../interfaces';
import { useGetProductsByIdQuery } from '../../../app/api/productsApi';

interface CardProps {
  index: number;
  item: Product;
  cart: Cart;
  onProductSelect: (id: number) => void;
  onUpdateQuantity: (id: number, action: 'increment' | 'decrement') => void;
}

function Card({
  index,
  item,
  cart,
  onProductSelect,
  onUpdateQuantity,
}: CardProps) {
  const product: Order | undefined = cart?.products.find(
    (product) => product.id === item.id,
  );
  const accessToken = localStorage.getItem('access');
  const { data } = useGetProductsByIdQuery({
    productId: index,
    token: accessToken,
  });

  const handleSelectProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onProductSelect(item.id);
  };

  const handleUpdateQuantity = (action: 'increment' | 'decrement') => {
    onUpdateQuantity(item.id, action);
  };

  return (
    <article className={styles.article} aria-labelledby={`card-title-${index}`}>
      <Link to={`/product/${index}`}>
        <div className={styles.image}>
          <img src={item.images[0]} alt='Product Image' />
        </div>
        <div className={styles.info}>
          <div className={styles.text}>
            <h4 id={`card-title-${index}`}>{item.title}</h4>
            <p className={styles.price}>{item.price} $</p>
          </div>
          {product && product.quantity > 0 ? (
            <Counter
              count={product.quantity}
              stock={data?.stock}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ) : (
            <Button
              variant='cart'
              aria-label='Add to cart'
              onClick={handleSelectProduct}
            />
          )}
        </div>
      </Link>
    </article>
  );
}

export default Card;
