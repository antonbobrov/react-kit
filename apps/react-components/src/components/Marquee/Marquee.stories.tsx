import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { usePropState } from '@anton.bobrov/react-hooks';
import { Marquee } from '.';

type TComponent = typeof Marquee;

const meta: Meta<TComponent> = {
  title: 'Text/Marquee',
  component: Marquee,
  tags: ['autodocs'],
  args: {
    children: 'Marquee text',
  },
};

export default meta;

const Template: StoryFn<TComponent> = ({
  isEnabled: isEnabledProp,
  speed: speedProp = 1,
  ...props
}) => {
  const [isEnabled, setIsEnabled] = usePropState(isEnabledProp);
  const [speed, setSpeed] = usePropState(speedProp);

  return (
    <>
      <button type="button" onClick={() => setIsEnabled(true)}>
        Enable
      </button>

      <button type="button" onClick={() => setIsEnabled(false)}>
        Disable
      </button>

      <button
        type="button"
        onClick={() => setSpeed((val) => Math.max(val + 0.2, 0.2))}
      >
        Faster
      </button>

      <button
        type="button"
        onClick={() => setSpeed((val) => Math.max(val - 0.2, 0.2))}
      >
        Slower
      </button>

      <br />

      <br />

      <h1>
        <Marquee {...props} isEnabled={isEnabled} speed={speed} />
      </h1>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isFpsNormalized: true,
};

export const WithReverseSpeed = Template.bind({});
WithReverseSpeed.args = {
  speed: -1,
};

export const WithSeparator = Template.bind({});
WithSeparator.args = {
  separator: <b style={{ display: 'inline-block', margin: '0 0.25em' }}>*</b>,
  prependWhitespace: false,
};
