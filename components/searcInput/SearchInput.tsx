import { useState, FormEvent, useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

import styles from './searchInput.module.scss';
import { useRouter } from 'next/navigation';

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  const ref = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (ref.current) {
      ref.current.style.visibility = 'visible';
      ref.current.style.width = '100%';
    }
  };

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
        ref={ref}
        type='text'
        placeholder='ex. culture, tech, latest'
        className=''
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit'>
        <RiSearchLine
          className={styles.searchIcon}
          onClick={handleButtonClick}
        />
      </button>
    </form>
  );
};

export default SearchInput;
