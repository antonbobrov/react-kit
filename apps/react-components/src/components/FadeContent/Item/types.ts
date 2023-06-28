import { ReactNode } from 'react';

export interface IProps {
  className?: string;
  children: ReactNode;
  /** Animation duration */
  duration: number;
  /** Content state */
  state: 'active' | 'unactive' | 'hide' | 'show';
  /** Callback when content is to be shown */
  onShow: () => void;
  /** Callback when content is being shown */
  onShowProgress: (element: HTMLDivElement, progress: number) => void;
  /** Callback when content is fully shown */
  onShown: () => void;
  /** Callback when content is to be hidden */
  onHide: () => void;
  /** Callback when content is fully hidden */
  onHidden: () => void;
}
