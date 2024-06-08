import styles from './catalog.module.css';
import Search from '../Search/Search';
import Card from '../Card/Card';

function Catalog() {
  const array = new Array(9).fill(0);
  return (
    <section className={styles.catalog} aria-labelledby='catalog'>
      <h3 id='catalog'>Catalog</h3>
      <Search placeholder='Search by title' text='Search' />
      <div className={styles.section}>
        {array.map((_, index) => (
          <Card key={index} index={index + 1} counter={index === 1} />
        ))}
      </div>
    </section>
  );
}

export default Catalog;
