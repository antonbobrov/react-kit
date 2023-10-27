export type TNumber = {
  value: number;
  type: 'number';
  min: number;
  max: number;
  step: number;
};

export type TColor = {
  value: number;
  type: 'color';
};

export type TBoolean = {
  value: boolean;
  type: 'boolean';
};

export type TSetting = TNumber | TColor | TBoolean;

export type TSettings = Record<string, TSetting>;

export type TMutableObject<T extends TSettings> = {
  [Prop in keyof T]: T[Prop]['value'];
};
