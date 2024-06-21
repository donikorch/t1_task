import styles from './button.module.css';
import CartIcon from '../Icons/CartIcon';
import PlusMinusIcon from '../Icons/PlusMinusIcon';
import React from 'react';

import { ComponentsProps } from '../../interfaces';

export interface ButtonProps extends Omit<ComponentsProps, 'variant'> {
  children?: string | React.ReactNode;
  variant?: 'default' | 'plus' | 'minus' | 'cart';
  size?: 'big' | 'small';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'small',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  let content: JSX.Element | React.ReactNode | string | undefined = children;

  if (variant === 'cart') {
    content = <CartIcon />;
  } else if (variant === 'plus' || variant === 'minus') {
    content = <PlusMinusIcon variant={variant} />;
  }

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''}`}
      aria-label={typeof children === 'string' ? children : 'Button'}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
