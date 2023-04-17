import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { VideoPlayerVimeo } from '.';

type TComponent = typeof VideoPlayerVimeo;

const meta: Meta<TComponent> = {
  title: 'Video/VideoPlayerVimeo',
  component: VideoPlayerVimeo,
  tags: ['autodocs'],
  args: {
    id: '347254165',
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: 300, height: 168 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<TComponent> = {};
