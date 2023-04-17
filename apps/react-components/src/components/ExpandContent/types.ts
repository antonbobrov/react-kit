import { IBaseComponent } from '@types';
import { ReactNode } from 'react';

export interface IExpandContentProps extends IBaseComponent {
  /**
   * If active, the content will be shown
   * @default false
   */
  isActive?: boolean;
  /**
   * Animation duration (ms)
   * @default 500
   */
  duration?: number;
  /**
   * Animate content with opacity
   * @default true
   */
  hasAlpha?: boolean;
  /** Event on animation end */
  onAnimationEnd?: (isActive: boolean) => void;
  children?: ReactNode;
}
