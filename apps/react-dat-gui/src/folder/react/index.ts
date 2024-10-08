import { useEffect, useState } from 'react';
import { GUI } from '../../base';
import { TUseDatGuiFolderProps } from './types';
import { createDatGuiFolder } from '../vanilla';

export * from './types';

/**
 * React hook to create and manage a dat.GUI folder.
 *
 * @example
 * const folder = useDatGuiFolder({ name: 'GUI Folder', parent: guiParentFolder });
 */
export function useDatGuiFolder({
  name,
  isOpen,
  parent,
}: TUseDatGuiFolderProps) {
  const [folder, setFolder] = useState<GUI | null>(null);

  useEffect(() => {
    const instance = createDatGuiFolder({
      name,
      isOpen,
      parent,
      onCreate: (data) => setFolder(data),
    });

    return () => instance.destroy();
  }, [isOpen, name, parent]);

  return folder;
}
