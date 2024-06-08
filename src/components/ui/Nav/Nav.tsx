import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import Links from '../Links/Links';
import { useState } from 'react';

import ComponentProps from '../../interfaces';

interface NavProps extends ComponentProps {
  bottom?: boolean;
}

function Nav({ variant = 'primary', size = 'big', bottom = false }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`${styles.nav} ${styles[variant]}`}
        aria-label='Main Navigation'
      >
        <ul className={styles.navList}>
          <li>
            <Link to='/' className={styles.logo} aria-label='Home'>
              Goods4you
            </Link>
          </li>
          <Links variant={variant} size={size} />
          <li
            className={`${styles.hamburger} ${styles[variant]} ${
              bottom ? styles.bottom : ''
            }`}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls='menu'
            aria-label='Toggle navigation menu'
          >
            Menu
          </li>
        </ul>
      </nav>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`} id='menu'>
        <ul>
          <Links variant={variant} menu={true} size={size} />
        </ul>
      </div>
    </>
  );
}

export default Nav;
