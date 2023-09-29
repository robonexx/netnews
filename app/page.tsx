'use client';
import React from 'react';
import { motion } from 'framer-motion';
import HeroImages from './components/heroImages/HeroImages';
import styles from './page.module.scss';
import Card from './components/card/Card';


const Home: React.FC = () => {
  return (
    <motion.main className={styles.main}>
      <h1>NEWS NET</h1>
      <div className={styles.section}>
        {/*  <HeroImages /> */}
        {/* <Card
          title='World news'
          desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dignissimos minima voluptates sed ea, animi perspiciatis exercitationem porro. Voluptates commodi mollitia sapiente assumenda ipsa incidunt quasi totam accusamus aut possimus?'
        /> */}
      </div>
      <motion.section className={styles.section}></motion.section>
      <motion.section className={styles.section}></motion.section>
      <motion.section className={styles.section}></motion.section>
    </motion.main>
  );
};

export default Home;
