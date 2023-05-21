import { useEffect, useState } from 'react';
import { useDebouncedEvent, useEvent } from '@anton.bobrov/react-hooks';
import { IUseDatGUIFolderProps, useDatGUIFolder } from './useDatGUIFolder';

type TNumber = {
  type: 'number';
  min?: number;
  max?: number;
  step?: number;
};

type TBoolean = {
  type: 'boolean';
};

type TColor = {
  type: 'color';
};

type TSetting = TNumber | TBoolean | TColor;

export interface IUseDatGUISettingsProps<T> extends IUseDatGUIFolderProps {
  /** Source object */
  source: T;
  /** Changeable properties */
  controls: ({ name: keyof T } & TSetting)[];
  /** @default 16 */
  debounceDelay?: number;
  /** Event on settings change */
  onChange?: (object: T) => void;
}

export function useDatGUISettings<T extends object>({
  source: sourceProp,
  controls: controlsProp,
  debounceDelay = 16,
  onChange: onChangeProp,
  ...props
}: IUseDatGUISettingsProps<T>) {
  const folder = useDatGUIFolder(props);

  const [source] = useState(sourceProp);
  const [controls] = useState(controlsProp);
  const [settings, setSettings] = useState(source);
  const onChange = useEvent(onChangeProp);

  const onSettingsUpdate = useDebouncedEvent(() => {
    setSettings({ ...source });
    onChange?.({ ...source });
  }, debounceDelay);

  useEffect(() => {
    if (!folder) {
      return undefined;
    }

    const controlsList = controls.map((setting) => {
      if (setting.type === 'number') {
        return folder
          .add(source, setting.name, setting.min, setting.max, setting.step)
          .onChange(onSettingsUpdate);
      }

      if (setting.type === 'boolean') {
        return folder.add(source, setting.name).onChange(onSettingsUpdate);
      }

      if (setting.type === 'color') {
        return folder
          .addColor(source, setting.name as string)
          .onChange(onSettingsUpdate);
      }

      return undefined;
    });

    return () => {
      controlsList.forEach((control) => control?.remove());
    };
  }, [controls, folder, onSettingsUpdate, source]);

  return settings;
}
