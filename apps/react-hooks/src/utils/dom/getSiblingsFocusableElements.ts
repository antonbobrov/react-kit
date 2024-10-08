import { selectFocusableChildren } from './selectFocusableChildren';

/**
 * Retrieves the focusable siblings of a given element within the document.
 *
 * This function identifies all focusable elements in the document body
 * and determines the siblling elements relative to
 * the specified element. If the specified element is not found among
 * the focusable elements, it returns `null` for both siblings.
 *
 * @param element - The element for which to find focusable siblings.
 */
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
