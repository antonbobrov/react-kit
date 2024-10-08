import type { Meta, StoryFn } from '@storybook/react';
import { usePropState } from '@anton.bobrov/react-hooks';
import React from 'react';
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

const Template: StoryFn<TComponent> = ({
  isPlaying: isPlayingProp,
  ...props
}) => {
  const [isPlaying, setIsPlaying] = usePropState(isPlayingProp);

  return (
    <>
      <button type="button" onClick={() => setIsPlaying(true)}>
        Play
      </button>

      <button type="button" onClick={() => setIsPlaying(false)}>
        Pause
      </button>

      <br />

      <BaseVideo {...props} isPlaying={isPlaying} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  src: './video/video.mp4',
  isPlaying: true,
};
