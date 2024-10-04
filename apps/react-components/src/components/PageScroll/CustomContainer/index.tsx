import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from 'react';
import cn from 'classnames';
import { CustomScroll } from 'vevet';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';
import { PageScrollContext } from '../context';

/**
 * Container for custom scrolling.
 * Wrap your page with this component to enable custom scrolling.
 */
export const CustomContainer: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { selector, setCustomContainer } = useContext(PageScrollContext);
  const isCustom = selector instanceof CustomScroll;

  useEffect(() => {
    setCustomContainer?.(ref.current);

    return () => setCustomContainer?.(null);
  }, [setCustomContainer]);

  return (
    <div
      className={cn(
        prefixedClasNames(
          'page-scroll-custom-container',
          isCustom && 'is-custom',
        ),
      )}
    >
      <div ref={ref} className="v-custom-scroll">
        <div className="v-custom-scroll__wrapper">{children}</div>
      </div>
    </div>
  );
};
