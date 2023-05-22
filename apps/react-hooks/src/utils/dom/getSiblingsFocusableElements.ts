import { selectFocusableChildren } from './selectFocusableChildren';

export function getSiblingsFocusableElements(element: HTMLElement) {
  const focusableElements = Array.from(selectFocusableChildren(document.body));
  const index = focusableElements.findIndex((el) => el === element);

  if (index === -1) {
    return { previousSibling: null, nextSibling: null };
  }

  const prevIndex = index === 0 ? focusableElements.length - 1 : index - 1;
  const nextIndex = index === focusableElements.length - 1 ? 0 : index + 1;

  return {
    previousSibling: focusableElements[prevIndex],
    nextSibling: focusableElements[nextIndex],
  };
}
