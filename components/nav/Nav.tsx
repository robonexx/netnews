import { useState, useEffect, useCallback } from 'react';
/* import usePathname  from 'next/router'; */
import MenuBtn from '../menuBtn/MenuBtn';
import NavItem from './NavItem';
import { navData } from '@/assets/navData';

// styles
import styles from './Nav.module.scss';

interface NavItemProps {
  title: string;
  path: string;
  id: number;
  img: StaticImageData;
  i: number;
  closeMobileMenu: () => void;
}

export default function Nav() {
  const [active, setActive] = useState(false);
  /*  const pathname = usePathname(); */

  const closeMobileMenu = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <nav className={`${styles.nav} ${active ? styles.open : ''}`}>
      <ul className={`${styles.menu} ${active ? styles.open : ''}`}>
        {navData.map(
          ({ title, path, id, img, i, closeMobileMenu }: NavItemProps) => (
            <NavItem
              key={id}
              title={title}
              path={path}
              id={id}
              i={i}
              img={img}
              closeMobileMenu={closeMobileMenu}
            />
          )
        )}
      </ul>
      <MenuBtn active={active} setActive={setActive} />
    </nav>
  );
}
