import Button from '../Button/Button';
import Nav from '../Nav/Nav';
import styles from './header.module.css';

import ComponentProps from '../../interfaces';

function Header({ variant = 'primary', size = 'big' }: ComponentProps) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <div className={styles.container}>
        <Nav variant={variant} size={size} />
        {variant === 'primary' && (
          <>
            <h1>
              Any products from famous brands
              <br />
              with worldwide delivery
            </h1>
            <h2>
              We sell smartphones, laptops, clothes, shoes
              <br />
              and many other products at low prices
            </h2>
            <div className={styles.button}>
              <Button aria-label='Go to shopping'>
                <a href='#catalog'>Go to shopping</a>
              </Button>
            </div>
            <span className={styles.logo}>Goods4you</span>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
