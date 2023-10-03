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
  webUrl,
  sectionName,
}: guardianNewsType) => {
  return (
    <div className={styles.cardWrapper}>
      <Link key={id} href={`/${id}`}></Link>
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
      <div className={styles.info}>
        <p>{sectionName}</p>
        <h4>{webTitle}</h4>
        <p>{fields.trailText}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
