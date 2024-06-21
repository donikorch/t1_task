import styles from './layout.module.css';
import Header from '../../ui/Header/Header';
import Footer from '../../ui/Footer/Footer';
import { ComponentsProps } from '../../interfaces';

interface LayoutProps extends ComponentsProps {
  children: React.ReactNode;
  footer?: boolean;
}

function Layout({
  variant = 'primary',
  size = 'big',
  footer = true,
  children,
}: LayoutProps) {
  return (
    <>
      <Header variant={variant} size={size} />
      <main className={styles.main}>{children}</main>
      {footer && <Footer variant={variant} />}
    </>
  );
}

export default Layout;
