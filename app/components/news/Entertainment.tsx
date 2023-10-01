import { newsType } from '@/app/types/Types';
import ArticleCard from '../articleCard/ArticleCard';

//styles
import styles from './news.module.scss';
import { getEntertainment } from '@/app/lib/api';

const Entertainment = async () => {
  const news = await getEntertainment();


  return (
    <div className={styles.news}>
        <div className={styles.grid}>
          {news &&
            news.articles.filter(
              (article: newsType) => article.source.id !== null
            ).splice(0, 3).map((article: newsType) => (
              <div key={article.url}>
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
  );
};

export default Entertainment;
