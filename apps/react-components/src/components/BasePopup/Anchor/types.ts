import { ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react';

export interface IBasePopupAnchorRendererProps {
  /** Activate popup */
  activate: () => void;
  /** Deactivate popup */
  deactivate: () => void;
  /** Popup is active */
  isActive: boolean;
  /**
   * Anchor event to show the popup
   * @default 'click'
   */
  showEvent?: 'hover' | 'click';
  /** Popup anchor */
  anchor: ReactElement | null;
}

export type TBasePopupAnchorRenderer = ForwardRefExoticComponent<
  IBasePopupAnchorRendererProps & RefAttributes<any>
>;
