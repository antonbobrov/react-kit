import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SplitText } from '.';

type TComponent = typeof SplitText;

const meta: Meta<TComponent> = {
  title: 'Text/SplitText',
  component: SplitText,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TComponent> = {
  args: {
    text: 'This is a <br /> split text',
    appendLetters: true,
    appendLines: true,
  },
};

const TemplateWithUpdate: StoryFn<TComponent> = ({
  text: textProp,
  ...props
}) => {
  const [text, setText] = useState(textProp);

  return (
    <>
      <SplitText {...props} text={text} />

      <br />

      <button
        type="button"
        onClick={() => setText((val) => `${val} / additional text`)}
      >
        Update text
      </button>
    </>
  );
};

export const WithUpdate = TemplateWithUpdate.bind({});
WithUpdate.args = {
  text: 'Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  appendLetters: true,
  appendLines: true,
};
