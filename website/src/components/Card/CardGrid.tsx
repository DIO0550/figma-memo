import type { ReactNode } from 'react';
import clsx from 'clsx';
import { CardGridProps } from './types';
import styles from './CardGrid.module.css';

export default function CardGrid({
  children,
  columns = 3,
  className,
  gap = 'medium',
}: CardGridProps): ReactNode {
  return (
    <div
      className={clsx(
        styles.cardGrid,
        styles[`cardGrid--${columns}cols`],
        styles[`cardGrid--gap-${gap}`],
        className
      )}
    >
      {children}
    </div>
  );
}
