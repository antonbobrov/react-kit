import React, { cloneElement, FC, KeyboardEvent, memo, useState } from 'react';
import { IModalAnchorProps } from './types';
import { BaseModal } from '../BaseModal';

const DefaultModal = memo(BaseModal);

export const ModalAnchor = <T,>({
  anchor,
  modal: ModalComponent = DefaultModal as any,
  children,
  modalProps,
}: IModalAnchorProps<T>) => {
  const Component = ModalComponent as FC<any>;

  const [isOpen, setIsOpen] = useState(false);

  const button = cloneElement(anchor, {
    onClick: (event: MouseEvent) => {
      setIsOpen(true);
      anchor.props.onClick?.(event);
    },
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
      if (event.keyCode === 13) {
        setIsOpen(true);
      }

      anchor.props.onKeyDown?.(event);
    },
    tabIndex: 0,
    role: 'button',
  });

  return (
    <>
      {button}

      <Component
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...modalProps}
      >
        {children}
      </Component>
    </>
  );
};
