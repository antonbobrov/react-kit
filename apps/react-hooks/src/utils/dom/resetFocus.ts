/**
 * Reset current focus
 * @see https://developer.mozilla.org/docs/Web/API/Document/activeElement
 */
export function resetFocus() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}
