import React from 'react';
import styles from './page.module.scss';
import Hero from './components/hero/Hero';
import Entertainment from './components/news/Entertainment';
import Headline from './components/headline/Headline';
import Tech from './components/news/Tech';
import Health from './components/news/Health';
import AiNews from './components/news/AiNews';

const Home: React.FC = async () => {
  return (
    <main className={styles.main}>
      <h1>NEWS NET</h1>
      <p>Gathering the latest new in one place</p>
      <div className={styles.section}>
        <Hero />
      </div>
      {/*  <section className={styles.section}>
        <Headline title='Technology' />
        <Tech />
      </section>
      <section className={styles.section}>
        <Headline title='Health' />
        <Health />
      </section>
      <section className={styles.section}>
        <Headline title='Ai News 🤖' />
        <AiNews />
      </section>
      <section className={styles.section}>
        <Headline title='Entertainment' />
        <Entertainment />
      </section> */}
    </main>
  );
};

export default Home;
