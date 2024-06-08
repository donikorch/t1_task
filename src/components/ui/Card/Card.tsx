import styles from './card.module.css';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';

interface CardProps {
  counter?: boolean;
  index: number;
}

function Card({ index, counter = false }: CardProps) {
  return (
    <article className={styles.article} aria-labelledby={`card-title-${index}`}>
      <Link to={`/product/${index}`}>
        <img src='/images/shoes_1.png' alt='Product Image' />
        <div className={styles.info}>
          <div className={styles.text}>
            <h4 id={`card-title-${index}`}>Essence Mascara Lash Princess</h4>
            <p className={styles.price}>110 $</p>
          </div>
          {counter ? (
            <Counter />
          ) : (
            <Button variant='cart' aria-label='Add to cart' />
          )}
        </div>
      </Link>
    </article>
  );
}

export default Card;
