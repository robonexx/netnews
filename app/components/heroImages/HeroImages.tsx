import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';

import styles from './heroImages.module.scss';
import HeroImage from '../image/Image';

interface Position {
  y: number;
  end: number;
  start: number;
}

const renderSet = () => {
  return (
    <>
      <HeroImage url='/images/01.jpg' width={368} height={480} />
      <HeroImage url='/images/02.jpg' width={353} height={353} />
      <HeroImage url='/images/03.jpg' width={368} height={368} />
      <HeroImage url='/images/04.jpg' width={260} height={550} />
      <HeroImage url='/images/05.jpg' width={353} height={353} />
    </>
  );
};

const HeroImages: React.FC = () => {
  const set1Controls = useAnimation();
  const set2Controls = useAnimation();
  const set1Ref = useRef<HTMLDivElement>(null);
  const set2Ref = useRef<HTMLDivElement>(null);
  const positions = useRef<{ pos1: Position; pos2: Position }>({
    pos1: { y: 0, end: 0, start: 0 },
    pos2: { y: 0, end: 0, start: 0 },
  });

  useEffect(() => {
    positions.current = {
      pos1: {
        y: -140,
        end: set1Ref.current?.offsetHeight
          ? set1Ref.current.offsetHeight * -1
          : 0,
        start: set1Ref.current?.offsetHeight || 0,
      },
      pos2: {
        y: -140,
        end: set1Ref.current?.offsetHeight
          ? set1Ref.current.offsetHeight * -2
          : 0,
        start: 0,
      },
    };

    updatePositions();
  }, []);

  const updatePositions = () => {
    const { pos1, pos2 } = positions.current;

    set1Controls.set({ y: pos1.y });
    set2Controls.set({ y: pos2.y });

    if (pos1.y <= pos1.end) {
      pos1.y = pos1.start;
    }

    if (pos2.y <= pos2.end) {
      pos2.y = pos2.start;
    }
  };

  const renderAnimation = () => {
    updatePositions();

    // setting the speed of the images here
    const { pos1, pos2 } = positions.current;
    pos1.y -= 0.15;
    pos2.y -= 0.15;

    requestAnimationFrame(renderAnimation);
  };

  useEffect(() => {
    renderAnimation();
  }, []);

  return (
    <div className={clsx(styles.container)}>
      <motion.div ref={set1Ref} className={styles.set} animate={set1Controls}>
        {renderSet()}
      </motion.div>
      <motion.div ref={set2Ref} className={styles.set} animate={set2Controls}>
        {renderSet()}
      </motion.div>
    </div>
  );
};

export default HeroImages;
