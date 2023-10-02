import ArticleCard from '../articleCard/ArticleCard';
import SmallArticleCard from '../smallArticleCard/SmallArticleCard';
import { guardianNewsType } from '@/app/types/Types';
import { getTopGuardianNews } from '@/app/lib/api';
// styles
import styles from './hero.module.scss';

const Hero: React.FC = async () => {
  const news = await getTopGuardianNews();
  /* console.log(news.response.results); */

  return (
    <div className={styles.hero}>
      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {news &&
            news.response.results
              .filter((article: guardianNewsType) => article.id !== null)
              .slice(0, 1)
              .map((article: guardianNewsType) => (
                <div key={article.id}>
                  <ArticleCard
                    id={article.id}
                    webTitle={article?.webTitle}
                    fields={article?.fields}
                    webUrl={article?.webUrl}
                    sectionName={article.sectionName}
                  />
                </div>
              ))}
          {/* small cards on the side */}
          <div className={`${styles.grid_wrap}`}>
            <div className={styles.grid}>
              {news &&
                news.response.results
                  .filter((article: guardianNewsType) => article.id !== null)
                  .slice(1, 5)
                  .map((article: guardianNewsType) => (
                    <div key={article.id}>
                      <SmallArticleCard
                        id={article.id}
                        webTitle={article?.webTitle}
                        fields={article?.fields}
                        webUrl={article?.webUrl}
                      />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {news &&
            news.response.results
              .filter((article: guardianNewsType) => article.id !== null)
              .slice(-3)
              .map((article: guardianNewsType) => (
                <div key={article.id}>
                  <ArticleCard
                    id={article.id}
                    webTitle={article?.webTitle}
                    fields={article?.fields}
                    webUrl={article?.webUrl}
                    sectionName={article.sectionName}
                  />
                </div>
              ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
