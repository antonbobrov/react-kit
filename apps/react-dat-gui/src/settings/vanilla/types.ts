import { TCreateDatGuiFolderProps } from '../../folder';
import { TData, TDataParameters } from '../types';

export type TValuable<T> = {
  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};

export type TCreateDatGuiSettingsProps<T extends TData> = Omit<
  TCreateDatGuiFolderProps,
  'onCreate'
> & {
  data: T;
  parameters: Partial<TValuable<TDataParameters<T>>>;
  onChange?: (settings: T) => void;
  /** @default 16 */
  debounceDelay?: number;
};

export type TCreateDatGuiSettingsReturns<T extends TData> = {
  /** Destroy the folder */
  destroy: () => void;
  /** Default settings */
  defaults: T;
  /** Current settings */
  current: T;
};
