'use client';
import { useState, FC, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
//styles
import styles from './article.module.scss';
import { AiOutlineCalendar } from 'react-icons/ai';
import { convertDate } from '../utils/convertDate';
import {
  getEntertainment,
  getHealth,
  getTech,
  getTopGuardianNews,
  getAINews,
} from '../lib/api';
import { guardianNewsType } from '../types/Types';
import { HighlightedText } from '../components/highlightedText/HighlightedText';

const Article: FC<{ params?: { id: string } }> = ({ params }) => {
  const [news, setNews] = useState<guardianNewsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getTopGuardianNews();
        setNews((prevNews) => [...prevNews, ...data.response.results]);
        const dataE = await getEntertainment();
        setNews((prevNews) => [...prevNews, ...dataE.response.results]);
        const dataT = await getTech();
        setNews((prevNews) => [...prevNews, ...dataT.response.results]);
        const dataH = await getHealth();
        setNews((prevNews) => [...prevNews, ...dataH.response.results]);
        const dataA = await getAINews();
        setNews((prevNews) => [...prevNews, ...dataA.response.results]);

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
      ? news.find((item) => item.id === id)
      : null;

  console.log('filtered news', filteredNews);
  // Check if the news with the specified id is found
  if (!filteredNews) {
    return <div>No matching news found</div>;
  }

  const publishedDate = filteredNews.webPublicationDate || '';
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
              key={filteredNews.id}
              className={styles.content_wrapper}
            >
              <p className={styles.date}>
                <AiOutlineCalendar /> <HighlightedText title={formattedDate} />
              </p>
              <h2 className={styles.title}>{filteredNews.webTitle}</h2>
              <h4 className={styles.desc}>{filteredNews.sectionName}</h4>
              <div className={styles.media_wrapper}>
                {filteredNews.fields.thumbnail ? (
                  <div className={styles.img}>
                    <Image
                      src={filteredNews.fields.thumbnail}
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
                <HighlightedText title={`By: ${formattedDate}`} />
              </p>
              <hr className={styles.divider} />
              <p className={styles.content}>{filteredNews.bodyText}</p>
            </article>
          )}
        </div>
      </main>
    </div>
  );
};

export default Article;
