import styles from './card.module.css';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { Order, Product } from '../../types';
import { useAppSelector } from '../../../app/store';

interface CardProps {
  index: number;
  item: Product;
}

function Card({ index, item }: CardProps) {
  const carts = useAppSelector((store) => store.carts.carts);
  const product: Order = carts[0].products.filter(
    (product: Product) => product.id === item.id,
  )[0];

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
          {product ? (
            <Counter count={product.quantity} />
          ) : (
            <Button variant='cart' aria-label='Add to cart' />
          )}
        </div>
      </Link>
    </article>
  );
}

export default Card;
