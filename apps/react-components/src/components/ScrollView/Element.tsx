import React, {
  cloneElement,
  FC,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { useScrollView } from './utils/useScrollView';
import { IScrollViewElementProps } from './types';

/**
 * ScrollView element.
 * Wrap some element to detect when it appears or disappears from the page viewport
 */
export const Element: FC<IScrollViewElementProps> = ({
  viewClassName = 'view',
  viewedClassName = 'viewed',
  onIn,
  onOut,
  isDisabled,
  inDelay,
  animation,
  children,
}) => {
  const ref = useRef<HTMLElement>(null);
  useImperativeHandle((children as any).ref, () => ref.current!);

  const [isViewed, setIsViewed] = useState(false);

  useScrollView({
    ref,
    onIn() {
      setIsViewed(true);
      onIn?.();
    },
    onOut() {
      setIsViewed(false);
      onOut?.();
    },
    isDisabled,
    inDelay,
  });

  const classNames = prefixedClasNames(
    'scroll-view',
    animation,
    isViewed && 'viewed',
  );

  return (
    <>
      {cloneElement(children, {
        className: cn(
          children.props.className,
          classNames,
          viewClassName,
          isViewed && viewedClassName,
        ),
        ref,
      })}
    </>
  );
};
