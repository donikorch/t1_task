import React from 'react';
import styles from './counter.module.css';
import Button from '../Button/Button';
import { ComponentsProps } from '../../interfaces';

interface CounterProps extends ComponentsProps {
  count: number;
  stock: number;
  onUpdateQuantity: (action: 'increment' | 'decrement') => void;
}

function Counter({
  size = 'small',
  count,
  stock,
  onUpdateQuantity,
}: CounterProps) {
  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onUpdateQuantity('increment');
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onUpdateQuantity('decrement');
  };

  return (
    <div className={styles.counter} aria-label='Product quantity counter'>
      <Button
        variant='minus'
        size={size}
        aria-label='Decrease quantity'
        onClick={handleDecrement}
        disabled={count <= 1}
      />
      <div className={`${styles.count} ${styles[size]}`} aria-live='polite'>
        {count}
      </div>
      <Button
        variant='plus'
        size={size}
        aria-label='Increase quantity'
        onClick={handleIncrement}
        disabled={count === stock}
      />
    </div>
  );
}

export default Counter;
