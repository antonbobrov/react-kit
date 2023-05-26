import { vevet } from '@anton.bobrov/vevet-init';
import { isNumber } from '@anton.bobrov/react-hooks';
import { IBasePopupProps, TBasePopupVerticalAlignment } from '../types';

interface IProps extends Required<Pick<IBasePopupProps, 'gap'>> {
  domRect: DOMRect;
  alignment: Exclude<TBasePopupVerticalAlignment, 'auto'>;
}

interface IAlignment {
  top: string;
  bottom: string;
  y: string;
}

export function getVerticalAlignmentStyles({
  domRect,
  alignment,
  gap: gapProp,
}: IProps): IAlignment | undefined {
  if (!domRect) {
    return undefined;
  }

  const gap = isNumber(gapProp) ? gapProp : gapProp();

  if (alignment === 'down') {
    return {
      top: `${domRect.bottom + gap}px`,
      bottom: 'auto',
      y: '0',
    };
  }

  if (alignment === 'up') {
    return {
      top: 'auto',
      bottom: `${vevet.viewport.height - domRect.top + gap}px`,
      y: '0',
    };
  }

  if (alignment === 'center') {
    return {
      top: `${domRect.top + domRect.height / 2}px`,
      bottom: 'auto',
      y: '-50%',
    };
  }

  return undefined;
}
