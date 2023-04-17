import { ReactNode } from 'react';

export interface IModalAnchorProps<T = unknown> {
  anchor: JSX.Element;
  modal?: T;
  children?: ReactNode;
  modalProps?: T extends (...args: any) => any
    ? Omit<Parameters<T>[0], 'isOpen' | 'onClose' | 'children'>
    : {};
}
