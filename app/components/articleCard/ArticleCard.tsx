import React, { ReactNode } from 'react';
import Image from 'next/image';
import styles from './articleCard.module.scss';
import IMG from '@/public/images/01.jpg';
import { newsType } from '@/app/types/Types';


const ArticleCard = ({ title, description, urlToImage }: newsType) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.img}>
        <Image
          alt='news image'
          src={urlToImage}
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
    </div>
  );
};

export default ArticleCard;
