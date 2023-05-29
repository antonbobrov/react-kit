import { IBaseComponent } from '@types';
import { ReactNode, RefObject } from 'react';
import {
  IBasePopupAnchorRendererProps,
  TBasePopupAnchorRenderer,
} from './Anchor/types';

export type TBasePopupVerticalAlignment = 'auto' | 'up' | 'down' | 'center';

export type TBasePopupHorizontalAlignment =
  | 'auto'
  | 'start'
  | 'end'
  | 'center'
  | 'left'
  | 'right';

export interface IBasePopupProps
  extends IBaseComponent,
    Pick<IBasePopupAnchorRendererProps, 'anchor' | 'showEvent'> {
  children: ReactNode;
  /** Custom anchor renderer */
  renderAnchor?: TBasePopupAnchorRenderer;
  /** The element relative to which the popup will be positioned */
  positionRef?: RefObject<HTMLElement>;
  /** Popup is visible */
  isActive?: boolean;
  /** Callback on "isActive" state change */
  onActive?: (isActive: boolean) => void;
  /** Vertical alignment */
  verticalAlignment?: TBasePopupVerticalAlignment;
  /** Horizontal alignment */
  horizontalAlignment?: TBasePopupHorizontalAlignment;
  /** Gap between anchor and popup */
  gap?: number | (() => number);
  /** Gap between popup and viewport */
  viewportGap?: number | (() => number);
  /** Viewport ref which bounds popup */
  viewportRef?: RefObject<HTMLElement>;
  /** The popup is disabled */
  isDisabled?: boolean;
  /**
   * Close popup on outside click
   * @default true
   */
  hasOutsideClick?: boolean;
  /** Popup lifetime */
  lifetime?: number;
}
