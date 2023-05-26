import { RefObject } from 'react';
import { useDOMRect } from '@anton.bobrov/react-hooks';
import { IBasePopupProps } from '../types';
import { getAutoVerticalAlignment } from './getAutoVerticalAlignment';
import { getVerticalAlignmentStyles } from './getVerticalAlignmentStyles';
import { getAutoHorizontalAlignment } from './getAutoHorizontalAlignment';
import { getHorizontalAlignmentStyles } from './getHorizontalAlignmentStyles';

type TPopupPickedProps =
  | 'verticalAlignment'
  | 'horizontalAlignment'
  | 'gap'
  | 'viewportGap'
  | 'viewportRef';

interface IProps extends Pick<IBasePopupProps, TPopupPickedProps> {
  positionRef: RefObject<HTMLElement>;
  isDisabled: boolean;
}

export function usePosition({
  positionRef,
  isDisabled,
  verticalAlignment: verticalAlignmentProp,
  horizontalAlignment: horizontalAlignmentProp,
  gap = 0,
  viewportGap = 0,
  viewportRef,
}: IProps) {
  const domRect = useDOMRect({ ref: positionRef, isDisabled });

  const verticalAlignment =
    (!verticalAlignmentProp || verticalAlignmentProp === 'auto'
      ? getAutoVerticalAlignment(domRect)
      : verticalAlignmentProp) || 'down';

  const horizontalAlignment =
    (!horizontalAlignmentProp || horizontalAlignmentProp === 'auto'
      ? getAutoHorizontalAlignment(domRect)
      : horizontalAlignmentProp) || 'center';

  const verticalAlignmentStyles =
    verticalAlignment && domRect
      ? getVerticalAlignmentStyles({
          alignment: verticalAlignment,
          domRect,
          gap,
        })
      : undefined;

  const horizontalAlignmentStyles =
    horizontalAlignment && domRect
      ? getHorizontalAlignmentStyles({
          alignment: horizontalAlignment,
          domRect,
          gap,
          viewportGap,
          viewportRef,
        })
      : undefined;

  const transformY = verticalAlignmentStyles?.y ?? 0;
  const transformX = horizontalAlignmentStyles?.x ?? 0;

  return {
    verticalAlignment,
    horizontalAlignment,
    style: {
      transform: `translate(${transformX}, ${transformY})`,
      ...(verticalAlignmentStyles && {
        top: verticalAlignmentStyles.top,
        bottom: verticalAlignmentStyles.bottom,
      }),
      ...(horizontalAlignmentStyles && {
        left: horizontalAlignmentStyles.left,
        right: horizontalAlignmentStyles.right,
        maxWidth: horizontalAlignmentStyles.maxWidth,
      }),
    },
  };
}
