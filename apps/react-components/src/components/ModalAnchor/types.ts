import { ReactNode } from 'react';

export interface IModalAnchorProps<T = unknown> {
  /** Anchor element */
  anchor: JSX.Element;
  /** Modal to render */
  modal?: T;
  children?: ReactNode;
  /** Modal properties */
  modalProps?: T extends (...args: any) => any
    ? Omit<Parameters<T>[0], 'isOpen' | 'onClose' | 'children'>
    : {};
}
