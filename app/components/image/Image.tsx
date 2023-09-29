import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './image.module.scss';

interface HeroImageProps {
  width: number;
  height: number;
  url: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ width, height, url }) => {
  return (
    <div className={clsx(styles.container)} style={{ width, height }}>
      <Image
        src={url}
        alt='Picture'
        fill
        style={{ objectFit: 'cover' }}
        unoptimized
        priority
      />
    </div>
  );
};

export default HeroImage;
