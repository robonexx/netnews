import React, { FC } from 'react';
import styles from './highlightedText.module.scss';

type TextProps = {
  title: string;
};

export const HighlightedText: FC<TextProps> = ({ title }: TextProps) => {
  return <div className={styles.highlighted}>{title}</div>;
};
