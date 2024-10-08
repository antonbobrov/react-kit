import { useEffect } from 'react';
import { addEventListener } from '@utils/dom';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { THookEventElement } from '../types';
import { useEvent } from './useEvent';

export interface IUseEventListenerSettings {
  /** If true, disables the event listener. */
  isDisabled?: boolean;

  /** A function that returns a boolean indicating whether the hook should be disabled. */
  getIsDisabled?: () => boolean;
}

export interface IUseEventListenerProps<T, L>
  extends IUseEventListenerSettings {
  /** A reference to the target element to which the event listener will be attached. */
  ref: THookEventElement;

  /** The type of event to listen for. */
  target: T;

  /** The event listener function to be executed when the event occurs. */
  listener: L;

  /** Options for the event listener (e.g., capture, passive). */
  options?: boolean | AddEventListenerOptions;
}

/**
 * Custom React hook that adds an event listener to a specified target element.
 *
 * This hook manages the event listener lifecycle, attaching it to the target
 * element when the component mounts and removing it when the component unmounts
 * or when dependencies change. It also supports disabling the listener based on
 * a condition or a boolean flag.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *
 *   const handleClick = () => {
 *     console.log('Div clicked!');
 *   };
 *
 *   useEventListener({
 *     ref,
 *     target: 'click',
 *     listener: handleClick,
 *   });
 *
 *   return <div ref={ref}>Click me!</div>;
 * };
 */
export function useEventListener<
  Target extends keyof HTMLElementEventMap,
  Listener extends (event: DocumentEventMap[Target]) => void,
>({
  ref,
  target,
  listener: listenerProp,
  options,
  isDisabled,
  getIsDisabled: getIsDisabledProp,
}: IUseEventListenerProps<Target, Listener>) {
  const getIsDisabled = useEvent(getIsDisabledProp);
  const listener = useEvent(listenerProp);

  useEffect(() => {
    const isGetDisabled = getIsDisabled ? getIsDisabled() : false;

    if (isDisabled || isGetDisabled) {
      return undefined;
    }

    const element = getHookEventElement(ref);
    if (!element) {
      return undefined;
    }

    return addEventListener(element, target, listener, options);
  }, [listener, options, ref, isDisabled, target, getIsDisabled]);
}
