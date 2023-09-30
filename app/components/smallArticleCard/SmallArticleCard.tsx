import React from 'react';
import styles from './smallArticleCard.module.scss';

interface SmallArticleCardProps {
  title: string;
}

const SmallArticleCard: React.FC<SmallArticleCardProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h4>{title}</h4>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default SmallArticleCard;
