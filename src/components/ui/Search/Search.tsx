import styles from './search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

interface SearchProps {
  placeholder: string;
  text: string;
}

function Search({ placeholder, text }: SearchProps) {
  return (
    <form className={styles.search} role='search' aria-label='Search catalog'>
      <label htmlFor='search' className={styles.hidden}>
        Search
      </label>
      <Input placeholder={placeholder} id='search' />
      <Button aria-label='Search'>{text}</Button>
    </form>
  );
}

export default Search;
