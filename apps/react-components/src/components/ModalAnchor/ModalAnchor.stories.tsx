import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ModalAnchor } from '.';

type TComponent = typeof ModalAnchor;

const meta: Meta<TComponent> = {
  title: 'Modals/ModalAnchor',
  component: ModalAnchor,
  tags: ['autodocs'],
  args: {
    anchor: <button type="button">Click to open a modal</button>,
    children: (
      <>
        <p>Some text</p>

        <input type="text" placeholder="Some text" />

        <button type="button">Some button</button>
      </>
    ),
  },
};

export default meta;

export const Default: StoryObj<TComponent> = {
  args: {},
};
