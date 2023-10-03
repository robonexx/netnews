import Link from 'next/link';
import ArticleCard from '../articleCard/ArticleCard';
import SmallArticleCard from '../smallArticleCard/SmallArticleCard';
import { guardianNewsType } from '@/lib/types/Types';
import { getTopGuardianNews } from '@/lib/api-routes';
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
                <Link
                  key={article.id}
                  href={`/${article.id}`}
                >
                  <ArticleCard
                    id={article.id}
                    webTitle={article?.webTitle}
                    fields={article?.fields}
                    webUrl={article?.webUrl}
                    sectionName={article.sectionName}
                  />
                </Link>
              ))}
          {/* small cards on the side */}
          <div className={`${styles.grid_wrap}`}>
            <div className={styles.grid}>
              {news &&
                news.response.results
                  .filter((article: guardianNewsType) => article.id !== null)
                  .slice(1, 5)
                  .map((article: guardianNewsType) => (
                    <Link
                      key={article.id}
                      href={`/${article.id}`}
                    >
                      <SmallArticleCard
                        id={article.id}
                        webTitle={article?.webTitle}
                        fields={article?.fields}
                        webUrl={article?.webUrl}
                      />
                    </Link>
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
                <Link
                  key={article.id}
                  href={`/${article.id}`}
                >
                  <ArticleCard
                    id={article.id}
                    webTitle={article?.webTitle}
                    fields={article?.fields}
                    webUrl={article?.webUrl}
                    sectionName={article.sectionName}
                  />
                </Link>
              ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
