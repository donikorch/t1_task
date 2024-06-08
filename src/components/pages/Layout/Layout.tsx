import styles from './layout.module.css';
import Header from '../../ui/Header/Header';
import Footer from '../../ui/Footer/Footer';
import ComponentProps from '../../interfaces';

interface LayoutProps extends ComponentProps {
  children: React.ReactNode;
}

function Layout({ variant = 'primary', size = 'big', children }: LayoutProps) {
  return (
    <>
      <Header variant={variant} size={size} />
      <main className={styles.main}>{children}</main>
      <Footer variant={variant} />
    </>
  );
}

export default Layout;
