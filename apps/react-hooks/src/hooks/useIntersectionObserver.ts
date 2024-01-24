import { THookEventElement } from '@types';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useCallback, useEffect, useId } from 'react';
import { isIntersectionObserverSupported } from '@utils/api';
import { useEvent } from './useEvent';

export interface IUseIntersectionObserverProps {
  /** Observable element */
  ref: THookEventElement<Element>;
  /** Observer callback */
  onEntry: (entry: IntersectionObserverEntry) => void;
  /** Triggered when IntersectionObserver is not supported */
  onFallback?: () => void;
  /** @default null */
  root?: Element | Document | null | undefined;
  /** @default 0 */
  threshold?: number | number[];
  /** @default '0px 0px 0px 0px' */
  rootMargin?: string;
  /**
   * The hook is disabled
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

// save instances to not create a new observer per hook call
const instances: TObserverInstance[] = [];

/** Create an intersection observer and observe an element */
export function useIntersectionObserver({
  ref,
  onEntry: onEntryProp,
  onFallback: onFallbackProp,
  root = null,
  threshold = 0,
  rootMargin = '0px 0px 0px 0px',
  isDisabled,
}: IUseIntersectionObserverProps) {
  const id = useId();

  const onEntry = useEvent(onEntryProp);
  const onFallback = useEvent(onFallbackProp);

  const getObserverInstance = useCallback(
    () =>
      instances.find(
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

    if (!isIntersectionObserverSupported()) {
      onFallback?.();

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

      instances.push(instance);
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
        instances.splice(instances.indexOf(instance), 1);
        instance.observer.disconnect();
      }
    };
  }, [
    getObserverInstance,
    id,
    isDisabled,
    onEntry,
    onFallback,
    ref,
    root,
    rootMargin,
    threshold,
  ]);
}
