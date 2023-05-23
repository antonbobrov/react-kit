import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { VideoPlayerMp4 } from '.';

type TComponent = typeof VideoPlayerMp4;

const meta: Meta<TComponent> = {
  title: 'Video/VideoPlayerMp4',
  component: VideoPlayerMp4,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: 300, height: 168 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<TComponent> = {
  args: {
    src: './video/video.mp4',
  },
};
