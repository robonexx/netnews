import { useState, FormEvent } from 'react';
import { FcSearch } from 'react-icons/fc';


import styles from './searchInput.module.scss';

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>('');
 

  const searchQuery = (e: FormEvent) => {
    e.preventDefault();
    if (!query) {
     console.log(' no query')
    } else {
      console.log('query', query)
    }
  };

  return (
    <form className={styles.form} onSubmit={searchQuery}>
      <input
        type='text'
        placeholder='ex. culture, tech, latest'
        className=''
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit'>
        <FcSearch className={styles.searchIcon} />
      </button>
    </form>
  );
};

export default SearchInput;
