import type { Meta, StoryObj } from '@storybook/react';
import { TagName } from '.';

type TComponent = typeof TagName;

const meta: Meta<TComponent> = {
  title: 'Elements/TagName',
  component: TagName,
  tags: ['autodocs'],
  args: {},
};

export default meta;

export const Default: StoryObj<TComponent> = {
  args: {
    tagName: 'div',
    children: 'div',
  },
};

export const H1: StoryObj<TComponent> = {
  args: {
    tagName: 'h1',
    children: 'h1',
  },
};

export const Image: StoryObj<TComponent> = {
  args: {
    tagName: 'img',
    src: 'https://picsum.photos/200/300',
  },
};
