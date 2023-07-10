import { IBaseComponent } from '@types';
import { ReactElement, ReactNode } from 'react';

export interface IModalCloseButtonProps {
  onClick?: () => void;
}

export type TModalCloseButtonRenderer = (
  props: IModalCloseButtonProps
) => ReactElement | null;

export interface IModalRenderAnimationProps {
  /** Current animation progress (0-1) */
  progress: number;
  /** Current animation progress (0-1) with easing function */
  easing: number;
  /** Root modal element */
  parent: HTMLElement | null;
  /** Modal overlay element */
  overlay: HTMLElement | null;
  /** Modal scrolling element */
  scroll: HTMLElement | null;
}

export type TModalRenderAnimation = (data: IModalRenderAnimationProps) => void;

export interface IBaseModalProps extends IBaseComponent {
  /** The modal is opened */
  isOpen: boolean;
  children: ReactNode;
  /** Parent element of the modal */
  parentNode?: Element | null;
  /** Event on modal open */
  onOpen?: () => void;
  /** Event on modal close */
  onClose?: () => void;
  /**
   * Disable scrolling beneath the modal
   * @default true
   */
  isUnderneathScrollingDisabled?: boolean;
  /**
   * Restore focus on close
   * @default true
   */
  isRestoreFocusOnClose?: boolean;
  /** Close Button custom renderer */
  renderCloseButton?: TModalCloseButtonRenderer;
  /** Custom animation renderer */
  renderAnimation?: TModalRenderAnimation;
  /**
   * Animation duration
   * @default 350
   */
  duration?: number;
  /** Wrapper element properties */
  wrapperProps?: IBaseComponent;
  /** ScrollArea element properties */
  scrollAreaProps?: IBaseComponent;
  /** Overlay element properties */
  overlayProps?: IBaseComponent;
}
