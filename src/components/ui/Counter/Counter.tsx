import styles from './counter.module.css';
import Button from '../Button/Button';
import ComponentProps from '../../interfaces';

interface CounterProps extends ComponentProps {
  count: number;
}

function Counter({ size = 'small', count }: CounterProps) {
  return (
    <div className={styles.counter} aria-label='Product quantity counter'>
      <Button variant='minus' size={size} aria-label='Decrease quantity' />
      <div className={`${styles.count} ${styles[size]}`} aria-live='polite'>
        {count}
      </div>
      <Button variant='plus' size={size} aria-label='Increase quantity' />
    </div>
  );
}

export default Counter;
