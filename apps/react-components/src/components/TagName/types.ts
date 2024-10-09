import { AllHTMLAttributes } from 'react';

export interface ITagNameProps extends AllHTMLAttributes<any> {
  /** The tag name of the HTML element to create. */
  tagName: keyof HTMLElementTagNameMap;
}
