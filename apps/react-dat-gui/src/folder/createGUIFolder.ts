import { GUI, datGUI } from '../datGUI';

export interface ICreateDatGUIFolderProps {
  /** GUI folder name */
  name: string;
  /** Callback on folder created */
  onCreate: (folder: GUI) => void;
  /** The folder is opened by default */
  isOpen?: boolean;
}

/**
 * Creates a dat.gui folder
 *
 * @example
 *
 * const instance = createDatGUIFolder({
 *   name: 'GUI Folder',
 *   onCreate: (folder) => console.log(folder),
 * });
 *
 * instance.destroy();
 */
export function createDatGUIFolder({
  name,
  onCreate,
  isOpen = true,
}: ICreateDatGUIFolderProps) {
  let isDestroyed = false;
  let folder: GUI | undefined;
  let instance: GUI | null = null;

  datGUI
    .then((result) => {
      instance = result;

      if (isDestroyed || !instance) {
        return;
      }

      folder = instance.addFolder(name);

      if (isOpen) {
        folder.open();
      }

      onCreate(folder);
    })
    .catch((e) => {
      throw new Error(e);
    });

  const destroy = () => {
    isDestroyed = true;

    if (folder) {
      instance?.removeFolder(folder);
    }
  };

  return { destroy };
}
