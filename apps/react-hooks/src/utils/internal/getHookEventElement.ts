import { TEventElement, THookEventElement } from '@types';

export function getHookEventElement<T extends TEventElement>(
  ref: THookEventElement<T>
) {
  return ref && 'current' in ref ? ref.current : ref;
}
