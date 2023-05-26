import { isNumber } from '@anton.bobrov/react-hooks';
import { IBasePopupProps, TBasePopupHorizontalAlignment } from '../types';

type TPopupPickedProps = 'gap' | 'viewportGap';

interface IProps extends Required<Pick<IBasePopupProps, TPopupPickedProps>> {
  alignment: Exclude<TBasePopupHorizontalAlignment, 'auto'>;
  domRect: DOMRect;
  viewportRef?: IBasePopupProps['viewportRef'];
}

interface IAlignment {
  left: string;
  right: string;
  x: string;
  maxWidth: string;
}

export function getHorizontalAlignmentStyles({
  alignment,
  domRect,
  gap: gapProp,
  viewportGap: viewportGapProp,
  viewportRef,
}: IProps): IAlignment | undefined {
  if (!domRect) {
    return undefined;
  }

  const gap = isNumber(gapProp) ? gapProp : gapProp();

  const viewportGap = isNumber(viewportGapProp)
    ? viewportGapProp
    : viewportGapProp();

  const viewportWidth = document.documentElement.clientWidth;
  const viewportElement = viewportRef?.current as Element;

  const viewportRect = viewportElement
    ? viewportElement.getBoundingClientRect()
    : {
        left: 0,
        width: viewportWidth,
        right: viewportWidth,
      };

  if (alignment === 'start') {
    const { left } = domRect;
    const maxWidth = viewportRect.right - left - viewportGap;

    return {
      left: `${left}px`,
      right: 'auto',
      x: '0',
      maxWidth: `${maxWidth}px`,
    };
  }

  if (alignment === 'center') {
    const maxWidth =
      Math.min(
        domRect.left + domRect.width / 2 - viewportRect.left,
        viewportRect.right - (domRect.left + domRect.width / 2)
      ) *
        2 -
      viewportGap * 2;

    return {
      left: `${domRect.left + domRect.width / 2}px`,
      right: 'auto',
      x: '-50%',
      maxWidth: `${maxWidth}px`,
    };
  }

  if (alignment === 'end') {
    const right = viewportWidth - domRect.right;
    const maxWidth = domRect.right - viewportRect.left - viewportGap;

    return {
      left: 'auto',
      right: `${right}px`,
      x: '0',
      maxWidth: `${maxWidth}px`,
    };
  }

  if (alignment === 'left') {
    const right = viewportWidth - domRect.left + gap;
    const maxWidth = domRect.left - viewportRect.left - gap - viewportGap;

    return {
      left: 'auto',
      right: `${right}px`,
      x: '0',
      maxWidth: `${maxWidth}px`,
    };
  }

  if (alignment === 'right') {
    const left = domRect.right + gap;
    const maxWidth = viewportRect.right - domRect.right - gap - viewportGap;

    return {
      left: `${left}px`,
      right: 'auto',
      x: '0',
      maxWidth: `${maxWidth}px`,
    };
  }

  return undefined;
}
