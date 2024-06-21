import { Link, NavLink } from 'react-router-dom';
import styles from './links.module.css';
import CartIcon from '../Icons/CartIcon';

import { ComponentsProps } from '../../interfaces';
import { useAppSelector } from '../../../app/store';

interface LinksProps extends ComponentsProps {
  menu?: boolean;
}

function Links({
  variant = 'primary',
  menu = false,
  size = 'big',
}: LinksProps) {
  const carts = useAppSelector((store) => store.carts.carts);

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
            Cart{' '}
            {!menu && (
              <CartIcon counter={true} count={carts[0]?.totalProducts} />
            )}
          </Link>
        </li>
      )}
    </>
  );
}

export default Links;
