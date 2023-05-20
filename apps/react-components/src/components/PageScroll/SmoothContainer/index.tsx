import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from 'react';
import cn from 'classnames';
import { SmoothScroll } from '@anton.bobrov/vevet-init';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';
import { PageScrollContext } from '../context';

export const SmoothContainer: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { selector, setSmoothContainer } = useContext(PageScrollContext);
  const isSmooth = selector instanceof SmoothScroll;

  useEffect(() => {
    setSmoothContainer?.(ref.current);

    return () => setSmoothContainer?.(null);
  }, [setSmoothContainer]);

  return (
    <div
      className={cn(
        prefixedClasNames(
          'page-scroll-smooth-container',
          isSmooth && 'is-smooth'
        )
      )}
    >
      <div ref={ref} className="v-smooth-scroll">
        <div className="v-smooth-scroll__container">{children}</div>
      </div>
    </div>
  );
};
