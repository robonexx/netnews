import React from 'react';
import HeroImages from './components/heroImages/HeroImages';
import styles from './page.module.scss';
import Hero from './components/hero/Hero';
import Entertainment from './components/news/Entertainment';
import Headline from './components/headline/Headline';
import Tech from './components/news/Tech';
import Head from 'next/head';

const Home: React.FC = async () => {
  return (
    <main className={styles.main}>
      <h1>NEWS NET</h1>
      <p>Gathering the latest new in one place</p>
      <div className={styles.section}>
        {/*  <HeroImages /> */}
        <Hero />
      </div>
      <Headline title='Entertainment' />
      <section className={styles.section}>
        <Entertainment />
      </section>
      <Headline title='Technology' />
      <section className={styles.section}>
        <Tech />
      </section>
      <section className={styles.section}></section>
    </main>
  );
};

export default Home;
