import styles from './home.module.css';
import Catalog from '../../ui/Catalog/Catalog';
import Button from '../../ui/Button/Button';
import Layout from '../Layout/Layout';
import Loading from '../../ui/Loading/Loading';
import { useProductData } from '../../../app/hooks/useProductData';
import { useScrollToHash } from '../../../app/hooks/useScrollToHash';

function Home() {
  const {
    products,
    isLoading,
    error,
    handleShowMore,
    handleInput,
    handleButton,
  } = useProductData();
  useScrollToHash(isLoading);

  if (isLoading && products.length === 0)
    return <Loading isLoading={isLoading} />;

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
    <Layout>
      <Catalog
        products={products}
        onInput={handleInput}
        onButton={handleButton}
      />
      <div className={styles.button}>
        <Button aria-label='Show more products' onClick={handleShowMore}>
          Show more
        </Button>
      </div>
    </Layout>
  );
}

export default Home;
