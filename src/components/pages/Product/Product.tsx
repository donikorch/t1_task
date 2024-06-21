import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import styles from './product.module.css';
import Cover from '../../ui/Cover/Cover';
import Info from '../../ui/Info/Info';
import { useGetProductsByIdQuery } from '../../../app/api/productsApi';
import Loading from '../../ui/Loading/Loading';

function Product() {
  const { id } = useParams();
  const accessToken = localStorage.getItem('access');
  const { data, error, isLoading } = useGetProductsByIdQuery({
    productId: id,
    token: accessToken,
  });

  if (isLoading) return <Loading isLoading={isLoading} />;

  if (error) {
    if ('status' in error) {
      const message =
        'error' in error ? error.error : JSON.stringify(error.data);
      return <p>{message}</p>;
    } else {
      return <p>{error.message ?? 'Unknown error'}</p>;
    }
  }

  return (
    <Layout variant='secondary' size='small'>
      <section className={styles.product} aria-labelledby='product-title'>
        <h3 id='product-title'>Product {data.sku}</h3>
        <article className={styles.section}>
          <Cover images={data.images} />
          <Info item={data} />
          <div className={styles.skuId}>
            <p>
              SKU ID<span>{data.sku}</span>
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export default Product;
