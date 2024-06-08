import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import styles from './orderLine.module.css';

interface OrderLineProps {
  index: number;
}

function OrderLine({ index }: OrderLineProps) {
  return (
    <div className={styles.line}>
      <Link to={`/product/${index}`} className={styles.container}>
        <img
          className={styles.image}
          src='/images/shoes_4.png'
          alt={`Product ${index}`}
        />
        <div className={styles.info}>
          <h4>Essence Mascara Lash Princess</h4>
          <p className={styles.price}>110 $</p>
        </div>
      </Link>
      <div className={styles.buttons}>
        <Counter aria-label={`Product quantity for item ${index}`} />
        <a href='#' aria-label='Delete item'>
          Delete
        </a>
      </div>
    </div>
  );
}

export default OrderLine;
