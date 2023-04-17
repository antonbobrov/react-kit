export function resetFocus() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}
