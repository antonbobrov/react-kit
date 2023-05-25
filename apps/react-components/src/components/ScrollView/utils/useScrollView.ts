import { RefObject, useContext, useEffect } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import { ScrollViewContext } from './context';

export interface IUseScrollView {
  /** Element ref */
  ref: RefObject<HTMLElement>;
  /** Event when element is in viewport */
  onIn?: () => void;
  /** Event when element is out of viewport */
  onOut?: () => void;
  /** The hook is disabled */
  isDisabled?: boolean;
}

/**
 * ScrollView hook that helps you detect elements in or out of viewport
 */
export function useScrollView({
  ref,
  onIn: onInProp,
  onOut: onOutProp,
  isDisabled,
}: IUseScrollView) {
  const { scrollView } = useContext(ScrollViewContext);

  const onIn = useEvent(onInProp);
  const onOut = useEvent(onOutProp);

  useEffect(() => {
    const { current: element } = ref;

    if (isDisabled || !element || !scrollView) {
      return undefined;
    }

    const inCallback = scrollView.addCallback('in', (target) => {
      if (target === element) {
        onIn?.();
      }
    });

    const outCallback = scrollView.addCallback('out', (target) => {
      if (target === element) {
        onOut?.();
      }
    });

    const observer = scrollView.addElement(element);

    return () => {
      inCallback.remove();
      outCallback.remove();
      observer.remove();
    };
  }, [isDisabled, onIn, onOut, ref, scrollView]);
}
