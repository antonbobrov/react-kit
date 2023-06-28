import { IBaseComponent, TKey } from '@types';

export type TFadeContent = {
  key: TKey;
  children: React.ReactNode;
};

export interface IFadeContentProps extends IBaseComponent {
  /** Active content key */
  activeKey: TKey;
  /** Content items */
  content: TFadeContent[];
  /**
   * Animation duration
   * @default 600
   */
  duration?: number;
  /**
   * Set focus on parent when active element is changed
   * @default true
   */
  hasFocus?: boolean;
}
