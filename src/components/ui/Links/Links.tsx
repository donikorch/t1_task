import { Link, NavLink } from 'react-router-dom';
import styles from './links.module.css';
import CartIcon from '../Icons/CartIcon';

import ComponentProps from '../../interfaces';

interface LinksProps extends ComponentProps {
  menu?: boolean;
}

function Links({
  variant = 'primary',
  menu = false,
  size = 'big',
}: LinksProps) {
  return (
    <>
      <li>
        <NavLink to='/#catalog' className={styles.link} aria-label='Catalog'>
          Catalog
        </NavLink>
      </li>
      <li>
        <NavLink to='/#faq' className={styles.link} aria-label='FAQ'>
          FAQ
        </NavLink>
      </li>
      {(variant === 'primary' || size === 'small') && (
        <li>
          <Link to='/cart' className={styles.link} aria-label='Cart'>
            Cart {!menu && <CartIcon counter={true} />}
          </Link>
        </li>
      )}
    </>
  );
}

export default Links;
