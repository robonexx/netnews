import React, { FC } from 'react';import { Orbitron } from 'next/font/google';


const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
});

// styles
import styles from './headline.module.scss';

interface HeadlineProps {
    title: string;
  }

const Headline: FC<HeadlineProps> = ({title}) => {
  return (
    <div className={`${styles.headline} ${orbitron.className}`}>
      <div className={styles.headline__title}>{title}</div>
    </div>
  );
};

export default Headline;
