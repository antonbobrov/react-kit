import React, { FC, useState } from 'react';
import cn from 'classnames';
import { CloseButton as DefaultCloseButton } from './CloseButton';
import { IBaseVideoModalProps } from './types';
import { BaseModal } from '../BaseModal';
import { useWrapperSize } from './utils';
import { VideoPlayer } from '../VideoPlayer';
import { prefixedClasNames } from '../../utils/prefixedClassNames';

/**
 * BaseVideoModal component for displaying videos in a modal dialog.
 *
 * This component combines the functionality of a modal with a video player,
 * providing a seamless way to present video content in a focused overlay.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/modals-basevideomodal--docs
 */
export const BaseVideoModal: FC<IBaseVideoModalProps> = ({
  className,
  player,
  wrapperProps,
  renderCloseButton: CloseButton = DefaultCloseButton,
  getWrapperSize,
  ...modalProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const wrapperSize = useWrapperSize(getWrapperSize);

  return (
    <BaseModal
      {...modalProps}
      className={cn(className, prefixedClasNames('base-video-modal'))}
      wrapperProps={{
        ...wrapperProps,
        className: cn(
          wrapperProps?.className,
          prefixedClasNames('base-video-modal__wrapper'),
        ),
        style: {
          ...wrapperProps?.style,
          ...wrapperSize,
        },
      }}
      renderCloseButton={CloseButton}
    >
      <div
        className={prefixedClasNames(
          'base-video-modal__container',
          isLoaded && 'base-video-modal__container_loaded',
        )}
      >
        <VideoPlayer {...player} onLoad={() => setIsLoaded(true)} />
      </div>
    </BaseModal>
  );
};
