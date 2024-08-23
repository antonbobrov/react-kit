import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SplitText } from '.';

type TComponent = typeof SplitText;

const meta: Meta<TComponent> = {
  title: 'Text/SplitText',
  component: SplitText,
  tags: ['autodocs'],
  args: {
    style: {
      fontSize: 30,
    },
  },
};

export default meta;

export const Default: StoryObj<TComponent> = {
  args: {
    text: ' <b>Lorem</b>ipsum dolor <b style="color: red;">sit</b> amet,&nbsp;consectetur adipiscing elit, <span style="color: blue;">sed <b><i>d</i>o</b></span> eius<b>m<i>od</i></b> tempor <i>incididunt ut</i> labore et dolore magna aliqua. <br /> <br /> <button type="button" style="font: inherit; background-color: #ccc;">Ut enim</button> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    hasLetters: true,
    hasLines: true,
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
  hasLetters: true,
  hasLines: true,
};
