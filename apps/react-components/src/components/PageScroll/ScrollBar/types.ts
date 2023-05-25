import { ReactNode } from 'react';

export interface IPageScrollSCrollBarProps {
  children: ReactNode;
  /** Do not use scrollbar */
  isDisabled?: boolean;
  /** Change the key to update the scrollbar */
  resizeKey?: string | number;
}
