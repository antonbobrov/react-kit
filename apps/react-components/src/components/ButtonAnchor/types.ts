import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface IButtonAnchorBtn
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  tag: 'button';
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export interface IButtonAnchorLink
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  tag: 'a';
  href: string;
}

export type TButtonAnchor = IButtonAnchorLink | IButtonAnchorBtn;

/** @deprecated */
export type TButtonanchor = TButtonAnchor;
