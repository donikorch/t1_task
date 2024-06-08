import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import styles from './product.module.css';
import Cover from '../../ui/Cover/Cover';
import Info from '../../ui/Info/Info';

function Product() {
  const { id } = useParams();

  return (
    <Layout variant='secondary' size='small'>
      <section className={styles.product} aria-labelledby='product-title'>
        <h3 id='product-title'>Product {id}</h3>
        <article className={styles.section}>
          <Cover />
          <Info />
          <div className={styles.skuId}>
            <p>
              SKU ID<span>000{id}</span>
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export default Product;
