import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { VideoPlayerYoutube } from '.';

type TComponent = typeof VideoPlayerYoutube;

const meta: Meta<TComponent> = {
  title: 'Video/VideoPlayerYoutube',
  component: VideoPlayerYoutube,
  tags: ['autodocs'],
  args: {
    id: 'oOkGmK3_Hdg',
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

export const Autolplay: StoryObj<TComponent> = {
  args: {
    autoplay: 1,
  },
};
