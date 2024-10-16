import React, { FC, useEffect, useRef, useState } from 'react';
import {
  useEvent,
  useFocusTrap,
  useOnEscape,
  useOutsideClick,
  usePreventDocumentScrolling,
} from '@anton.bobrov/react-hooks';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { Portal } from 'react-portal';
import cn from 'classnames';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { IBaseModalProps } from './types';
import { CloseButton as DefaultCloseButton } from './CloseButton';
import { renderModalAnimation } from './utils';

/**
 * BaseModal component for creating customizable modal dialogs.
 * This component provides a flexible and accessible way to display modal content.
 * The BaseModal component ensures a seamless user experience by managing focus, keyboard navigation, and close actions.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/modals-basemodal--docs
 *
 * @requires Requires styles: `@import '~@anton.bobrov/react-components/lib/styles/components/BaseModal';`
 */
export const BaseModal: FC<IBaseModalProps> = ({
  className,
  style,
  isOpen,
  children,
  parentNode,
  onOpen,
  onClose,
  onHidden: onHiddenProp,
  isUnderneathScrollingDisabled = false,
  isRestoreFocusOnClose = true,
  isCloseOnOutsideClick = true,
  isUnmountOnClose = true,
  renderCloseButton: CloseButton = DefaultCloseButton,
  renderAnimation: renderAnimationProp = renderModalAnimation,
  duration = 350,
  wrapperProps,
  scrollAreaProps,
  overlayProps,
}) => {
  const [canRender, setCanRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onOpenEvent = useEvent(onOpen);

  const parentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const renderAnimation = useEvent(renderAnimationProp);
  const onHidden = useEvent(onHiddenProp);

  useEffect(() => {
    if (isOpen) {
      onOpenEvent?.();
    }
  }, [isOpen, onOpenEvent]);

  useOnEscape(
    () => {
      if (isOpen) {
        onClose?.();
      }
    },
    { ref: parentRef, isDisabled: !isVisible },
  );

  useOutsideClick(
    wrapperRef,
    () => {
      if (isOpen) {
        onClose?.();
      }
    },
    { isDisabled: !isCloseOnOutsideClick },
  );

  usePreventDocumentScrolling(isUnderneathScrollingDisabled && isOpen);

  useFocusTrap(parentRef, {
    isDisabled: !isOpen,
    isRestoreFocus: isRestoreFocusOnClose,
  });

  const timeline = useTimeline({
    duration,
    onProgress({ p, e }) {
      renderAnimation({
        parent: parentRef.current,
        overlay: overlayRef.current,
        scroll: scrollRef.current,
        p,
        e,
      });

      if (p === 0 && timeline?.timeline?.isReversed) {
        if (isUnmountOnClose) {
          setCanRender(false);
        }

        setIsVisible(false);

        onHidden?.();
      }
    },
  });

  // animate the modal
  useEffect(() => {
    if (isOpen) {
      setCanRender(true);
      setIsVisible(true);

      timeline?.play();
    } else {
      timeline?.reverse();
    }
  }, [isOpen, timeline]);

  return canRender ? (
    <Portal node={parentNode}>
      <div
        ref={parentRef}
        className={cn(
          className,
          prefixedClasNames('base-modal', !isVisible && 'invisible'),
        )}
        style={style}
        role="dialog"
        aria-modal
        aria-hidden={!isVisible}
      >
        <div
          ref={overlayRef}
          {...overlayProps}
          className={cn(
            overlayProps?.className,
            prefixedClasNames('base-modal__overlay'),
          )}
        />

        <div
          ref={scrollRef}
          {...scrollAreaProps}
          className={cn(
            scrollAreaProps?.className,
            prefixedClasNames('base-modal__scroll-area'),
          )}
        >
          <div
            ref={wrapperRef}
            {...wrapperProps}
            className={cn(
              wrapperProps?.className,
              prefixedClasNames('base-modal__wrapper'),
            )}
          >
            {children}

            <CloseButton onClick={onClose} />
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
};
