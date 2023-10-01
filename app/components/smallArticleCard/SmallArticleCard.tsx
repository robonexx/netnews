import Link from 'next/link';
import styles from './smallArticleCard.module.scss';
import Image from 'next/image';
import IMG from '@/public/images/01.jpg';
import { HighlightedText } from '../highlightedText/HighlightedText';

interface SmallArticleCardProps {
  title: string;
  source: {
    id: string | null;
    name: string;
  };
  urlToImage?: string;
  url: string;
}

const SmallArticleCard: React.FC<SmallArticleCardProps> = ({
  title,
  source,
  urlToImage,
  url,
}) => {
  const id = source.id;

  return (
    <div className={styles.wrapper}>
      <Link
        className={styles.external_link}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <HighlightedText title='Read Original Article' />
      </Link>
      <div className={styles.info}>
        <h4>{title}</h4>
      </div>
      <div className={styles.border}></div>
      <Link href={`/${id}`}>Read Arcticle</Link>
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
    </div>
  );
};

export default SmallArticleCard;
