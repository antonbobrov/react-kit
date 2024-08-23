import { NSplitText, SplitText } from '@anton.bobrov/vevet-init';
import { IBaseComponent } from '@types';

type TPickedProps =
  | 'hasLetters'
  | 'hasLines'
  | 'letterTag'
  | 'wordTag'
  | 'lineTag';

export interface ISplitTextProps
  extends IBaseComponent,
    Pick<NSplitText.IStaticProps, TPickedProps> {
  /** Source text */
  text: string;
  /** Event on creation */
  onInit: (text: SplitText) => void;
  /**
   * Lazy initialization
   *
   * @default true
   */
  isLazy?: boolean;
}
