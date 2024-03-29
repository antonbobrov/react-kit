import { GUI, datGUI } from '../../base';
import { TCreateDatGuiFolderReturns, TCreateDatGuiFolderProps } from './types';

export * from './types';

/**
 * Creates a dat.gui folder
 *
 * @example
 *
 * const instance = createDatGuiFolder({
 *   name: 'GUI Folder',
 *   onCreate: (folder) => console.log(folder),
 * });
 *
 * instance.destroy();
 */
export function createDatGuiFolder({
  name,
  onCreate,
  isOpen = true,
}: TCreateDatGuiFolderProps): TCreateDatGuiFolderReturns {
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
