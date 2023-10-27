import { useEffect, useState } from 'react';
import { useDeepCompareMemoize, useEvent } from '@anton.bobrov/react-hooks';
import {
  ICreateDatGUISettingsProps,
  createDatGUISettings,
} from './createDatGUISettings';
import { settingsToMutableObject } from './settingsToMutableObject';
import { TSettings } from './types';

export interface IUseDatGUISettingsProps<T extends TSettings>
  extends ICreateDatGUISettingsProps<T> {}

/**
 * Create dat.gui settings
 *
 * @example
 *
 * const { defaultSettings, settings } = useDatGUISettings({
 *   name: 'GUI Folder',
 *   settings: {
 *     color: { value: 0xff0000, type: 'color' },
 *     intensity: { value: 0.5, type: 'number', min: 0, max: 1, step: 0.1 },
 *     isVisible: { value: true, type: 'boolean' },
 *   },
 *   onChange({ color }) {
 *     console.log(color);
 *   },
 * });
 *
 * console.log(defaultSettings, settings);
 */
export function useDatGUISettings<T extends TSettings>({
  name,
  isOpen,
  settings: settingsProp,
  onChange: onChangeProp,
  debounceDelay,
}: IUseDatGUISettingsProps<T>) {
  const onChange = useEvent(onChangeProp);

  const [settings, setSettings] = useState(
    settingsToMutableObject(settingsProp)
  );

  const [guiSettings, setGuiSettings] =
    useState<ReturnType<typeof createDatGUISettings<T>>>();

  useEffect(() => {
    const instance = createDatGUISettings({
      name,
      isOpen,
      settings: settingsProp,
      debounceDelay,
      onChange: (data) => {
        setSettings({ ...data });
        onChange?.(data);
      },
    });
    setGuiSettings(instance);

    return () => instance.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    debounceDelay,
    isOpen,
    name,
    onChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useDeepCompareMemoize(settingsProp),
  ]);

  return {
    settings,
    defaultSettings: guiSettings?.defaultSettings ?? settings,
  };
}
