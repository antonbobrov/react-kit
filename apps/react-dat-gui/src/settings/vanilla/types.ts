import { TCreateDatGuiFolderProps } from '../../folder';
import { TData, TDataParameters } from '../types';

export type TValuable<T> = {
  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};

export type TCreateDatGuiSettingsProps<T extends TData> = Omit<
  TCreateDatGuiFolderProps,
  'onCreate'
> & {
  /** The object containing the initial values for the dat.GUI settings. */
  data: T;
  /** A partial object that defines the settings parameters (type, min, max, step, etc.). */
  parameters: Partial<TValuable<TDataParameters<T>>>;
  /** An optional callback that gets triggered when the settings change. */
  onChange?: (settings: T) => void;
  /**
   * Optional debounce delay for the `onChange` callback in milliseconds.
   * @default 16
   */
  debounceDelay?: number;
};

export type TCreateDatGuiSettingsReturns<T extends TData> = {
  /** A method to destroy the folder and its settings. */
  destroy: () => void;
  /** The default settings as initially provided. */
  defaults: T;
  /** The current settings reflecting changes made in the dat.GUI interface. */
  current: T;
};
