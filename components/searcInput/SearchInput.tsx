import { useState, FormEvent } from 'react';
import { FcSearch } from 'react-icons/fc';

import styles from './searchInput.module.scss';
import { useRouter } from 'next/navigation';

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  const searchQuery = (e: FormEvent) => {
    e.preventDefault();
    if (!query) {
      console.log(' no query');
      router.push('/');
    } else {
      console.log('query', query);
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
        <FcSearch className={styles.searchIcon} />
      </button>
    </form>
  );
};

export default SearchInput;
