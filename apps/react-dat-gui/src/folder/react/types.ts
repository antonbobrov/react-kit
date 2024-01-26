import { TCreateDatGuiFolderProps } from '../vanilla';

export type TUseDatGuiFolderProps = Omit<TCreateDatGuiFolderProps, 'onCreate'>;
