const focusableElementsSelector = [
  'a[href]',
  'button',
  'input',
  'textarea',
  'select',
  'details',
  '[tabindex]',
]
  .map((item) => `${item}:not(:disabled):not([tabindex="-1"])`)
  .join(',');

export function selectFocusableChildren(
  element: HTMLElement
): NodeListOf<HTMLElement> {
  return element.querySelectorAll(focusableElementsSelector);
}
