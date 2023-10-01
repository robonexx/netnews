import React, { FC } from 'react';

// styles
import styles from './headline.module.scss';

interface HeadlineProps {
    title: string;
  }

const Headline: FC<HeadlineProps> = ({title}) => {
  return (
    <div className={styles.headline}>
      <div className={styles.headline__title}>{title}</div>
    </div>
  );
};

export default Headline;
