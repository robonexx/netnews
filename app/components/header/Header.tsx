'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Nav from '../nav/Nav';

// styles
import styles from './Header.module.scss';
import SearchInput from '../searcInput/SearchInput';

const variants = {
  notVisible: { opacity: 0, x: '-100%' },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  onHover: {
    originX: 0,
    scale: [1, 1.4, 1.2],
    rotate: [0, 10, -10, 0],
    transition: { type: 'spring', stiffness: 120 },
  },
  fly: {
    opacity: 1,
    scale: [1, 1, 1, 1, 1, 1, 1.4, 1.2, 1, 1, 1, 1],
    rotate: [0, 0, 0, 0, 0, 0, 360, 180, 0, 0, 0],
    x: [1, -2, 1, -1, 1, -1, 0, 200, 200, 300],
    y: [1, -1, 1, -1, 1, 0, 0, 0, -300, -300],
    /* x: [0, 2, 0, 2, 0, 10, 40, 100, 1000],
    y: [0, 0, 0, 0, 0, 0, 40, 100, 1000], */
    transition: { duration: 1, type: 'spring', stiffness: 120 },
  },
};

export default function Header(props: any) {
  const path = usePathname();

  return (
    <header className={styles.header}>
      <Link href='/'>NEWS NET</Link>
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
