import { useEffect, useState } from 'react';
import { GUI } from '../../base';
import { TUseDatGuiFolderProps } from './types';
import { createDatGuiFolder } from '../vanilla';

export * from './types';

/**
 * Creates a dat.gui folder
 *
 * @example
 *
 * useDatGuiFolder({ name: 'GUI Folder' });
 */
export function useDatGuiFolder({ name, isOpen }: TUseDatGuiFolderProps) {
  const [folder, setFolder] = useState<GUI | null>(null);

  useEffect(() => {
    const instance = createDatGuiFolder({
      name,
      isOpen,
      onCreate: () => setFolder(folder),
    });

    return () => instance.destroy();
  }, [folder, isOpen, name]);

  return folder;
}
