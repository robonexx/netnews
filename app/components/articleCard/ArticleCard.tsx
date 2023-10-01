'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './articleCard.module.scss';
import IMG from '@/public/images/01.jpg';
import { newsType } from '@/app/types/Types';

const ArticleCard = ({ title, description, urlToImage, source }: newsType) => {
  const [show, setShow] = useState=(false)
  const id = source.id;

  const showNews = () => {
    setShow(!show)
  }
  return (
    <div className={styles.cardWrapper}>
      <button className={styles.show_btn}>Show news</button>
      <div className={styles.img}>
        <Image
          alt='news image'
          src={urlToImage ? urlToImage : IMG}
          fill
          priority
          className={styles.img}
          unoptimized={true}
        />
      </div>
      <div className={styles.info}>
        <p>written by</p>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <Link href={`/${id}`}>Read Arcticle</Link>
    </div>
  );
};

export default ArticleCard;
