import type { Meta, StoryObj } from '@storybook/react';
import { SplitText } from '.';

type TComponent = typeof SplitText;

const meta: Meta<TComponent> = {
  title: 'Text/SplitText',
  component: SplitText,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TComponent> = {
  args: {
    text: 'This is a <br /> split text',
    appendLetters: true,
    appendLines: true,
  },
};
