import Link from 'next/link';
import styles from './smallArticleCard.module.scss';
import Image from 'next/image';
import IMG from '@/public/images/01.jpg';
import { HighlightedText } from '../highlightedText/HighlightedText';
import { guardianNewsType } from '@/lib/types/Types';

const SmallArticleCard: React.FC<guardianNewsType> = ({
  id,
  webTitle,
  fields,
  webUrl,
}) => {
  return (
    <div className={styles.wrapper}>
      {/*  <Link
        className={styles.external_link}
        href={webUrl}
        target='_blank'
        rel='noopener noreferrer'
      >
        <HighlightedText title='Read Original Article' />
      </Link> */}
      <div className={styles.info}>
        <h4 className={styles.title}>{webTitle}</h4>
      </div>
      <div className={styles.border}></div>
     {/*  <Link href={`/${id}`}>Read Arcticle</Link> */}
      <div className={styles.img}>
        <Image
          alt='news image'
          src={fields.thumbnail ? fields.thumbnail : IMG}
          fill
          priority
          className={styles.img}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default SmallArticleCard;
