import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

export type TButtonAnchorRenderAnchor = ForwardRefExoticComponent<
  any & RefAttributes<HTMLAnchorElement>
>;

export interface IButtonAnchorBaseProps {
  renderAnchor?: TButtonAnchorRenderAnchor;
}

export interface IButtonAnchorBtn
  extends IButtonAnchorBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Element tagName */
  tag: 'button';
  /** Button type */
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export interface IButtonAnchorLink
  extends IButtonAnchorBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  /** Element tagName */
  tag: 'a';
  /** Link */
  href: string;
}

export type TButtonAnchor = IButtonAnchorLink | IButtonAnchorBtn;
