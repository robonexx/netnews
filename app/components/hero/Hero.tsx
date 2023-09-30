'use client';
import Link from 'next/link';
import ArticleCard from '../articleCard/ArticleCard';
import SmallArticleCard from '../smallArticleCard/SmallArticleCard';
import { newsType } from '@/app/types/Types';

// styles
import { motion } from 'framer-motion';
import styles from './hero.module.scss';

interface HeroProps {
  content: newsType[];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.8 }}
    >
      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {content ? (
            content.slice(0, 1).map((item) => (
              <div key={item.source.id}>
                <ArticleCard
                  title={item.title}
                  description={item.description}
                  urlToImage={item.urlToImage}
                  source={item.source}
                />
              </div>
            ))
          ) : (
            <div></div>
          )}
          {/* small cards on the side */}
          <div className={styles.grid_wrap}>
            <div className={styles.grid}>
              {content &&
                content.slice(1, 5).map((item, idx) => (
                  <div key={item.source.id}>
                    <SmallArticleCard title={item.title} source={item.source} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {content &&
            content.slice(-3).map((item) => (
              <div key={item.source.id}>
                <ArticleCard
                  title={item.title}
                  description={item.description}
                  urlToImage={item.urlToImage}
                  source={item.source}
                />
              </div>
            ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
