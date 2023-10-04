import Link from 'next/link';
import Image from 'next/image';
import styles from './articleCard.module.scss';
import IMG from '@/public/images/01.jpg';
import { guardianNewsType } from '@/lib/types/Types';
import { HighlightedText } from '../highlightedText/HighlightedText';

const ArticleCard = ({
  id,
  webTitle,
  fields,
  sectionName,
  tags
}: guardianNewsType) => {
  return (
    <div className={styles.cardWrapper}>
      <Link key={id} href={`/${id}`} rel='preload' as={`/${id}`}></Link>
      <div className={styles.img}>
        <Image
          alt='news image'
          src={fields?.thumbnail || IMG}
          fill
          priority
          className={styles.img}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.sec}>{sectionName}</p>
        <h4 className={styles.title}>{webTitle}</h4>
        <p className={styles.text}>{fields.trailText}</p>
      </div>
     {/*  <p>{`${tags?.[0].firstName}`}</p> */}
    </div>
  );
};

export default ArticleCard;
