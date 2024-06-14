import { useAppSelector } from '../../../app/store';
import OrderLine from '../../ui/OrderLine/OrderLine';
import Layout from '../Layout/Layout';
import { Product } from '../../types';
import styles from './cart.module.css';

function Cart() {
  const carts = useAppSelector((store) => store.carts.carts);

  return (
    <Layout variant='secondary' size='small'>
      <section className={styles.cart} aria-labelledby='cart-title'>
        <h3 id='cart-title'>My Cart</h3>
        <article className={styles.section}>
          {carts[0] ? (
            <div className={styles.container}>
              {carts[0]?.products.map((item: Product) => (
                <OrderLine key={item.id} index={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className={styles.empty}>Cart is empty</p>
          )}
          <div className={styles.info}>
            <p>
              Total count:
              <span aria-label='total item count'>
                {carts[0]?.totalProducts || 0}
              </span>
            </p>
            <p>
              Total price:
              <span aria-label='total price'>{carts[0]?.total || 0}$</span>
            </p>
            <p>
              Total price with discount:
              <span aria-label='total price with discount'>
                {carts[0]?.discountedTotal || 0}$
              </span>
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export default Cart;
