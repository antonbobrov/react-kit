import { IBaseComponent } from '@types';
import React from 'react';

export type TLinkClickInterceptorHandler = (
  event: React.MouseEvent<HTMLElement, MouseEvent>,
  anchor: HTMLAnchorElement,
) => void;

export interface ILinkClickInterceptorProps extends IBaseComponent {
  /** Event on internal link click */
  onInternalClick?: TLinkClickInterceptorHandler;
  /** Event on external link click */
  onExternalClick?: TLinkClickInterceptorHandler;
  /** Element ID */
  id?: string;
}
