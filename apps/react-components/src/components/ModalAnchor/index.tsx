import React, { cloneElement, FC, KeyboardEvent, memo, useState } from 'react';
import { IModalAnchorProps } from './types';
import { BaseModal } from '../BaseModal';

const DefaultModal = memo(BaseModal);

/**
 * This component provides a convenient way to display modal dialogs when
 * users interact with anchor tags.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/modals-modalanchor--docs
 */
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
    tabIndex: anchor.props.tabIndex ?? 0,
    role: anchor.props.role ?? 'button',
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
