import type { Meta, StoryObj } from '@storybook/react';
import { BaseVideo } from '.';

type TComponent = typeof BaseVideo;

const meta: Meta<TComponent> = {
  title: 'Video/BaseVideo',
  component: BaseVideo,
  tags: ['autodocs'],
  args: {
    width: 300,
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
