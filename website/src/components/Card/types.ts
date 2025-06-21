import type { ReactNode } from 'react';

export interface CardProps {
  /** カードのタイトル */
  title: string;
  /** カードの説明文 */
  description?: ReactNode;
  /** カード画像のURL */
  image?: string;
  /** 画像のalt属性 */
  imageAlt?: string;
  /** リンク先URL */
  link?: string;
  /** アイコンコンポーネント */
  icon?: ReactNode;
  /** 追加のCSSクラス */
  className?: string;
  /** カードサイズ */
  size?: 'small' | 'medium' | 'large';
  /** カードの向き */
  orientation?: 'vertical' | 'horizontal';
  /** クリック可能かどうか */
  clickable?: boolean;
  /** 外部リンクかどうか */
  external?: boolean;
}

export interface CardGridProps {
  /** 子要素（Cardコンポーネント） */
  children: ReactNode;
  /** グリッドのカラム数 */
  columns?: 1 | 2 | 3 | 4;
  /** 追加のCSSクラス */
  className?: string;
  /** カード間のギャップサイズ */
  gap?: 'small' | 'medium' | 'large';
}
