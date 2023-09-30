import { FC } from 'react';
import { newsType } from '@/app/types/Types';
import ArticleCard from '../articleCard/ArticleCard';

//styles
import styles from './news.module.scss';
import { getTech } from '@/app/lib/api';
import { randomKey } from '@/app/utils/randomKey';

const Tech: FC = async () => {
  const news = await getTech();

  return (
    <div className={styles.news}>
      <div className={`${styles.grid_wrap} ${styles.grid_group}`}>
        <div className={styles.grid}>
          {news &&
            news.articles
              .filter((article: newsType) => article.source.id !== null)
              .map((article: newsType) => (
                <div key={article?.source.id + randomKey(6)}>
                  <ArticleCard
                    title={article?.title}
                    description={article?.description}
                    urlToImage={article?.urlToImage}
                    source={article?.source}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
