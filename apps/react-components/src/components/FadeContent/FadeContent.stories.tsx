import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { usePropState } from '@anton.bobrov/react-hooks';
import { times } from '@anton.bobrov/vevet-init';
import { FadeContent } from '.';

type TComponent = typeof FadeContent;

const meta: Meta<TComponent> = {
  title: 'Wrappers/FadeContent',
  component: FadeContent,
  tags: ['autodocs'],
  args: {
    style: {
      backgroundColor: '#ccc',
    },
  },
};

export default meta;

const Template: StoryFn<TComponent> = ({
  activeKey: activeKeyProp,
  content,
  ...props
}) => {
  const [activeKey, setActiveKey] = usePropState(activeKeyProp);

  return (
    <>
      <ul>
        {content.map(({ key }) => (
          <li key={key}>
            <button type="button" onClick={() => setActiveKey(key)}>
              {`Activate content #${key} ${activeKey === key ? ' / active' : ''}`}
            </button>
          </li>
        ))}
      </ul>

      <FadeContent {...props} activeKey={activeKey} content={content} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  activeKey: 1,
  content: [
    {
      key: 0,
      children: times((index) => <div key={index}>Content 0</div>, 5),
    },
    {
      key: 1,
      children: times((index) => <div key={index}>Content 1</div>, 10),
    },
    {
      key: 2,
      children: times((index) => <div key={index}>Content 2</div>, 15),
    },
  ],
};
