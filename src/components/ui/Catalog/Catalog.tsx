import styles from './catalog.module.css';
import Search from '../Search/Search';
import Card from '../Card/Card';
import { Product } from '../../types';

interface CatalogProps {
  products: Product[];
}

function Catalog({ products }: CatalogProps) {
  return (
    <section className={styles.catalog} aria-labelledby='catalog'>
      <h3 id='catalog'>Catalog</h3>
      <Search placeholder='Search by title' text='Search' />
      <div className={styles.section}>
        {products?.map((item, index) => (
          <Card key={index} index={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Catalog;
