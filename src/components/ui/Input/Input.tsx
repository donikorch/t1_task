import styles from './input.module.css';

interface InputProps {
  placeholder: string;
  id: string;
}

function Input({ placeholder, id }: InputProps) {
  return (
    <input
      type='text'
      id={id}
      name='search'
      placeholder={placeholder}
      className={styles.input}
    />
  );
}

export default Input;
