import { NSplitText, SplitText } from '@anton.bobrov/vevet-init';
import { IBaseComponent } from '@types';

export interface ISplitTextProps
  extends IBaseComponent,
    Pick<NSplitText.IStaticProps, 'hasLetters' | 'hasLines'> {
  /** Source text */
  text: string;
  /**
   * Text source
   * @default 'innerHTML'
   */
  textSource?: 'textContent' | 'innerText' | 'innerHTML';
  /** Event on creation */
  onInit: (text: SplitText) => void;
}
