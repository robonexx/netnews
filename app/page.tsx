'use client';
import React from 'react';
import { motion } from 'framer-motion';
import HeroImages from './components/heroImages/HeroImages';
import styles from './page.module.scss';


const Home: React.FC = () => {
  return (
    <motion.main className={styles.main}>
      <h1>NEWS NET</h1>
      <div className={styles.section}>
        {/*  <HeroImages /> */}
        
      </div>
      <motion.section className={styles.section}></motion.section>
      <motion.section className={styles.section}></motion.section>
      <motion.section className={styles.section}></motion.section>
    </motion.main>
  );
};

export default Home;
