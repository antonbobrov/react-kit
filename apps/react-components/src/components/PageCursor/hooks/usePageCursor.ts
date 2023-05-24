import { useContext } from 'react';
import { PageCursorContext } from '../interal/context';

/** Page cursor states */
export function usePageCursor() {
  const { cursor, types } = useContext(PageCursorContext);

  return { cursor, types };
}
