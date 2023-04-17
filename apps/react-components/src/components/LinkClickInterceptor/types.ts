import { IBaseComponent } from '@types';
import React from 'react';

export type TLinkClickInterceptorHandler = (
  event: React.MouseEvent<HTMLElement, MouseEvent>,
  anchor: HTMLAnchorElement
) => void;

export interface ILinkClickInterceptorProps extends IBaseComponent {
  onInternalClick?: TLinkClickInterceptorHandler;
  onExternalClick?: TLinkClickInterceptorHandler;
}
