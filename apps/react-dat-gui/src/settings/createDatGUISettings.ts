import { GUI } from '../datGUI';
import { ICreateDatGUIFolderProps, createDatGUIFolder } from '../folder';
import { settingsToMutableObject } from './settingsToMutableObject';
import { TMutableObject, TSettings } from './types';

export interface ICreateDatGUISettingsProps<T extends TSettings>
  extends Omit<ICreateDatGUIFolderProps, 'onCreate'> {
  settings: T;
  onChange?: (settings: TMutableObject<T>) => void;
  /** @default 16 */
  debounceDelay?: number;
}

/**
 * Create dat.gui settings
 *
 * @example
 *
 * const { defaultSettings, destroy } = createDatGUISettings({
 *   name: 'GUI Folder',
 *   settings: {
 *     color: { value: 0xff0000, type: 'color' },
 *     intensity: { value: 0.5, type: 'number', min: 0, max: 1, step: 0.1 },
 *     isVisible: { value: true, type: 'boolean' },
 *   },
 *   onChange(settings) {
 *     console.log(defaultSettings, settings);
 *   },
 * });
 *
 * destroy();
 */
export function createDatGUISettings<T extends TSettings>({
  name,
  isOpen,
  settings,
  onChange: onChangeProp,
  debounceDelay = 16,
}: ICreateDatGUISettingsProps<T>) {
  const mutableObject = settingsToMutableObject(settings);
  const defaultSettings = { ...mutableObject };

  let debounceTimeout: number | undefined;

  const onChange = () => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
      onChangeProp?.(mutableObject);
    }, debounceDelay);
  };

  const onFolderCreate = (folder: GUI) => {
    Object.keys(settings).forEach((key) => {
      const set = settings[key];

      if (set.type === 'number') {
        folder
          .add(mutableObject as any, key, set.min, set.max, set.step)
          .onChange(() => onChange?.());
      }

      if (set.type === 'color') {
        folder
          .addColor(mutableObject as any, key as any)
          .onChange(() => onChange?.());
      }

      if (set.type === 'boolean') {
        folder
          .add(mutableObject as any, key as any)
          .onChange(() => onChange?.());
      }
    });
  };

  const folderInstance = createDatGUIFolder({
    name,
    isOpen,
    onCreate: onFolderCreate,
  });

  const destroy = () => {
    folderInstance.destroy();
  };

  return { destroy, settings: mutableObject, defaultSettings };
}
