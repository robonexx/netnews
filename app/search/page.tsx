'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { newsType } from '@/app/types/Types';
import { randomKey } from '@/app/utils/randomKey';
import ArticleCard from '../components/articleCard/ArticleCard';
import Headline from '../components/headline/Headline';
// styles
import styles from './search.module.scss';

const Search = () => {
  const [newsData, setNewsData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.get('q') : null;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getSearchedNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&q=${search}&pageSize=10)`,
          { signal }
        );
        const responseToJson = await response.json();
        const articles: newsType[] = responseToJson?.articles;
        // take away if there is a null id in source, it gives errors
        const filteredArticles = articles.filter(
          (article) => article?.source.id !== null
        );
        setLoading(false);
        setNewsData(filteredArticles);
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
        <>
          {newsData.map((article: newsType) => (
            <div key={article?.source.id + randomKey(5)}>
              <ArticleCard {...article} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Search;
