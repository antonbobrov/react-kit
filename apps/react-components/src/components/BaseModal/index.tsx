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

/** Base Modal */
export const BaseModal: FC<IBaseModalProps> = ({
  className,
  style,
  isOpen,
  children,
  onOpen,
  onClose,
  isUnderneathScrollingDisabled = true,
  isRestoreFocusOnClose = true,
  renderCloseButton: CloseButton = DefaultCloseButton,
  renderAnimation: renderAnimationProp = renderModalAnimation,
  duration = 350,
  wrapperProps,
  scrollAreaProps,
  overlayProps,
}) => {
  const [canRender, setCanRender] = useState(false);

  const onOpenEvent = useEvent(onOpen);

  const parentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const renderAnimation = useEvent(renderAnimationProp);

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
    { ref: parentRef, isDisabled: !isOpen }
  );

  useOutsideClick(wrapperRef, () => {
    if (isOpen) {
      onClose?.();
    }
  });

  usePreventDocumentScrolling(isUnderneathScrollingDisabled && isOpen);

  useFocusTrap(parentRef, {
    isDisabled: !isOpen,
    isRestoreFocus: isRestoreFocusOnClose,
  });

  const timeline = useTimeline({
    duration,
    onProgress({ progress, easing }) {
      renderAnimation({
        parent: parentRef.current,
        overlay: overlayRef.current,
        scroll: scrollRef.current,
        progress,
        easing,
      });

      if (progress === 0 && timeline?.timeline?.isReversed) {
        setCanRender(false);
      }
    },
  });

  // animate the modal
  useEffect(() => {
    if (isOpen) {
      setCanRender(true);
      timeline?.play();
    } else {
      timeline?.reverse();
    }
  }, [isOpen, timeline]);

  return canRender ? (
    <Portal>
      <div
        ref={parentRef}
        className={cn(className, prefixedClasNames('base-modal'))}
        style={style}
        role="dialog"
        aria-modal
      >
        <div
          ref={overlayRef}
          {...overlayProps}
          className={cn(
            overlayProps?.className,
            prefixedClasNames('base-modal__overlay')
          )}
        />

        <div
          ref={scrollRef}
          {...scrollAreaProps}
          className={cn(
            scrollAreaProps?.className,
            prefixedClasNames('base-modal__scroll-area')
          )}
        >
          <div
            ref={wrapperRef}
            {...wrapperProps}
            className={cn(
              wrapperProps?.className,
              prefixedClasNames('base-modal__wrapper')
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
