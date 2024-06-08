import styles from './home.module.css';
import Catalog from '../../ui/Catalog/Catalog';
import Button from '../../ui/Button/Button';
import Layout from '../Layout/Layout';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function scroll() {
  const hash = window.location.hash;
  if (hash) {
    const item = document.querySelector(hash);
    if (item) {
      item.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    scroll();
  }, [location]);

  return (
    <Layout>
      <Catalog />
      <div className={styles.button}>
        <Button aria-label='Show more products'>Show more</Button>
      </div>
    </Layout>
  );
}

export default Home;
