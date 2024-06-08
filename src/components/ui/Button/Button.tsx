import styles from './button.module.css';
import CartIcon from '../Icons/CartIcon';
import PlusMinusIcon from '../Icons/PlusMinusIcon';
import React from 'react';

import ComponentProps from '../../interfaces';

interface ButtonProps extends Omit<ComponentProps, 'variant'> {
  children?: string | React.ReactNode;
  variant?: 'default' | 'plus' | 'minus' | 'cart';
  size?: 'big' | 'small';
}

function Button({
  children,
  variant = 'default',
  size = 'small',
}: ButtonProps) {
  let content: JSX.Element | React.ReactNode | string | undefined = children;

  if (variant === 'cart') {
    content = <CartIcon />;
  } else if (variant === 'plus' || variant === 'minus') {
    content = <PlusMinusIcon variant={variant} />;
  }

  return (
    <button
      type='button'
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
    >
      {content}
    </button>
  );
}

export default Button;
