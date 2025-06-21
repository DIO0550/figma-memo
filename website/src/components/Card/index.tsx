import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { CardProps } from './types';
import styles from './styles.module.css';

export default function Card({
  title,
  description,
  image,
  imageAlt,
  link,
  icon,
  className,
  size = 'medium',
  orientation = 'vertical',
  clickable = !!link,
  external = false,
}: CardProps): ReactNode {
  const cardContent = (
    <div
      className={clsx(
        styles.card,
        styles[`card--${size}`],
        styles[`card--${orientation}`],
        {
          [styles.cardClickable]: clickable,
        },
        className
      )}
    >
      {/* 画像セクション */}
      {image && (
        <div className={styles.cardImageContainer}>
          <img
            src={image}
            alt={imageAlt || title}
            className={styles.cardImage}
          />
        </div>
      )}

      {/* アイコンセクション */}
      {icon && !image && <div className={styles.cardIconContainer}>{icon}</div>}

      {/* コンテンツセクション */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && (
          <div className={styles.cardDescription}>{description}</div>
        )}
      </div>

      {/* 外部リンクの場合のアイコン */}
      {link && external && (
        <div className={styles.cardExternalIcon}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
          </svg>
        </div>
      )}
    </div>
  );

  // リンクがある場合はLinkコンポーネントでラップ
  if (link) {
    if (external) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          {cardContent}
        </a>
      );
    } else {
      return (
        <Link to={link} className={styles.cardLink}>
          {cardContent}
        </Link>
      );
    }
  }

  return cardContent;
}
