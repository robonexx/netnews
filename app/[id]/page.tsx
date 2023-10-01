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

const Article: FC<{ params?: { id: string } }> = ({ params }) => {
  const [news, setNews] = useState<newsType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getTopNews();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
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

  const filteredNews = news.find((item) => item.source.id === id);

  // check if the news with the specified id is found
  if (!filteredNews) {
    return <div>No matching news found</div>;
  }

  const publishedDate = filteredNews.publishedAt || ''; // Use empty string as a default value
  const formattedDate = convertDate(publishedDate);

  return (
    <div className={styles.container}>
      <Head>
        <title>News Net | Article</title>
      </Head>

      <main>
        <article className={styles.wrapper}>
          {filteredNews && (
            <div key={filteredNews.source.id}>
              <article className={styles.content_wrapper}>
                <p className={styles.date}>
                  <AiOutlineCalendar /> {formattedDate}
                </p>
                <h2>{filteredNews.title}</h2>
                <h4>{filteredNews.description}</h4>
                <div className={styles.media_wrapper}>
                  {filteredNews.urlToImage ? (
                    <div className={styles.img}>
                      <Image
                        src={filteredNews.urlToImage}
                        alt='Article media'
                        fill
                      />
                    </div>
                  ) : (
                    <div className={styles.overlay}>
                      <div className={styles.logo}></div>
                    </div>
                  )}
                </div>
                <p className={styles.author}>By: {filteredNews.author}</p>
                <hr className={styles.divider} />
                <div className={styles.content}>{filteredNews.content}</div>
              </article>
            </div>
          )}
        </article>
      </main>
    </div>
  );
};

export default Article;
