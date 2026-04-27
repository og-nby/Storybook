import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ className, ...props }: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');
  return <div className={classes} {...props} />;
}

