import { guardianNewsType } from '@/lib/types/Types';
import ArticleCard from '../articleCard/ArticleCard';

//styles
import styles from './news.module.scss';
import { getEntertainment } from '@/lib/api-routes';

const Entertainment = async () => {
  const news = await getEntertainment();

  return (
    <div className={styles.news}>
      <div className={styles.grid}>
        {news &&
          news.response.results
            .splice(0, 3)
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
    </div>
  );
};

export default Entertainment;
