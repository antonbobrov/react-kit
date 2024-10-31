import { IBaseComponent } from '@types';
import { HTMLAttributes, ReactNode } from 'react';
import { TExpandContentRenderAnimation } from './utils/render';

type TExpandContentHTMLProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children' | 'onAnimationStart' | 'onAnimationEnd'
>;

type TExpandContentBaseProps = {
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
  isHiddenContentRendered?: boolean;
  /** Event on expanding animation start */
  onExpandStart?: () => void;
  /** Event on expanding animation render */
  onExpandRender?: TExpandContentRenderAnimation;
  /** Event on animation end */
  onExpandEnd?: (isActive: boolean) => void;
  /** Event on hidden content render */
  onHiddenContentRender?: () => void;
};

export interface IExpandContentProps
  extends IBaseComponent,
    TExpandContentBaseProps,
    TExpandContentHTMLProps {
  children?: ReactNode;
}
