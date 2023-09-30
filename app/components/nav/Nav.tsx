import React, { useState, useEffect, useRef, ReactNode } from 'react';
import NavBtn from './NavBtn';
// styles
import styles from './Navbar.module.scss';

interface NavProps {
  children: ReactNode;
}

export default function Nav({children}: NavProps): JSX.Element {
  const [click, setClick] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setNavActive(!navActive);
  };

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.pageYOffset;

      const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          navRef.current?.classList.add(`${styles.navbar && styles.bgorange}`);
          navRef.current?.classList.remove(`${styles.hide}`);
        } else {
          navRef.current?.classList.add(`${styles.hide}`);
          navRef.current?.classList.remove(
            `${styles.navbar && styles.bgorange}`
          );
        }
        prevScrollpos = currentScrollPos;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <button className={styles.menu_icon} onClick={handleClick}>
        <NavBtn navActive={navActive} handleClick={handleClick} />
      </button>
      <ul
        className={
          click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`
        }
      >
        {children}
      </ul>
    </nav>
  );
}
