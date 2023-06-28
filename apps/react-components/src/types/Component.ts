import { CSSProperties } from 'react';

export interface IBaseComponent {
  className?: string;
  style?: CSSProperties;
}

export type TKey = string | number;
