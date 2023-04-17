import type { Meta, StoryObj } from '@storybook/react';
import { Marquee } from '.';

type TComponent = typeof Marquee;

const meta: Meta<TComponent> = {
  title: 'Text/Marquee',
  component: Marquee,
  tags: ['autodocs'],
  args: {
    children: 'Marquee Text',
    separator: '  *',
    speed: 1,
    prependWhitespace: true,
  },
};

export default meta;

export const Default: StoryObj<TComponent> = {};
