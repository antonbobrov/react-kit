import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { usePropState, times } from '@anton.bobrov/react-hooks';
import { ScrollView } from '.';

type TComponent = typeof ScrollView.Provider;

const meta: Meta<TComponent> = {
  title: 'Scroll/ScrollVew',
  component: ScrollView.Provider,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<TComponent> = ({
  isEnabled: isEnabledProp,
  ...props
}) => {
  const [isEnabled, setIsEnabled] = usePropState(isEnabledProp);

  return (
    <>
      <button type="button" onClick={() => setIsEnabled(true)}>
        Enable ScrollView
      </button>

      <ScrollView.Provider isEnabled={isEnabled} {...props}>
        <div>
          {times(
            (index) => (
              <ScrollView.Element key={index} animation="fadeInUp">
                <div>Element</div>
              </ScrollView.Element>
            ),
            100
          )}
        </div>
      </ScrollView.Provider>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
