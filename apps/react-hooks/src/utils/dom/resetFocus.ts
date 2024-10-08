/**
 * Resets the current focus by blurring the active element.
 *
 * This function checks if the currently focused element is an instance of
 * `HTMLElement`, and if so, it removes focus from that element by calling
 * the `blur` method.
 *
 * @see https://developer.mozilla.org/docs/Web/API/Document/activeElement
 */
export function resetFocus() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}
