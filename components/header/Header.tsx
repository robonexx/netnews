'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Nav from '../nav/Nav';

// styles
import styles from './Header.module.scss';
import SearchInput from '../searcInput/SearchInput';

export default function Header(props: any) {
  const path = usePathname();

  return (
    <header className={styles.header}>
      <div>
        <Link href='/'>NET NEWS</Link>
      </div>
      {props.children}
      <motion.hr
        className={styles.border_bottom}
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.6, delay: 0.3, ease: 'easeInOut' }}
      />
      <SearchInput />
      <Nav />
    </header>
  );
}
