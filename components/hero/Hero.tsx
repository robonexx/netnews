import Link from 'next/link';
import ArticleCard from '../articleCard/ArticleCard';
import SmallArticleCard from '../smallArticleCard/SmallArticleCard';
import { guardianNewsType } from '@/lib/types/Types';
import { getTopGuardianNews } from '@/lib/api-routes';
// styles
import styles from './hero.module.scss';

const revalidate = 3600;

const Hero: React.FC = async () => {
  const news = await getTopGuardianNews();
  /* console.log(news.response.results); */

  return (
    <div className={styles.hero}>
      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {news &&
            news.response.results
              .slice(0, 1)
              .map((article: guardianNewsType) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  webTitle={article?.webTitle}
                  fields={article.fields}
                  sectionName={article.sectionName}
                  tags={article.tags}
                />
              ))}
          {/* small cards on the side */}
          <div className={`${styles.grid_wrap}`}>
            <div className={styles.grid}>
              {news &&
                news.response.results
                  .slice(1, 5)
                  .map((article: guardianNewsType) => (
                    <SmallArticleCard
                      key={article.id}
                      id={article.id}
                      webTitle={article?.webTitle}
                      fields={article.fields}
                      webUrl={article?.webUrl}
                      webPublicationDate={article.webPublicationDate}
                    />
                  ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {news &&
            news.response.results
              .slice(-3)
              .map((article: guardianNewsType) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  webTitle={article?.webTitle}
                  fields={article.fields}
                  webUrl={article?.webUrl}
                  sectionName={article.sectionName}
                  tags={article.tags}
                />
              ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
