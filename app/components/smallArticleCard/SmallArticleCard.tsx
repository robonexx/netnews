import React from 'react';
import Link from 'next/link';
import styles from './smallArticleCard.module.scss';

interface SmallArticleCardProps {
  title: string;
  source: {
    id: string | null;
    name: string;
  };
}

const SmallArticleCard: React.FC<SmallArticleCardProps> = ({
  title,
  source,
}) => {
  const id = source.id;
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h4>{title}</h4>
      </div>
      <div className={styles.border}></div>
      <Link href={`/${id}`}>Read Arcticle</Link>
    </div>
  );
};

export default SmallArticleCard;
