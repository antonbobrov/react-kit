import { GUI } from '../../base';

export type TCreateDatGuiFolderProps = {
  /** GUI folder name */
  name: string;
  /** Callback on folder created */
  onCreate: (folder: GUI) => void;
  /** GUI parent folder */
  parent?: GUI | null;
  /** The folder is opened by default */
  isOpen?: boolean;
};

export type TCreateDatGuiFolderReturns = {
  /** Destroy the folder */
  destroy: () => void;
};
