import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';

type TComponent = typeof Link;

const meta: Meta<TComponent> = {
  title: 'Elements/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    children: 'Push me',
  },
};

export default meta;

export const Internal: StoryObj<TComponent> = {
  args: {
    href: '/',
  },
};

export const External: StoryObj<TComponent> = {
  args: {
    href: 'https://google.com/',
    target: '_blank',
  },
};
