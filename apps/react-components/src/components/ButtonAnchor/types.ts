import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface IButtonAnchorBtn
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Element tagName */
  tag: 'button';
  /** Button type */
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export interface IButtonAnchorLink
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  /** Element tagName */
  tag: 'a';
  /** Link */
  href: string;
}

export type TButtonAnchor = IButtonAnchorLink | IButtonAnchorBtn;

/** @deprecated */
export type TButtonanchor = TButtonAnchor;
