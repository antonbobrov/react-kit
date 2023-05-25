import { useEffect, useState } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import { GUI, datGUI } from './datGUI';

export interface IUseDatGUIFolderProps {
  /** GUI folder name */
  name: string;
  /** The folder is opened by default */
  isOpen?: boolean;
  /** Event on success */
  onSuccess?: (folder: GUI) => void;
  /** Event on error */
  onError?: (reason: any) => void;
}

/** Create a dat.gui folder */
export function useDatGUIFolder({
  name,
  isOpen,
  onSuccess: onSuccessProp,
  onError: onErrorProp,
}: IUseDatGUIFolderProps) {
  const [folder, setFolder] = useState<GUI | null>(null);

  const onSuccess = useEvent(onSuccessProp);
  const onError = useEvent(onErrorProp);

  useEffect(() => {
    let isDestroyed = false;
    let guiFolder: GUI | null = null;
    let instance: GUI | null = null;

    datGUI
      .then((result) => {
        instance = result;

        if (!isDestroyed && !!instance) {
          guiFolder = instance.addFolder(name);
          if (isOpen) {
            guiFolder.open();
          }

          onSuccess?.(guiFolder);
          setFolder(guiFolder);
        }
      })
      .catch(onError);

    return () => {
      isDestroyed = true;

      if (guiFolder) {
        instance?.removeFolder(guiFolder);
      }
    };
  }, [isOpen, name, onError, onSuccess]);

  return folder;
}
