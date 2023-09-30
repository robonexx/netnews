import React from 'react';
import HeroImages from './components/heroImages/HeroImages';
import styles from './page.module.scss';
/* import { getTopNews } from './lib/api'; */


const Home: React.FC = async () => {

/*   const news = await getTopNews()

  console.log(news) */
  return (
    <main className={styles.main}>
      <h1>NEWS NET</h1>
      <div className={styles.section}>
        {/*  <HeroImages /> */}
        
      </div>
      <section className={styles.section}></section>
      <section className={styles.section}></section>
      <section className={styles.section}></section>
    </main>
  );
};

export default Home;
