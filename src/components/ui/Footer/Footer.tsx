import styles from './footer.module.css';
import Nav from '../Nav/Nav';
import Question from '../Question/Question';
import { ComponentsProps } from '../../interfaces';

function Footer({ variant = 'primary' }: ComponentsProps) {
  return (
    <footer className={styles.footer}>
      {variant === 'primary' && (
        <section className={styles.top}>
          <h3 id='faq'>FAQ</h3>
          <div className={styles.questions}>
            <Question index={1}>Long answer to the first question</Question>
            <Question index={2}>Long answer to the second question</Question>
          </div>
        </section>
      )}
      <div className={styles.bottom}>
        <Nav variant='secondary' bottom={true} />
      </div>
    </footer>
  );
}

export default Footer;
