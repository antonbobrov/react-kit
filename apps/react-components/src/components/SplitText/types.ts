import { SplitText } from '@anton.bobrov/vevet-init';
import { IBaseComponent } from '@types';

export interface ISplitTextProps extends IBaseComponent {
  text: string;
  appendLetters: boolean;
  appendLines: boolean;
  onInit: (text: SplitText) => void;
}
