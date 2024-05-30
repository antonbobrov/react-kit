import { useEffect, useState } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import { TUseDatGuiSettingsProps } from './types';
import { TCreateDatGuiSettingsReturns, createDatGuiSettings } from '../vanilla';
import { TData } from '../types';

export * from './types';

/**
 * Create dat.gui settings
 *
 * @example
 *
 * const { defaults } = useDatGuiSettings({
 *   name: 'GUI Folder',
 *   parent: guiParentFolder,
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
 *     console.log(defaults, current);
 *   },
 * });
 */
export function useDatGuiSettings<T extends TData>({
  name,
  isOpen,
  parent,
  data,
  parameters,
  onChange: onChangeProp,
  debounceDelay,
}: TUseDatGuiSettingsProps<T>) {
  const onChange = useEvent(onChangeProp);

  const [gui, setGui] = useState<TCreateDatGuiSettingsReturns<T>>();
  const [current, setCurrent] = useState({ ...data });

  useEffect(() => {
    const instance = createDatGuiSettings({
      name,
      isOpen,
      parent,
      data,
      parameters,
      debounceDelay,
      onChange: (result) => {
        setCurrent({ ...result });
        onChange?.({ ...result });
      },
    });

    setGui(instance);

    return () => instance.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceDelay, isOpen, name, parent, onChange]);

  return {
    defaults: gui?.defaults ?? data,
    current,
  };
}
