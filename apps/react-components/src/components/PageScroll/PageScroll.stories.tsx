import type { Meta, StoryFn } from '@storybook/react';
import React, { FC } from 'react';
import { times } from '@anton.bobrov/react-hooks';
import { PageScroll } from '.';

type TComponent = typeof PageScroll.Provider;

const meta: Meta<TComponent> = {
  title: 'Scroll/PageScroll',
  component: PageScroll.Provider,
};

export default meta;

const Components: FC = () => (
  <div>
    {times(
      (index) => (
        <div key={index}>Element</div>
      ),
      100,
    )}
  </div>
);

const Template: StoryFn<TComponent> = (props) => (
  <PageScroll.Provider {...props} getType={() => 'custom'}>
    <PageScroll.ScrollBar canAutoHide={false} />

    <PageScroll.CustomContainer>
      <Components />
    </PageScroll.CustomContainer>
  </PageScroll.Provider>
);

export const Default = Template.bind({});
Default.args = {};
