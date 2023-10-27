import { TMutableObject, TSettings } from './types';

export function settingsToMutableObject<T extends TSettings>(settings: T) {
  const mutableObject: TMutableObject<T> = Object.keys(settings).reduce(
    (o, key) => Object.assign(o, { [key]: settings[key].value }),
    {}
  ) as any;

  return mutableObject;
}
