import { guardianNewsType } from '@/lib/types/Types';
import ArticleCard from '../../components/articleCard/ArticleCard';
import Headline from '../../components/headline/Headline';
// styles
import styles from '@/styles/pages/allOtherPages.module.scss';
import { getEntertainment } from '@/lib/api-routes';

const entertainemnt = async () => {
  const news = await getEntertainment();

  return (
    <div className={styles.page}>
      <Headline title='ENTERTAINMENT NEWS:' />
      <div className={styles.news_wrapper}>
        {news &&
          news.response.results.map((article: guardianNewsType) => (
            <div key={article.id}>
              <ArticleCard {...article} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default entertainemnt;
