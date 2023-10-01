import { FC } from 'react';
import { newsType } from '@/app/types/Types';
import ArticleCard from '../articleCard/ArticleCard';

//styles
import styles from './news.module.scss';
import { getTech } from '@/app/lib/api';

const Tech: FC = async () => {
  const news = await getTech();

  return (
    <div className={styles.news}>
      <div className={`${styles.grid_wrap} ${styles.grid_group}`}>
        <div className={styles.grid}>
          {news &&
            news.articles.splice(0, 3).map((article: newsType) => (
              <div key={article?.url}>
                <ArticleCard
                  title={article?.title}
                  description={article?.description}
                  urlToImage={article?.urlToImage}
                  source={article?.source}
                  url={article.url}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
