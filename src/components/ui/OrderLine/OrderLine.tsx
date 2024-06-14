import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import styles from './orderLine.module.css';
import { Order } from '../../types';

interface OrderLineProps {
  index: number;
  item: Order;
}

function OrderLine({ index, item }: OrderLineProps) {
  return (
    <div className={styles.line}>
      <Link to={`/product/${index}`} className={styles.container}>
        <img
          className={styles.image}
          src={item.thumbnail}
          alt={`Product ${index}`}
        />
        <div className={styles.info}>
          <h4>{item.title}</h4>
          <p className={styles.price}>{item.total.toFixed(2)} $</p>
        </div>
      </Link>
      <div className={styles.buttons}>
        <Counter
          count={item.quantity}
          aria-label={`Product quantity for item ${index}`}
        />
        <a href='#' aria-label='Delete item'>
          Delete
        </a>
      </div>
    </div>
  );
}

export default OrderLine;
