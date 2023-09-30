import { useState, FormEvent } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/router';

import styles from './searchInput.module.scss';

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  const searchQuery = (e: FormEvent) => {
    e.preventDefault();
    if (!query) {
      router.push('/');
    } else {
      router.push(`/search?q=${query}`);
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
        <BiSearch className={styles.searchIcon} />
      </button>
    </form>
  );
};

export default SearchInput;
