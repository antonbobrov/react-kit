import { useId } from 'react';

/** The same as `useId` but will not contain colons */
export function useDomId() {
  const generatedId = useId();

  return generatedId.replace(/:/g, '_');
}
