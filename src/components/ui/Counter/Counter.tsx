import styles from './counter.module.css';
import Button from '../Button/Button';
import ComponentProps from '../../interfaces';

function Counter({ size = 'small' }: ComponentProps) {
  return (
    <div className={styles.counter} aria-label='Product quantity counter'>
      <Button variant='minus' size={size} aria-label='Decrease quantity' />
      <div className={`${styles.count} ${styles[size]}`} aria-live='polite'>
        1
      </div>
      <Button variant='plus' size={size} aria-label='Increase quantity' />
    </div>
  );
}

export default Counter;
