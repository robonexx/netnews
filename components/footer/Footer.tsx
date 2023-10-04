'use client';
import Link from 'next/link';

// styles
import styles from './footer.module.scss';
import SearchInput from '../searcInput/SearchInput';

export default function Footer(props: any) {
  return (
    <footer className={styles.footer}>
      <div>
        <Link href='/'>NET NEWS</Link>
      </div>
    </footer>
  );
}
