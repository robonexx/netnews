'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
//styles
import styles from './article.module.scss';
import { AiOutlineCalendar } from 'react-icons/ai';
import { dummyNews } from '../assets/DummyData';
import { convertDate } from '../utils/convertDate';

function Article() {
  let id = usePathname();
  id = id.replace('/', '');
  console.log('path id', id);
  console.log('source id', dummyNews[0].source.id);
  return (
    <div className={styles.container}>
      <Head>
        <title>News Net | Article</title>
      </Head>

      <main>
        <article className={styles.wrapper}>
          {dummyNews.map((news: any) => {
            if (id == news.source.id) {
              return (
                <>
                  <article className={styles.content_wrapper}>
                    <p className={styles.date}>
                      {AiOutlineCalendar} {convertDate(news.publishedAt)}
                    </p>
                    <h2>{news.title}</h2>
                    <h4>{news.description}</h4>
                    <hr className={styles.divider} />
                    <div className={styles.content} />
                    {news.content}
                  </article>

                  <article className={styles.media_wrapper}>
                    {news.urlToImage ? (
                      <Image
                        src={news.urlToImage}
                        alt='Article media'
                        width={500}
                        height={300}
                      />
                    ) : (
                      <div className={styles.overlay}>
                        <div className={styles.logo}></div>
                      </div>
                    )}

                    <p className={styles.figcaption}>By:{news.author}</p>
                  </article>
                </>
              );
            }
          })}
        </article>
      </main>
    </div>
  );
}
export default Article;
