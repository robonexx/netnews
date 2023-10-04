'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { guardianNewsType } from '@/lib/types/Types';
import { randomKey } from '@/lib/utils/randomKey';
import ArticleCard from '../../components/articleCard/ArticleCard';
import Headline from '../../components/headline/Headline';
// styles
import styles from './search.module.scss';
import { getNewsSearch } from '@/lib/api-routes';

const Search = () => {
  const [newsData, setNewsData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.get('q') : null;

  useEffect(() => {
    const controller = new AbortController();
    const getSearchedNews = async () => {
      try {
        setLoading(true);
        const response = await getNewsSearch(search, controller);
        const articles: guardianNewsType[] = response?.response.results;
        setLoading(false);
        setNewsData(articles);
      } catch (error) {
        if (typeof error === 'object' && error !== null) {
          console.log(error.toString());
        } else {
          console.log('Unexpected error', error);
        }
      }
    };

    getSearchedNews();

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div className={styles.search}>
      <Headline title='Your search results:' />
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={styles.result_wrapper}>
          {newsData && newsData.map((article: guardianNewsType) => (
            <div key={article.id}>
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
