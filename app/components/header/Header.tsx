// Header.tsx
import React from 'react';
import TopMenu from '../topmenu/TopMenu';
import Nav from '../nav/Nav';
import NavItem from '../nav/NavItem';

// styles
import styles from '../../styles/layout/Header.module.scss';

import { AiOutlineHome } from 'react-icons/ai';
import { RiArticleLine } from 'react-icons/ri';
import { MdOutlineHistoryEdu, MdOutlineAnnouncement } from 'react-icons/md';
import { GiPlantRoots } from 'react-icons/gi';

export default function Header() {
  return (
    <div className={styles.header}>
      <TopMenu />
      <Nav>
        <NavItem title='home' icon={<AiOutlineHome />} url='/'>
          <div></div> 
        </NavItem>
        <NavItem title='world' icon={<MdOutlineAnnouncement />} url='/world'>
          <div></div> 
        </NavItem>
        <NavItem title='health' icon={<GiPlantRoots />} url='/health'>
          <div></div> 
        </NavItem>
        <NavItem title='science' icon={<MdOutlineHistoryEdu />} url='/science'>
          <div></div>
        </NavItem>
        <NavItem title='technology' icon={<RiArticleLine />} url='/technology'>
          <div></div> 
        </NavItem>
      </Nav>
    </div>
  );
}
