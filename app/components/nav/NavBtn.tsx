import React from 'react';
import styles from './NavBtn.module.scss';

interface NavBtnProps {
  handleClick: () => void;
  navActive: boolean;
}

const NavBtn: React.FC<NavBtnProps> = ({
  handleClick,
  navActive,
}): JSX.Element => {
  return (
    <div
      className={`${styles.navBtn} ${navActive ? styles.open : ''}`}
      onClick={handleClick}
    >
      <div className={styles.line}></div>
    </div>
  );
};

export default NavBtn;
