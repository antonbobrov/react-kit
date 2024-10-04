import { ReactNode } from 'react';
import { CustomScroll, NCustomScroll } from 'vevet';

export interface IPageScrollProviderProps {
  children: ReactNode;
  /** Define type of scrolling */
  getType?: () => 'custom' | 'native';
  /** Custom scrolling properties */
  customScrollProps?: NCustomScroll.IChangeableProps;
  /** Callback on custom scroll initialization */
  onCustomScrollInit?: (customScroll: CustomScroll) => void;
}
