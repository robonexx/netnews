import React from 'react';
import HeroImages from './components/heroImages/HeroImages';
import styles from './page.module.scss';
import Hero from './components/hero/Hero';

const Home: React.FC = async () => {

  return (
    <main className={styles.main}>
      <h1>NEWS NET</h1>
      <div className={styles.section}>
        {/*  <HeroImages /> */}
        <Hero />
      </div>
      <section className={styles.section}></section>
      <section className={styles.section}></section>
      <section className={styles.section}></section>
    </main>
  );
};

export default Home;
