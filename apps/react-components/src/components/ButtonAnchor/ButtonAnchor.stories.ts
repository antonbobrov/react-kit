import type { Meta, StoryObj } from '@storybook/react';
import { ButtonAnchor } from '.';

type TComponent = typeof ButtonAnchor;

const meta: Meta<TComponent> = {
  title: 'Elements/ButtonAnchor',
  component: ButtonAnchor,
  tags: ['autodocs'],
  args: {
    children: 'Push me',
  },
};

export default meta;

export const Link: StoryObj<TComponent> = {
  args: {
    tag: 'a',
    href: 'https://google.com',
    target: '_blank',
  },
};

export const Button: StoryObj<TComponent> = {
  args: {
    tag: 'button',
  },
};
