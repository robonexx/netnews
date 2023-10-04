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
  webPublicationDate,
}) => {
  return (
    <div className={styles.wrapper}>
      <Link key={id} href={`/${id}`} rel='preload' as={`/${id}`}></Link>
      <p className={styles.date}>
        {webPublicationDate ? convertDate(webPublicationDate) : ''}
      </p>
      <div className={styles.info}>
        <h4 className={styles.title}>{webTitle}</h4>
        <p className={styles.text}>{fields.trailText}</p>
      </div>
      <div className={styles.border}></div>
      <div className={styles.img}>
        <Image
          alt='news image'
          src={fields?.thumbnail || IMG}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default SmallArticleCard;
