import ArticleCard from '../articleCard/ArticleCard';
import SmallArticleCard from '../smallArticleCard/SmallArticleCard';
import { newsType } from '@/app/types/Types';
import { getTopNews } from '@/app/lib/api';
// styles
import styles from './hero.module.scss';

const Hero: React.FC = async () => {
  const data = await getTopNews();

  console.log(data.articles);
  return (
    <div className={styles.hero}>
      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {data &&
            data.articles.slice(0, 1).map((item: newsType) => (
              <div key={item.source.id}>
                <ArticleCard
                  title={item?.title}
                  description={item?.description}
                  urlToImage={item?.urlToImage}
                  source={item?.source}
                />
              </div>
            ))}
          {/* small cards on the side */}
          <div className={`${styles.grid_wrap} ${styles.grid_group}`}>
            <div className={styles.grid}>
              {data &&
                data.articles.slice(1, 5).map((item: newsType) => (
                  <div key={item.source.id}>
                    <SmallArticleCard
                      title={item?.title}
                      source={item?.source}
                      urlToImage={item?.urlToImage}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {data &&
            data.articles.slice(-3).map((item: newsType) => (
              <div key={item.source.id}>
                <ArticleCard
                  title={item?.title}
                  description={item?.description}
                  urlToImage={item?.urlToImage}
                  source={item?.source}
                />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
