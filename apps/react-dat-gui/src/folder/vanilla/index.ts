import { GUI, datGUI } from '../../base';
import { TCreateDatGuiFolderReturns, TCreateDatGuiFolderProps } from './types';

export * from './types';

/**
 * Creates a folder in a dat.GUI instance and provides a method to destroy it later.
 * This function handles asynchronous loading of `dat.gui` and manages the folder creation within the given `parent` GUI instance.
 *
 * @example
 * const instance = createDatGuiFolder({
 *   name: 'GUI Folder',
 *   parent: guiParentFolder,
 *   onCreate: (folder) => console.log(folder),
 * });
 *
 * instance.destroy();
 */
export function createDatGuiFolder({
  name,
  onCreate,
  parent,
  isOpen = true,
}: TCreateDatGuiFolderProps): TCreateDatGuiFolderReturns {
  let isDestroyed = false;
  let folder: GUI | undefined;
  let instance: GUI | null = null;

  // Load dat.GUI instance and create the folder if not already destroyed
  datGUI
    .then((result) => {
      if (parent === null) {
        return;
      }

      instance = parent ?? result;

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

  /**
   * Destroys the folder by removing it from the parent `dat.GUI` instance.
   */
  const destroy = () => {
    isDestroyed = true;

    try {
      if (folder) {
        instance?.removeFolder(folder);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  return { destroy };
}
