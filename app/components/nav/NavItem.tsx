import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';

interface NavItemProps {
  title: string;
  url: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function NavItem({
  children,
  title,
  url,
  icon,
}: NavItemProps): JSX.Element {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const { events } = useRouter();
  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeMobileMenu);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeMobileMenu);
    };
  }, [closeMobileMenu, events]);

  return (
    <li
      className={styles.nav_item}
      key={title}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href={url} onClick={closeMobileMenu} className={styles.nav_links}>
        <span className={styles.link_icon}>{icon}</span>
        <span className={styles.link_title}>{title}</span>
      </a>
      {click && children}
    </li>
  );
}
