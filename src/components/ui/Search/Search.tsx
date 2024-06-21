import styles from './search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { ChangeEvent, FormEvent, useState } from 'react';

export interface SearchProps {
  placeholder: string;
  text: string;
  onInput: (q: string) => void;
  onButton: () => void;
}

function Search({ placeholder, text, onInput, onButton }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onButton();
  };

  return (
    <form
      className={styles.search}
      role='search'
      aria-label='Search catalog'
      onSubmit={handleSubmit}
    >
      <label htmlFor='search' className={styles.hidden}>
        Search
      </label>
      <Input
        placeholder={placeholder}
        id='search'
        value={query}
        onChange={handleChange}
      />
      <Button type='submit' aria-label='Search'>
        {text}
      </Button>
    </form>
  );
}

export default Search;
