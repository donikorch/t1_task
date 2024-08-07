import { useState } from 'react';
import styles from './question.module.css';
import CrossIcon from '../Icons/CrossIcon';

interface QuestionProps {
  index: number;
  children?: string;
}

function Question({ index, children }: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleQuestion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className={styles.question}>
      <header className={styles.container} onClick={toggleQuestion}>
        <h5>Question {index}</h5>
        <div className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
          <CrossIcon />
        </div>
      </header>
      <div className={`${styles.answer} ${isOpen ? styles.open : ''}`}>
        <p>{children}</p>
      </div>
    </article>
  );
}

export default Question;
