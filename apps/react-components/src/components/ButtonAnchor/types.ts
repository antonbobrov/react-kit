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

export type TButtonanchor = IButtonAnchorLink | IButtonAnchorBtn;
