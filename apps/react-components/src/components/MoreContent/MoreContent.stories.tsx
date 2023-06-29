import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { times } from '@anton.bobrov/react-hooks';
import { MoreContent } from '.';

type TComponent = typeof MoreContent;

const meta: Meta<TComponent> = {
  title: 'Wrappers/MoreContent',
  component: MoreContent,
  tags: ['autodocs'],
  args: {
    style: {
      maxWidth: 300,
    },
    children: (
      <>
        {times(
          (index) => (
            <div key={index}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              fugiat numquam quia corporis sed, nesciunt aut at expedita sunt.
              Voluptates quos est adipisci exercitationem nihil nisi impedit
              labore itaque. Ex!
            </div>
          ),
          10
        )}
      </>
    ),
  },
};

export default meta;

export const Default: StoryObj<TComponent> = {};
