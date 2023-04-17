import cn from 'classnames';
import { isString } from '@anton.bobrov/react-hooks';
import { prefixedClassName } from './prefixedClassName';

export function prefixedClasNames(
  ...classNames: (string | boolean | undefined)[]
) {
  return cn(
    classNames.map((value) => (isString(value) ? prefixedClassName(value) : ''))
  );
}
