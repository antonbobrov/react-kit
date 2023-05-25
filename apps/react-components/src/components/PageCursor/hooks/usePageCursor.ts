import { useContext } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import { PageCursorContext } from '../interal/context';

/** Page cursor states */
export function usePageCursor() {
  const {
    cursor,
    types,
    addType: addTypeProp,
    removeType: removeTypeProp,
  } = useContext(PageCursorContext);

  const addType = useEvent(addTypeProp);
  const removeType = useEvent(removeTypeProp);

  return { cursor, types, addType, removeType };
}
