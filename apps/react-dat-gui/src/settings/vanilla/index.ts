import { GUI } from '../../base';
import {
  TCreateDatGuiSettingsReturns,
  TCreateDatGuiSettingsProps,
} from './types';
import { createDatGuiFolder } from '../../folder';
import { objectKeys } from '../utils/objectKeys';
import { TData } from '../types';

export * from './types';

/**
 * Create dat.gui settings
 *
 * @example
 *
 * const instance = createDatGuiSettings({
 *   name: 'GUI Folder',
 *   data: {
 *     color: 0xff0000,
 *     intensity: 0.5,
 *     isVisible: true,
 *   },
 *   parameters: {
 *     color: { type: 'color' },
 *     intensity: { type: 'number', min: 0, max: 1, step: 0.1 },
 *     isVisible: { type: 'boolean' },
 *   },
 *   onChange(current) {
 *     console.log(instance.defaults, current);
 *   },
 * });
 *
 * instance.destroy();
 */
export function createDatGuiSettings<T extends TData>({
  name,
  isOpen,
  data,
  parameters,
  onChange: onChangeProp,
  debounceDelay = 16,
}: TCreateDatGuiSettingsProps<T>): TCreateDatGuiSettingsReturns<T> {
  const current = data as any;
  const defaults = { ...current };

  let debounceTimeout: number | undefined;

  const onChange = () => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => onChangeProp?.(current), debounceDelay);
  };

  const onCreate = (folder: GUI) => {
    objectKeys(parameters).forEach((key) => {
      const set = parameters[key];

      if (!set) {
        return;
      }

      if (set.type === 'number') {
        folder
          .add(current, key, set.min, set.max, set.step)
          .onChange(() => onChange());
      }

      if (set.type === 'color') {
        folder.addColor(current, key as any).onChange(() => onChange());
      }

      if (set.type === 'boolean') {
        folder.add(current, key).onChange(() => onChange());
      }
    });
  };

  const folderInstance = createDatGuiFolder({
    name,
    isOpen,
    onCreate,
  });

  const destroy = () => {
    folderInstance.destroy();
  };

  return { destroy, defaults, current };
}
