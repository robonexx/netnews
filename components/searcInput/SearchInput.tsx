import { useState, FormEvent, useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

import styles from './searchInput.module.scss';
import { useRouter } from 'next/navigation';

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [active, setActive] = useState(false);
  const router = useRouter();

  const ref = useRef<HTMLInputElement>(null);

  const handleButtonClick = (e: FormEvent) => {
    e.preventDefault()
    /*  if (ref.current) {
      ref.current.style.visibility = 'visible';
      ref.current.style.width = '100%';
    } */
    setActive((prev) => !prev);
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
        /*  ref={ref} */
        type='text'
        placeholder='ex. culture, tech, latest'
        className={active ? styles.isActive : ''}
        onChange={(e) => setQuery(e.target.value)}
      />
      {active ? (
        <button type='submit'>
          <RiSearchLine
            className={styles.searchIcon}
            onClick={handleButtonClick}
          />
        </button>
      ) : (
        <button>
          <RiSearchLine
            className={styles.searchIcon}
            onClick={handleButtonClick}
          />
        </button>
      )}
    </form>
  );
};

export default SearchInput;
