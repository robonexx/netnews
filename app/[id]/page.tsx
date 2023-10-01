'use client';
import { useState, FC, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
//styles
import styles from './article.module.scss';
import { AiOutlineCalendar } from 'react-icons/ai';
import { convertDate } from '../utils/convertDate';
import { getTopNews } from '../lib/api';
import { newsType } from '../types/Types';
import { HighlightedText } from '../components/highlightedText/HighlightedText';

const Article: FC<{ params?: { id: string } }> = ({ params }) => {
  const [news, setNews] = useState<newsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getTopNews();
        console.log('Fetched data:', data);
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  let id = params?.id;
  if (!id) {
    // Handle the case where id is undefined
    return <div>No ID provided</div>;
  }

  id = id.replace('/', '');
  console.log('path id', id);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('Type of news:', typeof news);
  const filteredNews =
    news && news.length !== 0
      ? news.find((item) => item.source.id === id)
      : null;

  console.log('filtered news', filteredNews);
  // Check if the news with the specified id is found
  if (!filteredNews) {
    return <div>No matching news found</div>;
  }

  const publishedDate = filteredNews.publishedAt || '';
  const formattedDate = convertDate(publishedDate);

  return (
    <div className={styles.container}>
      <Head>
        <title>News Net | Article</title>
      </Head>

      <main>
        <div className={styles.wrapper}>
          {filteredNews && (
            <article
              key={filteredNews.source.id}
              className={styles.content_wrapper}
            >
              <p className={styles.date}>
                <AiOutlineCalendar /> <HighlightedText title={formattedDate} />
              </p>
              <h2 className={styles.title}>{filteredNews.title}</h2>
              <h4 className={styles.desc}>{filteredNews.description}</h4>
              <div className={styles.media_wrapper}>
                {filteredNews.urlToImage ? (
                  <div className={styles.img}>
                    <Image
                      src={filteredNews.urlToImage}
                      alt='Article media'
                      fill
                      priority
                    />
                  </div>
                ) : (
                  <div className={styles.overlay}>
                    <div className={styles.logo}></div>
                  </div>
                )}
              </div>
              <p className={styles.author}>
                <HighlightedText title={`By: ${filteredNews.author}`} />
              </p>
              <hr className={styles.divider} />
              <p className={styles.content}>{filteredNews.content}</p>
            </article>
          )}
        </div>
      </main>
    </div>
  );
};

export default Article;
