import OrderLine from '../../ui/OrderLine/OrderLine';
import Layout from '../Layout/Layout';
import styles from './cart.module.css';

function Cart() {
  const array = new Array(3).fill(0);

  return (
    <Layout variant='secondary' size='small'>
      <section className={styles.cart} aria-labelledby='cart-title'>
        <h3 id='cart-title'>My Cart</h3>
        <article className={styles.section}>
          <div className={styles.container}>
            {array.map((_, index) => (
              <OrderLine key={index} index={index + 1} />
            ))}
          </div>
          <div className={styles.info}>
            <p>
              Total count:<span aria-label='total item count'>3</span>
            </p>
            <p>
              Total price:<span aria-label='total price'>700$</span>
            </p>
            <p>
              Total price with discount:
              <span aria-label='total price with discount'>590$</span>
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export default Cart;
