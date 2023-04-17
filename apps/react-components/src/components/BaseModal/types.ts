import { IBaseComponent } from '@types';
import { ReactElement, ReactNode } from 'react';

export interface IModalCloseButtonProps {
  onClick?: () => void;
}

export type TModalCloseButtonRenderer = (
  props: IModalCloseButtonProps
) => ReactElement | null;

export interface IModalRenderAnimationProps {
  progress: number;
  easing: number;
  parent: HTMLElement | null;
  overlay: HTMLElement | null;
  scroll: HTMLElement | null;
}

export type TModalRenderAnimation = (data: IModalRenderAnimationProps) => void;

export interface IBaseModalProps extends IBaseComponent {
  isOpen: boolean;
  children: ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  /**
   * @default true
   */
  isUnderneathScrollingDisabled?: boolean;
  renderCloseButton?: TModalCloseButtonRenderer;
  renderAnimation?: TModalRenderAnimation;
  /** @default 350 */
  duration?: number;
  wrapperProps?: IBaseComponent;
  scrollAreaProps?: IBaseComponent;
  overlayProps?: IBaseComponent;
}
