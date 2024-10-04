import { NScrollBar } from 'vevet';
import { ReactNode } from 'react';

type TPickedProps = Pick<
  NScrollBar.IStaticProps,
  | 'isDraggable'
  | 'shouldAutoSize'
  | 'canAutoHide'
  | 'minSize'
  | 'scrollBehavior'
>;

export interface IPageScrollSCrollBarProps extends TPickedProps {
  children?: ReactNode;
  /** Do not use scrollbar */
  isDisabled?: boolean;
  /** Change the key to update the scrollbar */
  resizeKey?: string | number;
}
