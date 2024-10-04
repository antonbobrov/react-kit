import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { usePropState } from '@anton.bobrov/react-hooks';
import { Marquee } from '.';

type TComponent = typeof Marquee;

const meta: Meta<TComponent> = {
  title: 'Text/Marquee',
  component: Marquee,
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
  },
  args: {
    gap: 10,
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
  canCloneNodes: true,
};

export const WithNotClonableText = Template.bind({});
WithNotClonableText.args = {};

export const WithReverseSpeed = Template.bind({});
WithReverseSpeed.args = {
  speed: -1,
};

export const WithHTMLElements = Template.bind({});
WithHTMLElements.args = {
  children: [
    <div
      style={{ width: '20vw', height: '100px', backgroundColor: '#dd7171' }}
    />,
    <div
      style={{ width: '40vw', height: '50px', backgroundColor: '#8abd41' }}
    />,
    <div
      style={{ width: '10vw', height: '100px', backgroundColor: '#32e3d7' }}
    />,
    <div
      style={{ width: '15vw', height: '10px', backgroundColor: '#5139d7' }}
    />,
    <div
      style={{ width: '5vw', height: '100px', backgroundColor: '#e332d4' }}
    />,
    <div style={{ width: '50vw', height: '100px', backgroundColor: '#000' }} />,
    <div
      style={{ width: '10vw', height: '30px', backgroundColor: '#e34a32' }}
    />,
  ],
  speed: 3,
};
