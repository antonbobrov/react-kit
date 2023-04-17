export const getAnchor = (element: any): HTMLAnchorElement | null => {
  if (element instanceof HTMLAnchorElement) {
    return element;
  }

  if (element.parentElement) {
    return getAnchor(element.parentElement);
  }

  return null;
};
