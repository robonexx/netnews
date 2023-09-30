import React from 'react';
import HeroImages from './components/heroImages/HeroImages';
import styles from './page.module.scss';
import { getTopNews } from './lib/api';
import Hero from './components/hero/Hero';
import { dummyNews } from './assets/DummyData';

const Home: React.FC = async () => {
  /*  const data = await getTopNews();
  console.log(data.articles); */

  return (
    <main className={styles.main}>
      <h1>NEWS NET</h1>
      <div className={styles.section}>
        {/*  <HeroImages /> */}
        <Hero content={dummyNews} />
      </div>
      <section className={styles.section}></section>
      <section className={styles.section}></section>
      <section className={styles.section}></section>
    </main>
  );
};

export default Home;
