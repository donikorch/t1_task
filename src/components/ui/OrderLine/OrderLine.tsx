import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import styles from './orderLine.module.css';
import { Order } from '../../types';
import { useQuantity } from '../../../app/hooks/useQuantity';
import { useGetProductsByIdQuery } from '../../../app/api/productsApi';

interface OrderLineProps {
  index: number;
  item: Order;
}

function OrderLine({ index, item }: OrderLineProps) {
  const accessToken = localStorage.getItem('access');
  const { data } = useGetProductsByIdQuery({
    productId: index,
    token: accessToken,
  });
  const { updateProductQuantity, deleteProductFromCart } = useQuantity();

  const handleUpdateQuantity = (action: 'increment' | 'decrement') => {
    updateProductQuantity(item.id, action);
  };

  const handleDeleteItem = () => {
    deleteProductFromCart(item.id);
  };

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
          stock={data?.stock}
          aria-label={`Product quantity for item ${index}`}
          onUpdateQuantity={handleUpdateQuantity}
        />
        <a href='#' aria-label='Delete item' onClick={handleDeleteItem}>
          Delete
        </a>
      </div>
    </div>
  );
}

export default OrderLine;
