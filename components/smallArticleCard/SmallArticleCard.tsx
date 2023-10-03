import Link from 'next/link';
import styles from './smallArticleCard.module.scss';
import Image from 'next/image';
import IMG from '@/public/images/01.jpg';
import { HighlightedText } from '../highlightedText/HighlightedText';
import { guardianNewsType } from '@/lib/types/Types';
import { convertDate } from '@/lib/utils/convertDate';

const SmallArticleCard: React.FC<guardianNewsType> = ({
  id,
  webTitle,
  fields,
  webPublicationDate
}) => {
  return (
    <div className={styles.wrapper}>
      <Link key={id} href={`/${id}`}></Link>
      <p>{webPublicationDate ? convertDate
      (webPublicationDate) : ''}</p>
      <div className={styles.info}>
        <h4 className={styles.title}>{webTitle}</h4>
        <p>{fields.trailText}</p>
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
