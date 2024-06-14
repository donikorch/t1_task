import styles from './input.module.css';

export interface InputProps {
  placeholder: string;
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, id, value, onChange }: InputProps) {
  return (
    <input
      type='text'
      id={id}
      name='search'
      value={value}
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
    />
  );
}

export default Input;
