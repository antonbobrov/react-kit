import { SplitText } from '@anton.bobrov/vevet-init';
import { IBaseComponent } from '@types';

export interface ISplitTextProps extends IBaseComponent {
  /** Source text */
  text: string;
  /** Wrap each letter in a single element */
  appendLetters: boolean;
  /** Wrap each line in a single element */
  appendLines: boolean;
  /** Event on creation */
  onInit: (text: SplitText) => void;
}
