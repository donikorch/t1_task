import styles from './input.module.css';

export interface InputProps {
  placeholder: string;
  id: string;
  value?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  placeholder,
  type = 'text',
  id,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
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
