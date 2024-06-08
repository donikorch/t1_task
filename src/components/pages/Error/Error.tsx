import Layout from '../Layout/Layout';
import styles from './error.module.css';

function Error() {
  return (
    <Layout variant='secondary' size='small'>
      <div className={styles.error}>404</div>
    </Layout>
  );
}

export default Error;
