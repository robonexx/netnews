'use client';
import { useState, FormEvent } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

import styles from './searchInput.module.scss';

const SearchInput = () => {
  const [keywords, setKeywords] = useState<string>('');
  const router = useRouter();

  const searchKeywords = (e: FormEvent) => {
    e.preventDefault();
    if (!keywords) {
      router.push('/');
    } else {
      router.push(`/search?q=${keywords}`);
    }
  };

  return (
    <form className={styles.form} onSubmit={searchKeywords}>
      <input
        type='text'
        placeholder='ex. culture, tech, latest'
        className=''
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button type='submit'>
        <BiSearch className={styles.searchIcon} />
      </button>
    </form>
  );
};

export default SearchInput;
