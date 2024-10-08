import { GUI } from '../../base';

export type TCreateDatGuiFolderProps = {
  /** The name of the folder to be created. */
  name: string;
  /** Callback function triggered when the folder is created, receiving the folder as an argument. */
  onCreate: (folder: GUI) => void;
  /** The parent GUI or folder where this new folder should be added. If `null` or not provided, the folder is added to the root GUI. */
  parent?: GUI | null;
  /** Whether the folder should be open by default when created. */
  isOpen?: boolean;
};

export type TCreateDatGuiFolderReturns = {
  /** Function to destroy the folder and remove it from the parent GUI instance. */
  destroy: () => void;
};
