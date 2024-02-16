import { IBaseComponent } from '@types';
import { ReactNode } from 'react';
import { TExpandContentRenderAnimation } from './utils/render';

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
  /**
   * Should render hidden content
   * @default true
   */
  isContentRendered?: boolean;
  /** Event on animation end */
  onAnimationRender?: TExpandContentRenderAnimation;
  /** Event on animation end */
  onAnimationEnd?: (isActive: boolean) => void;
  children?: ReactNode;
}
