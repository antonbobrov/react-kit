export type TNumber = {
  type: 'number';
  min: number;
  max: number;
  step: number;
};

export type TColor = {
  type: 'color';
};

export type TBoolean = {
  type: 'boolean';
};

export type TData = Record<string, number | boolean | unknown>;

export type TDataParameters<T extends TData> = {
  [Prop in keyof T]: T[Prop] extends boolean
    ? TBoolean
    : T[Prop] extends number
      ? TNumber | TColor
      : null;
};
