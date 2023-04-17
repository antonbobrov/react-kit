import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { VideoPlayer } from '.';

type TComponent = typeof VideoPlayer;

const meta: Meta<TComponent> = {
  title: 'Video/VideoPlayer',
  component: VideoPlayer,
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

export const Mp4: StoryObj<TComponent> = {
  args: {
    source: 'mp4',
    src: './video/video.mp4',
  },
};

export const Vimeo: StoryObj<TComponent> = {
  args: {
    source: 'vimeo',
    id: '347254165',
  },
};

export const YouTube: StoryObj<TComponent> = {
  args: {
    source: 'youtube',
    id: 'oOkGmK3_Hdg',
  },
};
