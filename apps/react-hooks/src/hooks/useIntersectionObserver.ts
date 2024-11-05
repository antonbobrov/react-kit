/* eslint-disable no-underscore-dangle */
import { THookEventElement } from '@types';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useCallback, useEffect, useId } from 'react';
import { useEvent } from './useEvent';

export interface IUseIntersectionObserverProps {
  /** Observable element */
  ref: THookEventElement<Element>;

  /** Observer callback triggered when the observed entry is intersected */
  onEntry: (entry: IntersectionObserverEntry) => void;

  /**
   * The root element used for the intersection calculation.
   * @default null
   */
  root?: Element | Document | null | undefined;

  /**
   * The threshold(s) at which to trigger the callback.
   * @default 0
   */
  threshold?: number | number[];

  /**
   * The margin around the root.
   * @default '0px 0px 0px 0px'
   */
  rootMargin?: string;

  /**
   * If true, disables the intersection observer.
   * @default false
   */
  isDisabled?: boolean;
}

type TElement = {
  id: string;
  element: Element;
  onEntry: (entry: IntersectionObserverEntry) => void;
};

type TObserverInstance = {
  observer: IntersectionObserver;
  root: Element | Document | null | undefined;
  threshold: number | number[];
  rootMargin: string;
  elements: TElement[];
};

declare global {
  interface Window {
    __rkhUseIntersectionObserverInstances: TObserverInstance[];
  }
}

// save instances to not create a new observer per hook call
if (typeof window !== 'undefined') {
  window.__rkhUseIntersectionObserverInstances = [];
}

/**
 * Custom React hook that creates an Intersection Observer to monitor the visibility
 * of a specified element in relation to the viewport or a specified root element.
 *
 * When the observed element intersects with the specified threshold, the provided
 * `onEntry` callback is triggered.
 *
 * @param props - The hook properties.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *
 *   const handleIntersection = (entry: IntersectionObserverEntry) => {
 *     if (entry.isIntersecting) {
 *       console.log('Element is visible!');
 *     }
 *   };
 *
 *   useIntersectionObserver({
 *     ref,
 *     onEntry: handleIntersection,
 *   });
 *
 *   return <div ref={ref}>Observe me!</div>;
 * };
 */
export function useIntersectionObserver({
  ref,
  onEntry: onEntryProp,
  root = null,
  threshold = 0,
  rootMargin = '0px 0px 0px 0px',
  isDisabled,
}: IUseIntersectionObserverProps) {
  const id = useId();

  const onEntry = useEvent(onEntryProp);

  const getObserverInstance = useCallback(
    () =>
      window.__rkhUseIntersectionObserverInstances.find(
        (data) =>
          data.root === root &&
          data.threshold === threshold &&
          data.rootMargin === rootMargin,
      ),
    [root, rootMargin, threshold],
  );

  useEffect(() => {
    if (isDisabled) {
      return undefined;
    }

    // get ref element
    const element = getHookEventElement(ref);
    if (!element) {
      return undefined;
    }

    // get an existing observer instance
    let instance = getObserverInstance();

    if (!instance) {
      // create an observer instance if it does not exist yet
      instance = {
        observer: new IntersectionObserver(
          (entries) =>
            entries.forEach((entry) => {
              instance?.elements.forEach((item) => {
                if (item.element === entry.target) {
                  item.onEntry(entry);
                }
              });
            }),
          {
            root,
            threshold,
            rootMargin,
          },
        ),
        root,
        threshold,
        rootMargin,
        elements: [],
      };

      window.__rkhUseIntersectionObserverInstances.push(instance);
    }

    instance.elements.push({ id, element, onEntry });
    instance.observer.observe(element);

    return () => {
      if (!instance) {
        return;
      }

      instance.elements = instance.elements.filter((item) => item.id !== id);

      const isElementStillObservable = instance.elements.find(
        (item) => item.element === element,
      );

      if (!isElementStillObservable) {
        instance.observer.unobserve(element);
      }

      if (instance.elements.length === 0) {
        window.__rkhUseIntersectionObserverInstances.splice(
          window.__rkhUseIntersectionObserverInstances.indexOf(instance),
          1,
        );
        instance.observer.disconnect();
      }
    };
  }, [
    getObserverInstance,
    id,
    isDisabled,
    onEntry,
    ref,
    root,
    rootMargin,
    threshold,
  ]);
}
