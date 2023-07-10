import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { usePropState } from '@anton.bobrov/react-hooks';
import { ExpandContent } from '.';

type TComponent = typeof ExpandContent;

const meta: Meta<TComponent> = {
  title: 'Wrappers/ExpandContent',
  component: ExpandContent,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    style: {
      backgroundColor: '#ccc',
    },
    children: (
      <>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          fugiat numquam quia corporis sed, nesciunt aut at expedita sunt.
          Voluptates quos est adipisci exercitationem nihil nisi impedit labore
          itaque. Ex!
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          fugiat numquam quia corporis sed, nesciunt aut at expedita sunt.
          Voluptates quos est adipisci exercitationem nihil nisi impedit labore
          itaque. Ex!
        </div>
      </>
    ),
  },
};

export default meta;

const Template: StoryFn<TComponent> = ({
  isActive: isActiveProp,
  ...props
}) => {
  const [isActive, setIsActive] = usePropState(isActiveProp);

  return (
    <>
      <ExpandContent {...props} isActive={isActive} />

      <button type="button" onClick={() => setIsActive((val) => !val)}>
        {isActive ? 'Shrink' : 'Expand'}
      </button>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const DefaultActive = Template.bind({});
DefaultActive.args = {
  isActive: true,
};

export const WithoutAlpha = Template.bind({});
WithoutAlpha.args = {
  hasAlpha: false,
};
