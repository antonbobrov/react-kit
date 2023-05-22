import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LazyVideo } from '.';

type TComponent = typeof LazyVideo;

const meta: Meta<TComponent> = {
  title: 'Video/LazyVideo',
  component: LazyVideo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: 200, height: 200 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    autoPlay: true,
    controls: true,
    muted: true,
  },
};

export default meta;

export const Default: StoryObj<TComponent> = {
  args: {
    src: './video/video.mp4',
  },
};
