import { TEventElement } from '@types';

export function addEventListener<
  Element extends TEventElement,
  Target extends keyof HTMLElementEventMap,
  Listener extends (event: DocumentEventMap[Target]) => void
>(
  element: Element,
  target: Target,
  listener: Listener,
  options?: boolean | AddEventListenerOptions
) {
  element.addEventListener(target, listener as any, options);

  const remove = () => {
    element.removeEventListener(target, listener as any, options);
  };

  return remove;
}
