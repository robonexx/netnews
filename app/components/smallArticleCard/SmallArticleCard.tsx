import React from 'react';
import styles from './TinyCard.module.scss';

interface SmallArticleCardProps {
  title: string;
  desc?: string;
}

const SmallArticleCard: React.FC<SmallArticleCardProps> = ({ title, desc }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
              <h3>{title}</h3>
              <p>{desc}</p>
      </div>
      <div
        className={styles.baseline}
          >
             
      </div>
    </div>
  );
};

export default SmallArticleCard;
