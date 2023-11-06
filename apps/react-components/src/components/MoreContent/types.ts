import { IBaseComponent } from '@types';
import { ReactElement, ReactNode } from 'react';

export interface IMoreContentProps extends IBaseComponent {
  children: ReactNode;
  /** Custom button renderer */
  renderButton?: TMoreContentButtonRenderer;
  /**
   * Animation duration
   * @default 500
   */
  duration?: number;
  /**
   * Minimum height of the content
   * @default 120
   */
  minHeight?: number;
}

export interface IMoreContentButtonProps {
  /** The content is fully shown */
  isActive: boolean;
  /** Show/hide content */
  toggle: () => void;
}

export type TMoreContentButtonRenderer = (
  props: IMoreContentButtonProps,
) => ReactElement | null;
