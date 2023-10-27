import { useEffect, useState } from 'react';
import { GUI } from '../datGUI';
import {
  ICreateDatGUIFolderProps,
  createDatGUIFolder,
} from './createGUIFolder';

export interface IUseDatGUIFolderProps
  extends Omit<ICreateDatGUIFolderProps, 'onCreate'> {}

/**
 * Creates a dat.gui folder
 *
 * @example
 *
 * useDatGUIFolder({ name: 'GUI Folder' });
 */
export function useDatGUIFolder({ name, isOpen }: IUseDatGUIFolderProps) {
  const [folder, setFolder] = useState<GUI | null>(null);

  useEffect(() => {
    const instance = createDatGUIFolder({
      name,
      isOpen,
      onCreate: () => setFolder(folder),
    });

    return () => instance.destroy();
  }, [folder, isOpen, name]);

  return folder;
}
